import React from 'react';
import renderer from 'react-test-renderer';
import { DesignSystemProvider } from '../../src/provider/DesignSystemProvider';
import { Button } from '../../src/components/feedback/Button';
import { defaultConfig } from '../../src/config/defaultConfig';

describe('Button', () => {
  it('renders with default props', () => {
    const tree = renderer
      .create(
        <DesignSystemProvider config={defaultConfig}>
          <Button>Click me</Button>
        </DesignSystemProvider>
      )
      .toJSON();

    expect(tree).toBeTruthy();
  });
});

