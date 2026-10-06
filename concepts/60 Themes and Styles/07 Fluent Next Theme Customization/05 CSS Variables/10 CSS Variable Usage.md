You can apply these variables to custom elements to ensure a consistent look across your application. The following example uses Design System variables for rest and hover element states:

    <!-- tab: CSS -->
    .info-card {
        /* Surface and content colors */
        background-color: var(--dxds-color-bg);
        color: var(--dxds-color-content);

        /* Spacing */
        padding: var(--dxds-spacing-240);
        margin-bottom: var(--dxds-spacing-160);

        /* Borders */
        border: var(--dxds-border-width-10) solid var(--dxds-color-border);
        border-radius: var(--dxds-border-radius-40);

        /* Typography */
        font-size: var(--dxds-font-size-base-md);
        line-height: var(--dxds-line-height-base-md);

        /* Shadow */
        box-shadow: var(--dxds-box-shadow-sm);
    }

    .info-card:hover {
        background-color: var(--dxds-color-bg-hovered);
        border-color: var(--dxds-color-border-hovered);
    }
