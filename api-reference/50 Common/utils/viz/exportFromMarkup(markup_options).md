---
id: viz.exportFromMarkup(markup, options)
module: viz/export
export: exportFromMarkup
---
---
##### shortDescription
Allows you to export widgets using their SVG markup.

##### param(markup): String
The SVG markup of the widgets you want to export.

##### param(options): Object
Export options.

##### field(options.backgroundColor): String
The color that fills transparent regions.

##### field(options.fileName): String
The name of the file to be saved.

##### field(options.format): String
The file's format. One of 'PNG', 'PDF', 'JPEG', 'SVG' and 'GIF'.    
PNG is used if the browser does not support exporting to the specified format.

##### field(options.height): Number
The SVG block's height in pixels.
This field is <font color="red">required</font>.

##### field(options.margin): Number
An empty space to be added around the exported SVG block; measured in pixels.

##### field(options.onExported): function()
Allows you to notify a user when exporting completes.

##### field(options.onExporting): function()
Allows you to request exporting details and prevent exporting.      
The parameter contains the following fields:

<div>
    <ul>
        <li>
            <b>fileName</b> - the name of the file to be saved.
        </li>
        <li>
            <b>format</b> - the file's format. One of 'PNG', 'PDF', 'JPEG', 'SVG' and 'GIF'.
        </li>
        <li>
            <b>cancel</b> - when assigned <b>true</b>, prevents exporting.
        </li>
    </ul>
</div>

##### field(options.onFileSaving): function()
Allows you to access exported data and/or prevent it from being saved to a file on the user's local storage.      
The parameter contains the following fields:

<div>
    <ul>
        <li>
            <b>fileName</b> - the name of the file to be saved.
        </li>
        <li>
            <b>format</b> - the file's format. One of 'PNG', 'PDF', 'JPEG', 'SVG' and 'GIF'.
        </li>
        <li>
            <b>data</b> - exported data as a <a href="https://en.wikipedia.org/wiki/Binary_large_object">BLOB</a>.
        </li>
        <li>
            <b>cancel</b> - when assigned <b>true</b>, prevents the file from being saved.
        </li>
    </ul>
</div>

##### field(options.proxyUrl).deprecated
[important] Since v10, Safari browser supports API for saving files, and this option is no longer required.

##### field(options.proxyUrl): String
The URL of a server-side proxy required for export in Safari on Mac OS. See [proxyUrl](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/proxyUrl.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#proxyUrl') for details.

##### field(options.svgToCanvas): function()
A function that renders SVG markup on the HTML canvas. Refer to the [svgToCanvas](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/svgToCanvas.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#svgToCanvas') description for details.

##### field(options.width): Number
The SVG block's width in pixels.
This field is <font color="red">required</font>.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ExportCustomMarkup/"
}

#####See Also#####
- [DevExpress.viz.getMarkup(widgetInstances)](/api-reference/50%20Common/utils/viz/getMarkup(widgetInstances).md '/Documentation/ApiReference/Common/utils/viz/#getMarkupwidgetInstances')
- [exportTo(fileName, format)](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/exportTo(fileName_format).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#exportTofileName_format')
- [print()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/print().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#print')