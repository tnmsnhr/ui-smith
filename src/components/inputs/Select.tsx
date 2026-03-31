import React from 'react';
import { View, Text as RNText, Pressable, ScrollView } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  value?: string;
  onChange?: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({ value, onChange, options, placeholder }) => {
  const { core, semantic } = useTheme();
  const [open, setOpen] = React.useState(false);

  const selectedLabel = options.find((o) => o.value === value)?.label;

  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        style={{
          height: 44,
          borderRadius: core.radii.md,
          borderWidth: 1,
          borderColor: semantic['border.default'],
          backgroundColor: semantic['background.surface'],
          paddingHorizontal: core.spacing.sm,
          justifyContent: 'center'
        }}
      >
        <RNText
          style={{
            fontFamily: core.typography.fontFamily.body,
            fontSize: core.typography.fontSize.md,
            color: selectedLabel ? semantic['text.primary'] : semantic['text.muted']
          }}
        >
          {selectedLabel || placeholder || 'Select'}
        </RNText>
      </Pressable>

      {open ? (
        <Pressable
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: `rgba(0,0,0,${core.opacity.backdrop})`,
            justifyContent: 'center',
            alignItems: 'center',
            padding: core.spacing.lg
          }}
          onPress={() => setOpen(false)}
        >
          <View
            style={{
              width: '100%',
              maxHeight: '60%',
              backgroundColor: semantic['background.surface'],
              borderRadius: core.radii.lg
            }}
            onStartShouldSetResponder={() => true}
          >
            <ScrollView>
              {options.map((option) => (
                <Pressable
                  key={option.value}
                  onPress={() => {
                    onChange?.(option.value);
                    setOpen(false);
                  }}
                  style={{
                    paddingHorizontal: core.spacing.md,
                    paddingVertical: core.spacing.sm
                  }}
                >
                  <RNText
                    style={{
                      fontFamily: core.typography.fontFamily.body,
                      fontSize: core.typography.fontSize.md,
                      color: semantic['text.primary']
                    }}
                  >
                    {option.label}
                  </RNText>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </Pressable>
      ) : null}
    </>
  );
};

