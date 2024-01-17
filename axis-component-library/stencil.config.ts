import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'axis-component-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      componentCorePackage: 'axis-component-library',
      proxiesFile: '../axis-component-library-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
  ],
  extras: {
    enableImportInjection: true,
  },
};
