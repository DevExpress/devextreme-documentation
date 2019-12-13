The **TreeView** widget is a tree-like representation of textual data.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/HierarchicalDataStructure/"
}

The following code adds a simple **TreeView** to your page:

---
##### jQuery

    <!--HTML--><div id="treeViewContainer"></div>

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: [{
                id: '1',
                text: 'Fruits',
                expanded: true,
                items: [
                    { id: '1_1', text: 'Apples' },
                    { id: '1_2', text: 'Oranges' }
                ]
            }, {
                id: '2',
                text: 'Vegetables',
                expanded: true,
                items: [
                    { id: '2_1', text: 'Cucumbers' },
                    { id: '2_2', text: 'Tomatoes' }
                ]
            }]
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="hierarchicalData">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        hierarchicalData = [{
            id: '1',
            text: 'Fruits',
            expanded: true,
            items: [
                { id: '1_1', text: 'Apples' },
                { id: '1_2', text: 'Oranges' }
            ]
        }, {
            id: '2',
            text: 'Vegetables',
            expanded: true,
            items: [
                { id: '2_1', text: 'Cucumbers' },
                { id: '2_2', text: 'Tomatoes' }
            ]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

---

Note that the data source in the code above has a hierarchical structure, however, it also supports data sources with a plain structure. See the [Use Hierarchical Data](/concepts/05%20Widgets/TreeView/05%20Use%20Hierarchical%20Data.md '/Documentation/Guide/Widgets/TreeView/Use_Hierarchical_Data') and [Use Plain Data](/concepts/05%20Widgets/TreeView/07%20Use%20Plain%20Data.md '/Documentation/Guide/Widgets/TreeView/Use_Plain_Data') articles to learn how you can customize hierarchical and plain data sources.

#####See Also#####
#include common-link-configurewidget
- [TreeView - Access a Node](/concepts/05%20Widgets/TreeView/10%20Access%20a%20Node '/Documentation/Guide/Widgets/TreeView/Access_a_Node')
- [TreeView - Search Nodes](/concepts/05%20Widgets/TreeView/15%20Search%20Nodes.md '/Documentation/Guide/Widgets/TreeView/Search_Nodes/')
- [TreeView - Expand and Collapse Nodes](/concepts/05%20Widgets/TreeView/20%20Expand%20and%20Collapse%20Nodes '/Documentation/Guide/Widgets/TreeView/Expand_and_Collapse_Nodes')
- [TreeView - Select Nodes](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes '/Documentation/Guide/Widgets/TreeView/Select_Nodes')
- [TreeView - Customize Node Appearance](/concepts/05%20Widgets/TreeView/30%20Customize%20Node%20Appearance.md '/Documentation/Guide/Widgets/TreeView/Customize_Node_Appearance')
- [TreeView - Enhance Performance on Large Datasets](/concepts/05%20Widgets/TreeView/32%20Enhance%20Performance%20on%20Large%20Datasets.md '/Documentation/Guide/Widgets/TreeView/Enhance_Performance_on_Large_Datasets')
- [TreeView - Keyboard Support](/concepts/05%20Widgets/TreeView/35%20Keyboard%20Support.md '/Documentation/Guide/Widgets/TreeView/Keyboard_Support')
- [TreeView API Reference](/api-reference/10%20UI%20Widgets/dxTreeView '/Documentation/ApiReference/UI_Widgets/dxTreeView/')

[tags]treeview, tree view, collection container, collection widget, overview
