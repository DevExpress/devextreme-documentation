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
[note]**Safari on Mac OS** does not implement an API for saving files, but you can [set up a server-side proxy](/concepts/05%20Widgets/Chart/99%20Client-Side%20Exporting%20and%20Printing/30%20Set%20Up%20a%20Server-Side%20Proxy '/Documentation/Guide/Widgets/Chart/Client-Side_Exporting_and_Printing/#Set_Up_a_Server-Side_Proxy').

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ExportAndPrintingAPI/"
}

#####See Also#####
- [DevExpress.viz.exportWidgets(widgetInstances, options)](/api-reference/50%20Common/utils/viz/exportWidgets(widgetInstances_options).md '/Documentation/ApiReference/Common/utils/viz/#exportWidgetswidgetInstances_options')
- [export](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export')
- [print()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/print().md '{basewidgetpath}/Methods#print')
#include common-link-callmethods