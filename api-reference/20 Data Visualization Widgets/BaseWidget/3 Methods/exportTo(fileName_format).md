---
##### shortDescription
Exports the widget.

##### param(fileName): String
The name of the file to which the widget is about to be exported.

##### param(format): String
The file's format.  
Possible values: 'PNG' | 'PDF' | 'JPEG' | 'SVG' | 'GIF'

---
[note]**IE9** and **Safari on Mac OS** do not implement an API for saving files. Therefore, exporting in these browsers requires setting up a server-side proxy. For details, refer to the **export** | [proxyUrl](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/proxyUrl.md '{basewidgetpath}/Configuration/export#proxyUrl') option description.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ExportAndPrintingAPI/jQuery/Light/"
}

#####See Also#####
- [DevExpress.viz.exportFromMarkup(markup, options)](/api-reference/50%20Common/utils/viz/3%20Methods/exportFromMarkup(markup_options).md '/Documentation/ApiReference/Common/utils/viz/Methods/#exportFromMarkupmarkup_options')
- [export](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export')
- [print()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/print().md '{basewidgetpath}/Methods#print')
#include common-link-callmethods