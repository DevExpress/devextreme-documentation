In addition to font icons, DevExtreme supplies the same icons in the SVG format. You can find SVG icons in the <a href="https://github.com/DevExpress/DevExtreme/tree/25_1/packages/devextreme/images/icons" target="_blank">DevExtreme repository</a> on GitHub.

The following code uses SVG icons in the [Button](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/Icons) UI component. The same technique can be used with any other UI component that has the [icon](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/icon.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#icon') property. 

1. **Use the icon's URL**:

        <!-- tab: JavaScript -->
        new DevExpress.ui.dxButton(targetElement, {
            icon: "https://path/to/the/icon.svg"
        });

    This code wraps the SVG icon inside a `<img />` tag. In this case, you cannot use CSS rules to customize the SVG image.

1. **Insert SVG content inline**:

        <!-- tab: JavaScript -->
        new DevExpress.ui.dxButton(targetElement, {
            icon: "<svg>SVG_CONTENT</svg>"
        });

    This code renders SVG content directly in the markup. In this case, you can use CSS rules to customize the SVG image.

1. **Import the icon**:

        <!-- tab: JavaScript -->
        import * as myIcon from "./assets/icon.svg";
        new DevExpress.ui.dxButton(targetElement, {
            icon: myIcon
        });

[important]The SVG format can contain executable code that might be malicious. We strongly recommend that you use SVG icons only from trusted sources.

    This code wraps the SVG icon inside a `<img />` tag. In this case, you cannot use CSS rules to customize the SVG image.
