---
module: viz/export
export: getMarkup
---
---
##### shortDescription
Gets the SVG markup of specific widgets for their subsequent export.

##### param(widgetInstances): Array
The instances of the widgets whose markup should be returned.

##### return: String
The widgets' SVG markup. Pass it to the [exportFromMarkup(markup, options)](/api-reference/50%20Common/utils/viz/3%20Methods/exportFromMarkup(markup_options).md '/Documentation/ApiReference/Common/utils/viz/Methods/#exportFromMarkupmarkup_options') method to export the widgets.

---
#####See Also#####
- [svg()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/svg().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#svg')