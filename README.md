# AXIS UI Components Library

## Overview

Welcome to the AXIS UI Components Library – your source for accessible, compliant, and elegantly designed web components. AXIS stands for Accessible, eXemplary, Integratable, and Stylish. Our library is built to adhere to company standards and accessibility guidelines, ensuring each component delivers functional excellence and aesthetic appeal.

## Features

- **Accessible**: Designed with accessibility in mind to ensure universal usability.
- **eXemplary**: Sets a high standard in compliance with company and legal requirements.
- **Integratable**: Seamlessly integratable with your existing systems and standards.
- **Stylish**: Modern and visually appealing components that enhance user experience.

## Getting Started with New Components

To create a new component, navigate to the `axis-components-library` directory and execute the following command:

```bash
npm run generate nk-<component-name>
```

Select the desired options for your component during the interactive setup.

## Component Updates

If you've made updates to a component and want to visualize these changes, it's necessary to build the component library. Execute the following command:

```bash
npm run build
```

Alternatively, you can set up a watcher using `npx stencil build --watch`. This watcher will automatically rebuild the library whenever changes are made to a component, ensuring a seamless integration of updates.

## Publishing

### Web Component Library

To publish the component library, follow these steps. First, run the build command in the `axis-components-library` directory:

```bash
npm run build
```

After the build process, publish the library by executing:

```bash
npm publish
```

### React Wrapper Library

Post-library publishing, proceed to build the React wrapper library. Execute the following commands in the `axis-components-library-react` directory:

```bash
npm run build
```

Subsequently, publish the React wrapper:

```bash
npm publish
```

In summary, this process generates two libraries, one for native web components and another for the React wrapper, ensuring IntelliSense compatibility and normal React component behavior