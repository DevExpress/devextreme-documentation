The **TreeView** widget is a tree-like representation of textual data.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tree_view-hierarchical_data_structure" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=j3d94lzW4Vw&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=37" class="button orange small fix-width-155" target="_blank">Watch Video</a>

The following code adds a simple **TreeView** to your page.

    <!--HTML--><div id="treeViewContainer"></div>

<!---->

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

Note that the data source in the code above has a hierarchical structure, yet data sources with a plain structure are supported as well. To learn how you can customize hierarchical and plain data sources, see the [Use Hierarchical Data](/concepts/05%20Widgets/TreeView/05%20Use%20Hierarchical%20Data.md '/Documentation/Guide/Widgets/TreeView/Use_Hierarchical_Data') and [Use Plain Data](/concepts/05%20Widgets/TreeView/07%20Use%20Plain%20Data.md '/Documentation/Guide/Widgets/TreeView/Use_Plain_Data') articles.

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [TreeView - Access a Node](/concepts/05%20Widgets/TreeView/10%20Access%20a%20Node '/Documentation/Guide/Widgets/TreeView/Access_a_Node')
- [TreeView - Filter Nodes](/concepts/05%20Widgets/TreeView/15%20Filter%20Nodes.md '/Documentation/Guide/Widgets/TreeView/Filter_Nodes')
- [TreeView - Expand and Collapse Nodes](/concepts/05%20Widgets/TreeView/20%20Expand%20and%20Collapse%20Nodes '/Documentation/Guide/Widgets/TreeView/Expand_and_Collapse_Nodes')
- [TreeView - Select Nodes](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes '/Documentation/Guide/Widgets/TreeView/Select_Nodes')
- [TreeView - Customize Node Appearance](/concepts/05%20Widgets/TreeView/30%20Customize%20Node%20Appearance.md '/Documentation/Guide/Widgets/TreeView/Customize_Node_Appearance')
- [TreeView - Enhance Performance on Large Datasets](/concepts/05%20Widgets/TreeView/32%20Enhance%20Performance%20on%20Large%20Datasets.md '/Documentation/Guide/Widgets/TreeView/Enhance_Performance_on_Large_Datasets')
- [TreeView - Keyboard Support](/concepts/05%20Widgets/TreeView/35%20Keyboard%20Support.md '/Documentation/Guide/Widgets/TreeView/Keyboard_Support')
- [TreeView API Reference](/api-reference/10%20UI%20Widgets/dxTreeView '/Documentation/ApiReference/UI_Widgets/dxTreeView/')

[tags]treeview, tree view, collection container, collection widget, overview