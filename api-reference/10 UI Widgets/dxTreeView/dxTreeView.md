---
id: dxTreeView
module: ui/tree_view
export: default
inherits: HierarchicalCollectionWidget,SearchBoxMixin
---
---
##### shortDescription
The **TreeView** widget is a tree-like representation of textual data.

##### widgettree
dataSource: [{
    id: "1",
    text: "Stores",
    expanded: true,
    items: [{
        id: "1_1",
        text: "Super Mart of the West",
        expanded: true,
        items: [{
            id: "1_1_1",
            text: "Video Players",
            items: [{
                id: "1_1_1_1",
                text: "HD Video Player",
                price: 220,
                image: "images/products/1.png"
            }, {
                id: "1_1_1_2",
                text: "SuperHD Video Player",
                image: "images/products/2.png",
                price: 270
            }]
        }, {
            id: "1_1_2",
            text: "Televisions",
            expanded: true,
            items: [{
                id: "1_1_2_1",
                text: "SuperLCD 42",
                image: "images/products/7.png",
                price: 1200
            }, {
                id: "1_1_2_2",
                text: "SuperLED 42",
                image: "images/products/5.png",
                price: 1450
            }, {
                id: "1_1_2_3",
                text: "SuperLED 50",
                image: "images/products/4.png",
                price: 1600
            }, {
                id: "1_1_2_4",
                text: "SuperLCD 55",
                image: "images/products/6.png",
                price: 1350
            }, {
                id: "1_1_2_5",
                text: "SuperLCD 70",
                image: "images/products/9.png",
                price: 4000
            }]
        }, {
            id: "1_1_4",
            text: "Projectors",
            items: [{
                id: "1_1_4_1",
                text: "Projector Plus",
                image: "images/products/14.png",
                price: 550
            }, {
                id: "1_1_4_2",
                text: "Projector PlusHD",
                image: "images/products/15.png",
                price: 750
            }]
        }]

    }, {
        id: "1_2",
        text: "Braeburn",
        items: [{
            id: "1_2_1",
            text: "Video Players",
            items: [{
                id: "1_2_1_1",
                text: "HD Video Player",
                image: "images/products/1.png",
                price: 240
            }, {
                id: "1_2_1_2",
                text: "SuperHD Video Player",
                image: "images/products/2.png",
                price: 300
            }]
        }]

    }]
}]

##### lib
dx.web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/HierarchicalDataStructure/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/TreeView/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget