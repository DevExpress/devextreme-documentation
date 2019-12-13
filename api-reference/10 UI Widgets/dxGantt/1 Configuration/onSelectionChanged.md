---
id: dxGantt.Options.onSelectionChanged
type: function(e)
default: null
EventForAction: dxGantt.selectionChanged
---
---
##### shortDescription
A function that is executed after users select a task or clear its selection.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.selectedRowKey): any
The key of the row whose selection state was changed.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onSelectionChanged: function (e) {
                if (e.selectedRowKey === 2) {
                    // your code
                } else {
                    // your code
                }
            }
        });
    }); 

---

#####See Also#####
- [allowSelection](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/allowSelection.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#allowSelection') 
- [selectedRowKey](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/selectedRowKey.md '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#selectedRowKey')
