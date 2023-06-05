---
id: viz.exportWidgets(widgetInstances)
module: viz/export
export: exportWidgets
---
---
##### shortDescription
Exports one or several UI components to PNG.

##### param(widgetInstances): Array<Array<dxChart, dxPieChart, dxFunnel, dxSankey, dxTreeMap, dxVectorMap, dxSparkline, dxBullet, dxBarGauge>>
An array with the following format:

    [
        [ widgetInstance0_1, widgetInstance0_2, ..., widgetInstance0_N ],
        [ widgetInstance1_1, widgetInstance1_2, ..., widgetInstance1_M ],
        ...
        [ widgetInstanceP_1, widgetInstanceP_2, ..., widgetInstanceP_R ]
    ]

Each nested array contains UI component instances that should be in the same row in the exported document.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ExportSeveralCharts/"
}

#####See Also#####
- [exportTo(fileName, format)](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/exportTo(fileName_format).md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#exportTofileName_format')