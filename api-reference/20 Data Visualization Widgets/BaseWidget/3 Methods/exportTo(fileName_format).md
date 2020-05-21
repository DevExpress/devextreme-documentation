---
id: BaseWidget.exportTo(fileName, format)
---
---
##### shortDescription
Exports the widget.

##### param(fileName): String
The name of the file to which the widget is about to be exported.

##### param(format): String
The file's format. One of 'PNG', 'PDF', 'JPEG', 'SVG' and 'GIF'.  
PNG is used if the browser does not support exporting to the specified format.

---
     
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ExportAndPrintingAPI/"
}

#####See Also#####
- [DevExpress.viz.exportWidgets(widgetInstances, options)](/api-reference/50%20Common/utils/viz/exportWidgets(widgetInstances_options).md '/Documentation/ApiReference/Common/utils/viz/#exportWidgetswidgetInstances_options')
- [export](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export')
- [print()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/print().md '{basewidgetpath}/Methods#print')
#include common-link-callmethods