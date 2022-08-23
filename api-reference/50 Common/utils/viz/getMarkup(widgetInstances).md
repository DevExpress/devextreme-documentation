---
id: viz.getMarkup(widgetInstances)
module: viz/export
export: getMarkup
---
---
##### shortDescription
Gets the SVG markup of specific UI components for their subsequent export.

##### return: String
The UI components' SVG markup. Pass it to the [exportFromMarkup(markup, options)](/api-reference/50%20Common/utils/viz/exportFromMarkup(markup_options).md '/Documentation/ApiReference/Common/utils/viz/#exportFromMarkupmarkup_options') method to export the UI components.

##### param(widgetInstances): Array<Array<dxChart, dxPieChart, dxFunnel, dxSankey, dxTreeMap, dxVectorMap, dxSparkline, dxBullet, dxBarGauge>>
The UI component instances.

---

#####See Also#####
- [svg()](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/svg().md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#svg')