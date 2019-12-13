---
id: dxRangeSelector.Options.background.image
type: Object
---
---
##### shortDescription
Specifies image options.

---
You can display an image as the background of a range selector instead of the default color. Set the image's URL and location using the corresponding properties of the **image** object to do this.

The width of the specified image must be less than or equal to the widget's [width](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/size/width.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/size/#width').

The height of the specified image must be less than or equal to the following value ("-" stands for subtract): *the widget's [height](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/size/height.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/size/#height')* - *the scale's [placeholderHeight](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/placeholderHeight.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#placeholderHeight')*.

If the image size is smaller than the background size, a default background color will be displayed in the remaining area. You can set a custom color (e.g. an empty color) for the background using the **color** property of the **background** configuration object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/ImageOnBackground/"
}