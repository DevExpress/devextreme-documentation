Fluent Next themes ship with CSS variables defined in the DevExpress Design System. Refer to the following help topics for additional information about key styling principles and a list of available CSS variables:

- [Colors](https://docs.devexpress.com/DesignSystem/405706/colors/color-css-variables)
- [Typography](https://docs.devexpress.com/DesignSystem/405635/typography)
- [Spacing](https://docs.devexpress.com/DesignSystem/405633/spacing)
- [Borders](https://docs.devexpress.com/DesignSystem/405632/border)
- [Opacity](https://docs.devexpress.com/DesignSystem/405634/opacity)
- [Shadows](https://docs.devexpress.com/DesignSystem/405690/shadows)

You can apply these variables to custom elements to ensure a consistent look across your application. The following example uses Design System variables for rest and hover element states:

    <!-- tab: CSS -->
    .info-card {
        /* Surface and content colors */
        background-color: var(--dxds-color-surface-neutral-default-rest);
        color: var(--dxds-color-content-neutral-default-rest);

        /* Spacing */
        padding: var(--dxds-spacing-240);
        margin-bottom: var(--dxds-spacing-160);

        /* Borders */
        border: var(--dxds-border-width-10) solid var(--dxds-color-border-neutral-default-rest);
        border-radius: var(--dxds-border-radius-40);

        /* Typography */
        font-size: var(--dxds-font-size-base-md);
        line-height: var(--dxds-line-height-base-md);

        /* Shadow */
        box-shadow: var(--dxds-box-shadow-sm);
    }

    .info-card:hover {
        background-color: var(--dxds-color-surface-neutral-default-hovered);
        border-color: var(--dxds-color-border-neutral-default-hovered);
    }

You can also override variables to modify styles for DevExtreme components. This allows you to apply unique styles to different parts of your application. For instance, you can use the following [semantic variable](https://docs.devexpress.com/DesignSystem/405706/colors/color-css-variables) overrides to apply dark mode styles to parts of a light mode application:

    <!-- tab: CSS -->
    /* Using dxds variables */
    .dark-colors-dx {
        --dxds-color-surface-neutral-default-rest: var(--dxds-color-surface-neutral-default-inverted-rest);
        --dxds-color-content-neutral-default-rest: var(--dxds-color-content-neutral-default-inverted-rest);
        --dxds-color-border-neutral-default-rest: var(--dxds-color-border-neutral-default-inverted-rest);
    }

    /* Using custom colors */
    .dark-colors-custom {
        --dxds-color-surface-neutral-default-rest: #341A51;
        --dxds-color-content-neutral-default-rest: #341A51;
        --dxds-color-border-neutral-default-rest: #532982;
    }

CSS variable overrides also allow you to apply custom colors to specific parts of your application. You can define custom colors or use [utility palette](https://docs.devexpress.com/DesignSystem/405639/colors/utility-palettes/fluent-utility-palette) colors:

    <!-- tab: CSS -->
    /* Utility palette colors */
    .dark-colors-dx {
        --dxds-color-surface-primary-default-rest: var(--dxds-utility-yellow-40);
        --dxds-color-content-primary-default-rest: var(--dxds-utility-yellow-50);
        --dxds-color-border-primary-default-rest: var(--dxds-utility-yellow-60);
    }

    /* Custom colors */
    .dark-colors-dx {
        --dxds-color-surface-primary-default-rest: #F2C661;
        --dxds-color-content-primary-default-rest: #EFB839;
        --dxds-color-border-primary-default-rest: #EDAD1C;
    }

