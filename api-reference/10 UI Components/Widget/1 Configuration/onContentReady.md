---
id: Widget.Options.onContentReady
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the UI component is rendered and each time the component is repainted.

##### param(e): EventInfo
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

---

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-fix-column-headers-related-to-page-scroll"
}
