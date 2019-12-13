You can use SVG icons instead of font icons. The following code demonstrates how to use them in the [Button](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/Icons) widget. The same technique can be used for widgets with the [icon](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/icon.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#icon') option. 

An SVG icon can be specified as follows:

1. **By the URL**:

        <!-- tab: JavaScript -->
        new DevExpress.ui.dxButton(targetElement, {
            icon: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
        });

1. **Inserted inline**:

        <!-- tab: JavaScript -->
        new DevExpress.ui.dxButton(targetElement, {
            icon: "<svg>SVG_CONTENT</svg>"
        });

1. **Imported**:

        <!-- tab: JavaScript -->
        import * as myIcon from "./assets/icon.svg";
        new DevExpress.ui.dxButton(targetElement, {
            icon: myIcon
        });

[important]The SVG format allows you to run executable code that might be malicious. It is strongly recommended that you use SVG icons only from trusted sources.
