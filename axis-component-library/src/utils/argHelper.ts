export const argHelper = args => [
  {
    ref: elem => {
      if (!elem) {
        return;
      }
      for (const key of Object.keys(args)) {
        if (key === 'children') {
          continue;
        }

        elem[key] = args[key];
      }
      return elem;
    },
  },
  args?.children || [],
];
