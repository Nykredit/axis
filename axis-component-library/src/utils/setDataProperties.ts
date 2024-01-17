import { RootService } from './rootService';

export const THEME_BRAND_ATTRIBUTE = 'data-brand';
export const THEME_CONTEXT_ATTRIBUTE = 'data-context';
export const THEME_ROOT_ATTRIBUTE = 'data-root';
export const THEME_NESTED_LEGACY_ATTRIBUTE = 'data-nested';
export const THEME_COMPONENT_ATTRIBUTE = 'data-component';

export interface BaseElement {
  componentName: string;
  componentWillLoad: () => void;

  el: HTMLElement;
}

export function setDataProperty(el: HTMLElement, attribute: string, value: string) {
  if (/*LWR/OSS*/ (this as unknown as any)?.isConnected || /*Aura/LWR/OSS*/ (el as unknown as ShadowRoot)?.isConnected) {
    el.setAttribute?.(attribute, value);
  }
}

export function setDefaultDataProperties(component: BaseElement) {
  const isRoot = RootService.isRoot(component.el);

  setDataProperty(component.el, THEME_BRAND_ATTRIBUTE, 'Nykredit');
  setDataProperty(component.el, THEME_CONTEXT_ATTRIBUTE, 'Default');
  setDataProperty(component.el, THEME_ROOT_ATTRIBUTE, String(isRoot));
  setDataProperty(component.el, THEME_COMPONENT_ATTRIBUTE, component.componentName);
}
