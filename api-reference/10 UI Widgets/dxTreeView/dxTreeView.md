---
module: ui/tree_view
inherits: ..\HierarchicalCollectionWidget\HierarchicalCollectionWidget.md
---
---
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
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **TreeView** widget is a tree-like representation of textual data.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxTreeView` jQuery plug-in.

        <!--HTML-->
        <div id="treeView"></div>

    <!---->

        <!--JavaScript-->
        var treeViewData = [
            { id: 1, parentId: 0, text: "Animals" },
            { id: 2, parentId: 1, text: "Cat" },
            { id: 3, parentId: 1, text: "Dog" },
            { id: 4, parentId: 1, text: "Cow" },
            { id: 5, parentId: 2, text: "Abyssinian" },
            { id: 6, parentId: 2, text: "Aegean cat" },
            { id: 7, parentId: 2, text: "Australian Mist" },
            { id: 8, parentId: 3, text: "Affenpinscher" },
            { id: 9, parentId: 3, text: "Afghan Hound" },
            { id: 10, parentId: 3, text: "Airedale Terrier" },
            { id: 11, parentId: 3, text: "Akita Inu" },
            { id: 12, parentId: 0, text: "Birds" },
            { id: 13, parentId: 12, text: "Akekee" },
            { id: 14, parentId: 12, text: "Arizona Woodpecker" },
            { id: 15, parentId: 12, text: "Black-chinned Sparrow" }
        ];
        $("#treeView").dxTreeView({
            dataSource: treeViewData,
            dataStructure: 'plain'
        });

- **Knockout**  
 Add a div element and apply the `dxTreeView` binding to this element.

        <!--HTML-->
        <div data-bind="dxTreeView: {
            dataSource: treeViewData,
            dataStructure: 'plain'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-tree-view` directive to this element.

        <!--HTML-->
        <div dx-tree-view="{
            dataSource: treeViewData,
            dataStructure: 'plain'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

Since the **TreeView** widget is used to display multiple items, it supports common Collection Container widget functionality. You can find detailed information on the principles of working with the widget in the [dxTreeView section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/1%20List%20of%20Collection%20Container%20Widgets/dxTreeView.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#List_of_Collection_Container_Widgets/dxTreeView') of the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') article.

[note]The **TreeView** widget requires each data source item to contain at least a [key](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#keyExpr') field. Thus, the widget does not support data sources consisting of value items.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationtreeviewtreeviewsimpletreeview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=j3d94lzW4Vw&index=41&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>