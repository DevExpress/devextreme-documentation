---
id: viz.exportWidgets(widgetInstances, options)
module: viz/export
export: exportWidgets
---
---
##### shortDescription
Exports one or several widgets.

##### param(widgetInstances): Array<Array<DOMComponent>>
An array with the following format:

    [
        [ widgetInstance0_1, widgetInstance0_2, ..., widgetInstance0_N ],
        [ widgetInstance1_1, widgetInstance1_2, ..., widgetInstance1_M ],
        ...
        [ widgetInstanceP_1, widgetInstanceP_2, ..., widgetInstanceP_R ]
    ]

Each nested array contains widget instances that should be in the same row in the exported document.

##### param(options): Object
Export options.

##### field(options.backgroundColor): String
The background color.

##### field(options.fileName): String
The name of the file to be saved.

##### field(options.format): 'GIF' | 'JPEG' | 'PDF' | 'PNG' | 'SVG'
The file's format. PNG is used if the browser cannot export the file in the specified format.

##### field(options.gridLayout): Boolean
If **true**, widgets are arranged in columns with equal widths (the width of the widest widget).     
If **false**, widgets are placed next to each other in rows (default).      
In any case, each row has the height of the highest widget in it.

##### field(options.horizontalAlignment): 'center' | 'left' | 'right'
Horizontally aligns widgets in their columns. Applies only when **gridLayout** is **true**.

##### field(options.margin): Number
Margins to be added to each side of the document; measured in pixels.

##### field(options.onExported): function()
Allows you to notify a user when the export is completed.

##### field(options.onExporting): function()
Allows you to request export details and prevent export.      
The parameter contains the following fields:

- **fileName** - the name of the file to be saved.
- **format** - the file's format. One of 'PNG', 'PDF', 'JPEG', 'SVG' and 'GIF'.
- **cancel** - prevents export when assigned **true**.

##### field(options.onFileSaving): function()
Allows you to access exported data and/or prevent it from being saved to a file in the user's local storage.      
The parameter contains the following fields:

- **fileName** - the name of the file to be saved.
- **format** - the file's format. One of 'PNG', 'PDF', 'JPEG', 'SVG' and 'GIF'.
- **data** - exported data as a <a href="https://en.wikipedia.org/wiki/Binary_large_object" target="_blank">BLOB</a>.
- **cancel** - when assigned **true**, prevents the file from being saved.

##### field(options.proxyUrl).deprecated

##### field(options.proxyUrl): String
The URL of a server-side proxy. No longer required. See [proxyUrl](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/proxyUrl.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#proxyUrl') for more details.

##### field(options.svgToCanvas): function()
A function that renders SVG markup on the HTML canvas. Refer to the [svgToCanvas](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/svgToCanvas.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#svgToCanvas') description for details.

##### field(options.verticalAlignment): 'bottom' | 'center' | 'top'
Vertically aligns widgets in their rows.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ExportSeveralCharts/"
}

#####See Also#####
- [exportTo(fileName, format)](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/exportTo(fileName_format).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#exportTofileName_format')