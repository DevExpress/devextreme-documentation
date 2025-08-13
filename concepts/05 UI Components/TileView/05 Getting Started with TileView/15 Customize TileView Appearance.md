To customize the appearance of TileView items, this example implements the following styles:

    <!-- tab: CSS -->
    :root {
        color-scheme: dark;
    }

    .demo-container {
        height: 496px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dx-tile {
        border-radius: 8px;
        border-color: var(--dx-color-border);
    }

    .dx-tile-content {
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
    }

    .icon-box {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        background-color: light-dark(#f0f0f0, #383838);
    }

    .text-box {
        margin-top: auto;
        height: 84px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h3.tile-title {
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 4px;
    }

    .tile-text {
        margin: 0;
        height: 54px;
    }

    .icon-box i {
        font-size: 20px;
    }

    .dx-tile.dx-state-hover {
        border-color: var(--dx-color-border);
        background-color: light-dark(#f5f5f5, #3d3d3d);
    }

    .dx-state-focused {
        outline: 2px solid var(--dx-color-primary);
    }

This application implements DevExtreme CSS variables defined in the imported theme file (dx.fluent.blue.dark.css). To integrate support for dark and light themes, this example also implements the [color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) CSS style and specifies multiple color styles using the [light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) function.
