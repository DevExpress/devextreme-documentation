---
id: dxSplitter
module: ui/splitter
export: default
inherits: CollectionWidget
---
---
##### shortDescription
Splitter is a UI component that allows you to divide a page or section into multiple adjustable [panes](/api-reference/10%20UI%20Components/dxSplitter/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/').

##### widgettree
height: 300,
items: [ {resizable: true,
    collapsible: true,
    template: function (data, index, element) {
        $(element).css('background-color', "#FFE3E3");
        return 'Pane 1';
    }
}, {resizable: true,
    template: function (data, index, element) {
        $(element).css('background-color', "#FEF9F2");
        return 'Pane 2';
    }
} ]

##### lib
dx.web.js, dx.all.js

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Splitter/Overview/"
}
#include common-tutorialbutton with {
    url: "/Documentation/Guide/UI_Components/Splitter/Getting_Started_with_Splitter/"
}