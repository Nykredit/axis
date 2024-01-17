import { BrandConfig } from './designConfigs';

//TODO: Fix the any part
export const BrandConfigObject: BrandConfig<'Default' | 'Dark' | 'Focus' | 'AccentSecondary' | 'Environmental', any> = {
  contexts: {
    default: { targetContext: 'default', contextGroup: 'BaseContext' },
    focus: { targetContext: 'focus', contextGroup: 'Color' },
    dark: { targetContext: 'dark', contextGroup: 'Color' },
    accentsecondary: {
      targetContext: 'accentsecondary',
      contextGroup: 'Color',
    },
    environmental: { targetContext: 'environmental', contextGroup: 'Color' },
  },
  components: {
    Button: {
      filled: {
        targetVariant: 'filled',
        components: {
          Stack: {
            targetVariant: 'spacing-tiny',
          },
          Elevation: {
            targetVariant: 'raised',
          },
          Label: {
            targetVariant: 'button',
          },
          Icon: {
            targetSize: 'x-small',
          },
        },
      },
      neutral: {
        targetVariant: 'neutral',
        components: {
          Stack: {
            targetVariant: 'spacing-tiny',
          },
          Elevation: {
            targetVariant: 'raised',
          },
          Label: {
            targetVariant: 'button',
          },
          Icon: {
            targetSize: 'x-small',
          },
        },
      },
      outline: {
        targetVariant: 'outline',
        components: {
          Stack: {
            targetVariant: 'spacing-tiny',
          },
          Elevation: {
            targetVariant: 'raised',
          },
          Label: {
            targetVariant: 'button',
          },
          Icon: {
            targetSize: 'x-small',
          },
        },
      },
      ghost: {
        targetVariant: 'ghost',
        components: {
          Label: {
            targetVariant: 'button',
          },
          Elevation: {
            targetVariant: 'raised',
          },
          Stack: {
            targetVariant: 'spacing-tiny',
          },
          Icon: {
            targetSize: 'x-small',
          },
        },
      },
      primary: {
        targetVariant: 'primary',
        components: {
          Label: {
            targetVariant: 'button',
          },
          Stack: {
            targetVariant: 'spacing-tiny',
          },
          Elevation: {
            targetVariant: 'raised',
          },
          Icon: {
            targetSize: 'x-small',
          },
        },
      },
      secondary: {
        targetVariant: 'secondary',
        components: {
          Label: {
            targetVariant: 'button',
          },
          Stack: {
            targetVariant: 'spacing-tiny',
          },
          Elevation: {
            targetVariant: 'raised',
          },
          Icon: {
            targetSize: 'x-small',
          },
        },
      },
      tertiary: {
        targetVariant: 'tertiary',
        components: {
          Label: {
            targetVariant: 'button',
          },
          Stack: {
            targetVariant: 'spacing-tiny',
          },
          Icon: {
            targetSize: 'x-small',
          },
        },
      },
    },
    Elevation: {
      '01': {
        targetVariant: '01',
        components: {},
      },
      '02': {
        targetVariant: '02',
        components: {},
      },
      '04': {
        targetVariant: '04',
        components: {},
      },
      '08': {
        targetVariant: '08',
        components: {},
      },
      '12': {
        targetVariant: '12',
        components: {},
      },
      '16': {
        targetVariant: '16',
        components: {},
      },
      '100': {
        targetVariant: '100',
        components: {},
      },
      'none': {
        targetVariant: 'none',
        components: {},
      },
      'inherit': {
        targetVariant: 'inherit',
        components: {},
      },
    },
    Icon: {
      'x-small': {
        targetVariant: 'x-small',
        components: {},
      },
    },
    InputBase: {
      default: {
        targetVariant: 'default',
        components: {
          Icon: {
            targetName: 'exclamation-circle',
            targetSize: 'small',
          },
          AssistiveText: {
            targetDisplay: true,
          },
          Stack: {
            targetVariantContainer: 'spacing-tiny',
            targetVariantField: 'spacing-min',
            targetVariantInlineLabel: 'spacing-tiny',
          },
          Label: {
            targetVariant: 'help-assistive',
          },
        },
      },
      inline: {
        /* Map SOLID "Inline" variant to &m material */
        targetVariant: 'material',
        components: {
          Icon: {
            targetName: 'exclamation-circle',
            targetSize: 'small',
          },
          AssistiveText: {
            targetDisplay: true,
          },
          Stack: {
            targetVariantContainer: 'spacing-tiny',
            targetVariantField: 'spacing-min',
            targetVariantInlineLabel: 'spacing-tiny',
          },
          Label: {
            targetVariant: 'superscript',
          },
        },
      },
    },
    FieldBase: {
      default: {
        targetVariant: 'Default',
        components: {
          Stack: {
            targetVariant: 'related',
          },
        },
      },
    },
    Image: {},
    Card: {
      default: {
        targetVariant: 'default',
        components: {
          Elevation: {
            targetVariant: 'inherit',
          },
          Image: {
            targetVariant: 'inherit',
          },
        },
      },
    },
    Heading: {
      huge: {
        targetVariant: 'huge',
        components: {},
      },
      xlarge: {
        targetVariant: 'xlarge',
        components: {},
      },
      large: {
        targetVariant: 'large',
        components: {},
      },
      medium: {
        targetVariant: 'medium',
        components: {},
      },
      small: {
        targetVariant: 'small',
        components: {},
      },
      xsmall: {
        targetVariant: 'xsmall',
        components: {},
      },
      tiny: {
        targetVariant: 'tiny',
        components: {},
      },
    },
    IconHeading: {
      tiny: {
        targetVariant: 'tiny',
        components: {
          Icon: {
            targetVariant: 'x-small',
          },
          Stack: {
            targetVariant: 'spacing-xsmall',
          },
        },
      },
    },
    AssistiveText: {
      error: {
        targetVariant: 'error',
        components: {
          Paragraph: {
            targetVariant: 'assistive',
          },
        },
      },
      info: {
        targetVariant: 'info',
        components: {
          Paragraph: {
            targetVariant: 'assistive',
          },
        },
      },
    },
    UnorderedList: {
      default: {
        targetVariant: 'Default',
        components: {
          Stack: {
            targetVariant: 'spacing-0x',
          },
        },
      },
    },
    CardSelect: {
      checkbox: {
        targetVariant: 'checkbox',
        components: {
          Stack: {
            targetVariant: 'spacing-medium',
          },
          Card: {
            targetVariant: 'flex',
          },
        },
      },
      radio: {
        targetVariant: 'radio',
        components: {
          Stack: {
            targetVariant: 'spacing-medium',
          },
          Card: {
            targetVariant: 'flex',
          },
        },
      },
    },
    Label: {},
    Tag: {
      default: {
        targetVariant: 'default',
        components: {
          Elevation: {
            targetVariant: 'flat',
          },
          Stack: {
            targetVariant: 'spacing-min',
          },
          Icon: {
            targetVariant: 'x-small',
          },
          Label: {
            targetVariant: 'superscript',
          },
        },
      },
    },
    TagList: {
      horizontal: {
        targetVariant: 'horizontal',
        components: {
          Stack: {
            targetVariant: 'spacing-tiny',
          },
        },
      },
      vertical: {
        targetVariant: 'vertical',
        components: {
          Stack: {
            targetVariant: 'spacing-tiny',
          },
        },
      },
    },
    Stack: {
      'spacing-0x': {
        targetVariant: 'spacing-none',
        components: {},
      },
      'spacing-1x': {
        targetVariant: 'spacing-min',
        components: {},
      },
      'spacing-2x': {
        targetVariant: 'spacing-tiny',
        components: {},
      },
      'spacing-3x': {
        targetVariant: 'spacing-xsmall',
        components: {},
      },
      'spacing-4x': {
        targetVariant: 'spacing-small',
        components: {},
      },
      'spacing-6x': {
        targetVariant: 'spacing-medium',
        components: {},
      },
      'spacing-10x': {
        targetVariant: 'spacing-xlarge',
        components: {},
      },
      'spacing-12x': {
        targetVariant: 'spacing-12x',
        components: {},
      },
      'spacing-20x': {
        targetVariant: 'spacing-max',
        components: {},
      },
      'spacing-none': {
        targetVariant: 'spacing-none',
        components: {},
      },
      'spacing-min': {
        targetVariant: 'spacing-min',
        components: {},
      },
      'spacing-tiny': {
        targetVariant: 'spacing-tiny',
        components: {},
      },
      'spacing-small': {
        targetVariant: 'spacing-small',
        components: {},
      },
      'spacing-medium': {
        targetVariant: 'spacing-medium',
        components: {},
      },
      'spacing-xlarge': {
        targetVariant: 'spacing-xlarge',
        components: {},
      },
      'spacing-max': {
        targetVariant: 'spacing-max',
        components: {},
      },
    },
    CanvasButton: {
      default: {
        targetVariant: 'default',
        components: {
          Stack: {
            targetVariant: 'spacing-xsmall',
          },
        },
      },
    },
    CheckboxWithLabel: {
      default: {
        targetVariant: 'default',
        components: {
          Elevation: {
            targetVariant: 'flat',
          },
          Stack: {
            targetVariant: 'spacing-xsmall',
            targetVariantParagraph: 'spacing-min',
            targetVariantInput: 'spacing-none',
            targetAlignmentInput: 'start',
          },
          Paragraph: {
            targetTitleParagraph: 'body-emphasis',
            targetBodyParagraph: 'assistive',
          },
          CanvasButton: {
            targetVariant: 'default',
          },
        },
      },
      canvas: {
        targetVariant: 'canvas',
        components: {
          Elevation: {
            targetVariant: 'flat',
          },
          Stack: {
            targetVariant: 'spacing-xsmall',
            targetVariantParagraph: 'spacing-min',
            targetVariantInput: 'spacing-none',
            targetAlignmentInput: 'center',
          },
          Paragraph: {
            targetTitleParagraph: 'body-emphasis',
            targetBodyParagraph: 'assistive',
          },
          CanvasButton: {
            targetVariant: 'default',
          },
        },
      },
      plain: {
        targetVariant: 'plain',
        components: {
          Elevation: {
            targetVariant: 'flat',
          },
          Stack: {
            targetVariant: 'spacing-xsmall',
            targetVariantParagraph: 'spacing-min',
            targetVariantInput: 'spacing-none',
            targetAlignmentInput: 'start',
          },
          Paragraph: {
            targetTitleParagraph: 'body',
            targetBodyParagraph: 'assistive',
          },
          CanvasButton: {
            targetVariant: 'default',
          },
        },
      },
    },
    RadioButtonWithLabel: {
      default: {
        targetVariant: 'default',
        components: {
          Elevation: {
            targetVariant: 'flat',
          },
          Stack: {
            targetVariant: 'spacing-xsmall',
            targetVariantParagraph: 'spacing-min',
            targetVariantInput: 'spacing-none',
            targetAlignmentInput: 'center',
          },
          Paragraph: {
            targetTitleParagraph: 'body-emphasis',
            targetBodyParagraph: 'assistive',
          },
        },
      },
      plain: {
        targetVariant: 'plain',
        components: {
          Elevation: {
            targetVariant: 'flat',
          },
          Stack: {
            targetVariant: 'spacing-xsmall',
            targetVariantParagraph: 'spacing-min',
            targetVariantInput: 'spacing-none',
            targetAlignmentInput: 'center',
          },
          Paragraph: {
            targetTitleParagraph: 'body',
            targetBodyParagraph: 'assistive',
          },
        },
      },
    },
    CheckboxListInput: {
      default: {
        targetVariant: 'default',
        components: {
          Stack: {
            targetVariantVertical: 'spacing-medium',
            targetVariantHorizontal: 'spacing-xlarge',
          },
        },
      },
      pill: {
        targetVariant: 'pill',
        components: {
          Stack: {
            targetVariantVertical: 'spacing-medium',
            targetVariantHorizontal: 'spacing-xlarge',
          },
        },
      },
      checkbox: {
        targetVariant: 'checkbox',
        components: {
          Stack: {
            targetVariantVertical: 'spacing-medium',
            targetVariantHorizontal: 'spacing-xlarge',
          },
        },
      },
      canvas: {
        targetVariant: 'canvas',
        components: {
          Stack: {
            targetVariantVertical: 'spacing-medium',
            targetVariantHorizontal: 'spacing-xlarge',
          },
        },
      },
    },
    RadioButtonListInput: {
      default: {
        targetVariant: 'default',
        components: {
          Stack: {
            targetVariantVertical: 'spacing-medium',
            targetVariantHorizontal: 'spacing-xlarge',
          },
        },
      },
    },
    Pill: {
      default: {
        targetVariant: 'default',
        components: {
          Stack: {
            targetVariant: 'spacing-none',
          },
          Icon: {
            targetSize: 'label',
            targetDisplay: true,
          },
          Label: {
            targetVariant: 'interaction',
          },
        },
      },
    },
    LayoutTitleContentNavigation: {
      default: {
        targetVariant: 'default',
        components: {
          Stack: {
            targetVariantButton: 'spacing-xlarge',
            targetVariantText: 'spacing-small',
          },
        },
      },
    },
    NavigationListItem: {
      default: {
        targetVariant: 'default',
        components: {
          Icon: {
            targetVariant: 'small',
          },
        },
      },
    },
    ReadonlyTextField: {
      default: {
        targetVariant: 'default',
        components: {
          FieldBase: {
            targetVariant: 'default',
          },
        },
      },
    },
    LookupInput: {
      default: {
        targetVariant: 'default',
        components: {
          Icon: {
            targetSize: 'small',
            targetName: 'search',
          },
          Label: {
            targetVariant: 'input-emphasis',
          },
          IconButton: {
            targetIcon: 'remove-circle',
            targetVariant: 'tertiary',
          },
        },
      },
      inline: {
        targetVariant: 'inline',
        components: {
          Icon: {
            targetSize: 'small',
            targetName: 'search',
          },
          Label: {
            targetVariant: 'input-emphasis',
          },
          IconButton: {
            targetIcon: 'remove-circle',
            targetVariant: 'tertiary',
          },
        },
      },
      material: {
        targetVariant: 'material',
        components: {
          Icon: {
            targetSize: 'small',
            targetName: 'search',
          },
          Label: {
            targetVariant: 'input-emphasis',
          },
          IconButton: {
            targetIcon: 'remove-circle',
            targetVariant: 'tertiary',
          },
        },
      },
    },
    AccordionItem: {
      default: {
        targetVariant: 'default',
        components: {
          Label: {
            targetVariant: 'body',
          },
        },
      },
    },
  },
};
