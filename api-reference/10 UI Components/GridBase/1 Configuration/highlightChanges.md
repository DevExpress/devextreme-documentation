---
id: GridBase.Options.highlightChanges
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether to highlight rows and cells with edited data. [repaintChangesOnly](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/repaintChangesOnly.md '{basewidgetpath}/Configuration/#repaintChangesOnly') should be **true**.

---
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CollaborativeEditing/",
    name: "Collaborative Editing"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/SignalRService/",
    name: "SignalR Service"
}

You can change the following CSS rules and classes that control highlighting:

    <!--CSS-->
    @keyframes dx-{widgetname}-highlight-change {
        from {
            background-color: #efefef;
        }
        50% {
            background-color: #efefef;
        }
    }
    .dx-{widgetname}-cell-updated-animation {
        animation: dx-{widgetname}-highlight-change 1s;
    }
    .dx-{widgetname}-row-inserted-animation {
        animation: dx-{widgetname}-highlight-change 1s;
    }
