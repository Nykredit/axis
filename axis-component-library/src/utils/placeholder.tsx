import { h } from '@stencil/core';

export const Placeholder = props => {
  let { height, width, style, ...attr } = props;
  return (
    <div
      {...attr}
      style={{
        ...(style || {}),
        minHeight: height ?? '6ch',
        maxHeight: height ?? 'initial',
        minWidth: width ?? '6ch',
        maxWidth: width ?? 'initial',
        backgroundColor: 'lightslategray',
      }}
    />
  );
};
