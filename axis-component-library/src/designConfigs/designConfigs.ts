/** Configuration object for setting all properties in Props for an object */
export type SubComponentConfig<Props extends object> = {
  [p in keyof Props as p extends string ? `target${Capitalize<p>}` | `target${Capitalize<p>}${Capitalize<string>}` : never]: Props[p];
};

/** configuration remapping for a component in a specific variant */
export interface VariantConfiguration<ComponentCol extends ComponentCollection, SubComponents extends keyof ComponentCol> {
  targetVariant: string;
  components: {
    [component in SubComponents]?: SubComponentConfig<ComponentCol[component]['props']>;
  };
}

type AsString<T extends any> = T extends string ? T : never;

/** Record containing configuration for all variants of the component */
export type ComponentVariantsMap<ComponentCol extends ComponentCollection, Component extends keyof ComponentCol> = Partial<
  Record<AsString<ComponentCol[Component]['props']['variant']>, VariantConfiguration<ComponentCol, ComponentCol[Component]['components']>>
>;

/** Configuration containing configurations for each individual configuration */
export type ComponentsMap<T extends ComponentCollection = ComponentCollection> = {
  [componentName in keyof T]: ComponentVariantsMap<T, componentName>;
};

export interface ContextConfig {
  targetContext: string;
  contextGroup: string;
}

/** Overall brand configuration containing a context remapping and component configurations */
export interface BrandConfig<Contexts extends string, Components extends ComponentCollection> {
  contexts: { [context in Contexts as Lowercase<context>]: ContextConfig };
  components: ComponentsMap<Components>;
}

export type ComponentOption<SubComponents extends string, Props extends { variant: string }> = {
  props: Partial<Props>;
  components: SubComponents;
};

export type ComponentCollection = {
  [component in string]: ComponentOption<keyof ComponentCollection, any>;
};
