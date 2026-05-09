/**
 * Phase 2 codegen — emits literal maps from merged default config for O(1) runtime lookup.
 * Run: npm run codegen
 */
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

import type { DesignSystemConfig } from "../src/config/designSystemConfig";
import { createDesignSystemConfig } from "../src/config/createDesignSystemConfig";

const HEADER = `/**
 * @generated — do not edit by hand. Run \`npm run codegen\`.
 * Source: \`createDesignSystemConfig()\` merged defaults.
 */

`;

/** Stable key order for deterministic diffs. */
function sortRecordKeys<T extends Record<string, unknown>>(obj: T): T {
  const out = {} as T;
  for (const key of Object.keys(obj).sort()) {
    out[key as keyof T] = obj[key as keyof T];
  }
  return out;
}

function serializeConst(name: string, value: unknown, typeName: string): string {
  return `${HEADER}export const ${name} = ${JSON.stringify(value, null, 2)} as const;

export type ${typeName} = typeof ${name};
`;
}

function buildMotionPresets(cfg: DesignSystemConfig): Record<string, unknown> {
  return {
    Button: cfg.components.Button.motion ?? {},
    TextInput: cfg.components.TextInput.motion ?? {},
  };
}

function main(): void {
  const cfg = createDesignSystemConfig();
  const outDir = join(process.cwd(), "src/generated");
  mkdirSync(outDir, { recursive: true });

  const light = sortRecordKeys(cfg.tokens.semantic.light as Record<string, unknown>);
  const dark = sortRecordKeys(cfg.tokens.semantic.dark as Record<string, unknown>);
  const motion = sortRecordKeys(buildMotionPresets(cfg) as Record<string, unknown>);

  writeFileSync(
    join(outDir, "styles.static.light.ts"),
    serializeConst("semanticStaticLight", light, "SemanticStaticLight")
  );
  writeFileSync(
    join(outDir, "styles.static.dark.ts"),
    serializeConst("semanticStaticDark", dark, "SemanticStaticDark")
  );
  writeFileSync(join(outDir, "motion.presets.ts"), serializeConst("motionPresets", motion, "MotionPresets"));

  console.log("codegen: wrote src/generated/{styles.static.light.ts,styles.static.dark.ts,motion.presets.ts}");
}

main();
