---
id: viz.exportWidgets(widgetInstances)
module: viz/export
export: exportWidgets
---
---
##### shortDescription
Exports one or several widgets to PNG.

##### param(widgetInstances): Array<Array<DOMComponent>>
An array with the following format:

    [
        [ widgetInstance0_1, widgetInstance0_2, ..., widgetInstance0_N ],
        [ widgetInstance1_1, widgetInstance1_2, ..., widgetInstance1_M ],
        ...
        [ widgetInstanceP_1, widgetInstanceP_2, ..., widgetInstanceP_R ]
    ]

Each nested array contains widget instances that should be in the same row in the exported document.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ExportSeveralCharts/"
}

#####See Also#####
- [exportTo(fileName, format)](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/exportTo(fileName_format).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#exportTofileName_format')