You can override Design System variables to modify default Fluent Next styles. To override variables for an entire page, use the `:root` selector:

    <!-- tab: CSS -->
    :root {
        --dxds-color-bg-primary: #b06ab3;
    }

[note]

- `:root` overrides and Fluent Next stylesheets share the same specificity. Load your override stylesheet after the Fluent Next stylesheet to apply these styles. Scoped overrides that use class or ID selectors apply regardless of load order.
- [Theme mode containers](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes) redeclare variables that have different values in light and dark modes (for instance, `--dxds-color-bg` and `--dxds-color-content-primary`). `:root` overrides for these variables do not apply to elements within `dx-theme-mode-*` containers. To customize these variables within a theme mode container, define overrides for the container and include the mode class in the selector:

        <!-- tab: CSS -->
        .sidebar.dx-theme-mode-dark {
            --dxds-color-bg: #1f1f1f;
        }

[/note]

CSS variable overrides also allow you to modify styles of DevExtreme components. You can define overrides for individual components or wrap multiple components in a container and define overrides on the container level. This allows you to apply unique styles to different parts of your application. The following code snippet overrides [semantic variables](https://docs.devexpress.com/DesignSystem/405706/colors/color-css-variables):

    <!-- tab: CSS -->
    /* Using dxds variables */
    .custom-colors-var {
        --dxds-color-bg: var(--dxds-color-bg-inverted);
        --dxds-color-content: var(--dxds-color-content-inverted);
        --dxds-color-border: var(--dxds-color-border-inverted);
    }

    /* Using custom colors */
    .custom-colors-hex {
        --dxds-color-bg: #341A51;
        --dxds-color-content: #F5F0FA;
        --dxds-color-border: #532982;
    }

You can also use CSS variable overrides to apply custom colors to specific parts of your application. You can define custom colors or use [utility palette](https://docs.devexpress.com/DesignSystem/405639/colors/utility-palettes/fluent-utility-palette) colors:

    <!-- tab: CSS -->
    /* Utility palette colors */
    .yellow-utility {
        --dxds-color-bg: var(--dxds-color-bg-yellow-subtle);
        --dxds-color-border: var(--dxds-color-border-yellow);
    }

    /* Custom colors */
    .yellow-custom {
        --dxds-color-bg: #F2C661;
        --dxds-color-content: #3F2900;
        --dxds-color-border: #EDAD1C;
    }