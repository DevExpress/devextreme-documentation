Fluent Next themes ship with CSS variables defined in the DevExpress Design System. Refer to the following help topics for additional information about key styling principles and a list of available CSS variables:

- [Colors](https://docs.devexpress.com/DesignSystem/405706/colors/color-css-variables)
- [Typography](https://docs.devexpress.com/DesignSystem/405635/typography)
- [Spacing](https://docs.devexpress.com/DesignSystem/405633/spacing)
- [Borders](https://docs.devexpress.com/DesignSystem/405632/border)
- [Opacity](https://docs.devexpress.com/DesignSystem/405634/opacity)
- [Shadows](https://docs.devexpress.com/DesignSystem/405690/shadows)

You can apply these variables to custom elements to ensure a consistent look across your application. The following example customizes an element in multiple states (rest and hover):

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

You can also override variables to modify styles for custom elements and DevExtreme components. The following example overrides the primary color within the `.custom-primary` selector:

    <!-- tab: CSS -->
    .custom-primary {
        --dxds-color-surface-primary-default-rest: var(--dxds-color-surface-utility-green-default-rest);
    }

Apply the `.custom-primary` class to custom elements and DevExtreme components to use the modified primary color.
