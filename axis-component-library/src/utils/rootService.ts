export class RootService {
  static isRoot(el: HTMLElement): boolean {
    const doc = hasDataRootAttribute(el, true);

    if (doc) {
      return true;
    }

    return false;
  }
}

function hasDataRootAttribute(element: HTMLElement, isFirst: boolean) {
  if (element.parentNode.nodeType === 11) {
    const shadowNode = (element.parentNode as ShadowRoot).host as HTMLElement;
    if (shadowNode.nodeName.startsWith('NK-')) {
      return false;
    } else {
      return hasDataRootAttribute(shadowNode, false);
    }
  }

  if (!isFirst && element.nodeName.startsWith('NK-')) {
    return false;
  }

  // Check if the parent element exists and call the function recursively
  if (element && element.parentElement) {
    return hasDataRootAttribute(element.parentElement, false);
  }

  // No data-root attribute found in the element or its parents
  return true;
}
