<article data-show="Content/Applications/16_1/UIWidgets/dxTreeView/markup.html,
        Content/Applications/16_1/UIWidgets/dxTreeView/script.js,
        Content/Applications/16_1/UIWidgets/dxTreeView/styles.css">
The [TreeView](/api-reference/10%20UI%20Widgets/dxTreeView '/Documentation/ApiReference/UI_Widgets/dxTreeView/') widget displays specified data using a tree structure.

[note]The **TreeView** widget requires each data source item to contain at least a [key](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#keyExpr') field. Thus, the widget does not support data sources consisting of value items.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationtreeviewtreeviewsimpletreeview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Adjust data item structure**

The widget requires each data item to have a key field whose value is unique within the entire array. By default, the widget uses the **id** field as a key. If you need to use another field as a key, pass the required field name to the [keyExpr](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#keyExpr') option.

    <!--JavaScript-->
    var treeViewOptions = {
        keyExpr: 'id'
    }

<div id="TreeViewNodes"></div>
**Tree View Nodes**

The widget holds the displayed items as a node tree. Each tree item is associated with the appropriate node. A tree view node is an object containing the following fields.

- **children**  
 An array of references to child nodes.

- **disabled**  
 A boolean value indicating whether or not the node is disabled.

- **expanded**  
 A boolean value indicating whether or not the node is expanded.

- **itemData**  
 A reference to the tree view data source item associated with the current node.

- **key**  
 The key value of the current node. This field holds a value obtained from the [data source](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataSource') item associated with the current node according to the [keyExpr](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#keyExpr') option value. If the **keyExpr** value is not specified, the **key** field holds the auto generated key value.

- **parent**  
 A reference to the parent node.

- **selected**  
 A boolean value indicating whether or not the node is selected.

- **text**  
 The text displayed by the node. This field holds a value obtained from the [data source](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataSource') item associated with the current node according to the [displayExpr](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#displayExpr') option value.

You can access a node object using the **node** field of an argument object passed to a handler for a tree item event.

    <!--JavaScript-->
    var treeViewOptions = {
        . . .
        onItemClick: function(e){
            //Access the node associated with the clicked item using the 'e.node' field
        }
    }

The widget also enables you to get the list of all nodes using the [getNodes()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/getNodes().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#getNodes') method.

    <!--JavaScript-->
    // Get the widget instance
    ...
    var treeViewNodes = treeViewInstance.getNodes();

**Use the data source with tree structure**

By default, the widget repeats the data array structure when displaying items. In this case, each item should include the **items** field, which holds the nested array.

    <!--JavaScript-->
    var treeViewData = [
        {
            id: 1,
            text: "Animals",
            items:[
                { 
                    id: 2,
                    text: "Cat",
                    items: [
                        { id: 5, text: "Abyssinian" },
                        { id: 6, text: "Aegean cat" },
                        { id: 7, text: "Australian Mist" }
                    ]
                },
                { 
                    id: 3,
                    text: "Dog",
                    items: [
                        { id: 8, text: "Affenpinscher" },
                        { id: 9, text: "Afghan Hound" },
                        { id: 10, text: "Airedale Terrier" },
                        { id: 11, text: "Akita Inu" }
                    ]
                },
                { 
                    id: 4,
                    text: "Cow"
                }
            ]
        },
        { 
            id: 12,
            parentId: 0,
            text: "Birds",
            items: [
                { id: 13, text: "Akekee" },
                { id: 14, text: "Arizona Woodpecker" },
                { id: 15, text: "Black-chinned Sparrow" }
            ]
        }
    ];
    var treeViewOptions = {
        dataSource: treeViewData
    }

You can assign the required field name to the [itemsExpr](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/itemsExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#itemsExpr') option to specify another field used to hold nested items.

    <!--JavaScript-->
    var treeViewOptions = {
        itemsExpr: 'children',
        dataSource: [
        {
            id: 1,
            text: "Animals",
            children:[
                . . .
            ]
        }
    }

**Use the data source with plain structure**

The [TreeView](/api-reference/10%20UI%20Widgets/dxTreeView '/Documentation/ApiReference/UI_Widgets/dxTreeView/') widget can also use an array that has a plain structure. Assign 'plane' to the [dataStructure](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataStructure') option to use a plain array as the data source. In this case, each item should contain the **parentId** field, which holds the key value of the parent item.

    <!--JavaScript-->
    var treeViewData = [
        { id: 0, parentId: -1, text: "Animals" },
        { id: 1, parentId: 0, text: "Cat" },
        { id: 2, parentId: 0, text: "Dog" },
        { id: 3, parentId: 0, text: "Cow" },
        { id: 4, parentId: 1, text: "Abyssinian" },
        { id: 5, parentId: 1, text: "Aegean cat" },
        { id: 6, parentId: 1, text: "Australian Mist" },
        { id: 7, parentId: 2, text: "Affenpinscher" },
        { id: 8, parentId: 2, text: "Afghan Hound" },
        { id: 9, parentId: 2, text: "Airedale Terrier" },
        { id: 10, parentId: 2, text: "Akita Inu" },
        { id: 11, parentId: -1, text: "Birds" },
        { id: 12, parentId: 11, text: "Akekee" },
        { id: 13, parentId: 11, text: "Arizona Woodpecker" },
        { id: 14, parentId: 11, text: "Black-chinned Sparrow" }
    ];
    var treeViewOptions = {
        dataSource: treeViewData,
        dataStructure: 'plain'
    }

You can use the [parentIdExpr](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/parentIdExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#parentIdExpr') option to specify another field for holding the parent key.

    <!--JavaScript-->
    var treeViewOptions = {
        parentIdExpr: 'parent',
        dataSource: [
            { id: 1, parent: 0, text: "Animals"},
            { id: 2, parent: 1, text: "Cat" },
            { id: 3, parent: 1, text: "Dog" },
            . . .
        ]
    }

<a name="dxTreeView_Use_the_widget_in_the_Virtual_mode"></a>
**Use the widget in Virtual mode**

If the data source associated with the widget has a plain structure, you can enable the Virtual mode, which can significantly increase performance when working with a large data source. If Virtual mode is enabled, the widget initially loads only root items, while child items are loaded when their parent is being expanded. To enable Virtual mode, set the [virtualModeEnabled](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/virtualModeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#virtualModeEnabled') option to *true*.

If Virtual mode is enabled, the widget requires you to specify the [parentId](/api-reference/10%20UI%20Widgets/dxTreeView/5%20Default%20Item%20Template/parentId.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/#parentId') value of root items using the [rootValue](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/rootValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#rootValue') option. The default value of the option is 0.

    <!--JavaScript-->
    var treeViewOptions: {
        dataSource: new DevExpress.data.DataSource(treeViewData),
        dataStructure: 'plain',
        rootValue: -1,
        virtualModeEnabled: true
    }

[note]Virtual mode also requires the widget to access data using a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance able to [filter data](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') by the **parentId** value.

**Specify whether or not an item is expanded**

Widget items can contain the **expanded** field, which specifies whether an item is displayed expanded (*true*) or collapsed (*false*).

    <!--JavaScript-->
    var treeViewData = [
        { id: 1, parentId: 0, text: "Animals", expanded: false },
        { id: 2, parentId: 1, text: "Cat" },
        { id: 3, parentId: 1, text: "Dog" },
        { id: 4, parentId: 1, text: "Cow" },
        . . .
    ]

You can assign the required field name to the [expandedExpr](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/expandedExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#expandedExpr') option to specify another field used to determine the expansion state of an item.

    <!--JavaScript-->
    var treeViewOptions = {
        expandedExpr: 'showExpanded',
        dataSource: [
            { id: 1, parentId: 0, text: "Animals", showExpanded: false },
            { id: 2, parentId: 1, text: "Cat" },
            { id: 3, parentId: 1, text: "Dog" },
            . . .
        ]
    }

Use the [expandedItems](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#expandedItems) option to access the list of expanded items.

You can also expand and collapse items at runtime using the [expandItem(itemElement)](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/expandItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#expandItemitemElement') and [collapseItem(itemElement)](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/collapseItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#collapseItemitemElement') methods respectively.

**Select widget items**

If the [showCheckBoxes](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/showCheckBoxes.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxes') option is set to *true*, the widget displays a check box for each tree item. In this case, the **selected** field of a data item specifies whether the item is displayed selected or not.

    <!--JavaScript-->
    var treeViewOptions = {
        showCheckBoxes: true,
        dataSource: [
            { id: 1, parentId: 0, text: "Animals" },
            { id: 2, parentId: 1, text: "Cat", selected: true },
            { id: 3, parentId: 1, text: "Dog" },
            { id: 4, parentId: 1, text: "Cow" },
            . . .
        ]
    }

To specify another field determining the selection state of an item, use the [selectedExpr](/api-reference/10%20UI%20Widgets/HierarchicalCollectionWidget/1%20Configuration/selectedExpr.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectedExpr') option.

    <!--JavaScript-->
    var treeViewOptions = {
        showCheckBoxes: true,
        selectedExpr: 'showSelected',
        dataSource: [
            { id: 1, parentId: 0, text: "Animals" },
            { id: 2, parentId: 1, text: "Cat", showSelected: true },
            { id: 3, parentId: 1, text: "Dog" },
            . . .
        ]
    }

You can assign *true* to the [selectAllEnabled](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectAllEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectAllEnabled') option to display a check box that selects or unselects all tree items. The check box text is specified by the [selectAllText](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectAllText.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectAllText') option.

    <!--JavaScript-->
    var treeViewOptions = {
        selectAllEnabled: true,
        selectAllText: 'Select all items'
    }

Use the [selectedItems](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectedItems) option to access the list of selected items.

**Filter Items**

The **TreeView** widget includes the [searchValue](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/searchValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#searchValue') option, which enables you to filter its items. If this option holds a non-empty string, the widget displays only items containing the specified string and their parents.

To implement a search box for the tree view, create the [TextBox](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Widgets/dxTextBox/') widget and pass its value to the **searchValue** option of the tree view each time the text box value has changed.

    <!--HTML-->
    <div id="searchBox"></div>
    <div id="myTreeView"></div>

<!---->

    <!--JavaScript-->
    $("#searchBox").dxTextBox({
        onValueChanged: function(e){
            $("#myTreeView").dxTreeView("instance").option("searchValue", e.value);
        }
    })
    $("#myTextBox").dxTextBox({
        dataSource: [. . .]
    });
    
#####AngularJS Approach#####

    <!--HTML-->
    <div ng-controller="demoController">
        <div dx-text-box="{
             bindingOptions: {
                value: 'searchText'
             }
        }"></div>
        <div dx-tree-view="{
            dataSource: treeViewData,
            bindingOptions: {
                searchValue: 'searchText'
            }
        }"></div>
    </div>

<!---->

    <!--JavaScript-->
    myApp.controller("demoController", function ($scope) {
        $scope.searchText = "";
        $scope.treeViewData = [. . .];
    });

#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxTextBox: {
        value: searchText
    }"></div>
    <div dataBind="dxTreeView: {
        dataSource: treeViewData,
        searchValue: searchText
    }"></div>

<!---->

    <!--JavaScript-->
    var viewModel = {
        searchText: ko.observable(""),
        treeViewData: [. . .]
    }
    ko.applyBindings(viewModel);
    

**Keyboard support**

An end-user can use the following keys to interact with the widget.

- Left arrow  
 Collapses the parent item.

- Right arrow  
 Expands the current item.

- Up/down arrow  
 Highlights the previous/next visible item.

- Home/End
 Highlights the first/last item.

- Shift + Up/Down arrow  
 Extends selection up/down by one node.

- Shift + Home  
 Extends selection up to the first node.

- Shift + Home  
 Extends selection down to the last node.

- *(asterisk)  
 Expands all nodes.

- -(minus)  
 Collapses all nodes.

- Enter (Space)
 Selects the focused item.
</article>