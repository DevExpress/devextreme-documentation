You can select an item or cancel its selection in the following ways.

- **By key**    
Add or remove the key from the [selectedItemKeys](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedItemKeys.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectedItemKeys') collection.

        <!--JavaScript-->var list = $("#listContainer").dxList("instance");
        var selectedKeys = list.option("selectedItemKeys");
        // Selects the item with key 5
        selectedKeys.push(5);
        list.option("selectedItemKeys", selectedKeys);
        // Cancels the selection of the item with key 5
        selectedKeys = $.grep(selectedKeys, function(key) {
            return key != 5;
        });
        list.option("selectedItemKeys", selectedKeys);

    You can also use the **selectedItemKeys** collection to select items initially.

        <!--JavaScript-->
        $(function() {
            $("#listContainer").dxList({
                // ...
                selectedItemKeys: [0, 2, 5]
            });
        });

    [note]To specify the key field, use the [keyExpr](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#keyExpr') option of the **List** or the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') option of the **Store**.

- **By data object**      
Add or remove the data object from the [selectedItems](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedItems.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectedItems') collection.

        <!--JavaScript-->
        var fruits = [
            { fruit: "Apples", count: 10 },
            { fruit: "Oranges", count: 12 },
            { fruit: "Lemons", count: 15 }
        ];
        var list = $("#listContainer").dxList("instance");
        var selectedItems = list.option("selectedItems");
        // Selects the "Oranges" item
        selectedItems.push(fruits[1]);
        list.option("selectedItems", selectedItems);
        // Cancels the selection of the "Oranges" item
        selectedItems = $.grep(selectedItems, function(item) {
            return item != fruits[1];
        });
        list.option("selectedItems", selectedItems);

    You can also use the **selectedItems** collection to select items initially.

        <!--JavaScript-->
        var fruits = [
            // ...
        ];
        $(function() {
            $("#listContainer").dxList({
                dataSource: fruits,
                selectedItems: [fruits[0], fruits[2]]
            });
        });

- **By index**        
Pass the index to the [selectItem(itemIndex)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/selectItem(itemIndex).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#selectItemitemIndex') or [unselectItem(itemIndex)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/unselectItem(itemIndex).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#unselectItemitemIndex') method. If the **List** is [grouped](/concepts/05%20Widgets/List/14%20Grouping/01%20In%20the%20Data%20Source.md '/Documentation/Guide/Widgets/List/Grouping/In_the_Data_Source/'), these methods should be given an object with the indexes of the group and the item.

        <!--JavaScript-->
        var list = $("#listContainer").dxList("instance");
        // Selects the item with index 1
        list.selectItem(1);
        // Checks that the item with index 1 is selected; if so, cancels the selection
        if(isItemSelected(1)) {
            list.unselectItem(1);
        }
        // Selects the item with index 3 in the group with index 2
        list.selectItem({ group: 2, item: 3 });
        // Checks that the item with index 3 in the group with index 2 is selected; if so, cancels the selection
        var itemToUnselect = { group: 2, item: 3 };
        if(isItemSelected(itemToUnselect)) {
            list.unselectItem(itemToUnselect);
        }

- **By DOM node**      
Pass the [DOM node](https://www.w3schools.com/js/js_htmldom_nodes.asp) to the [selectItem(itemElement)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/selectItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#selectItemitemElement') or [unselectItem(itemElement)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/unselectItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#unselectItemitemElement') method.

        <!--JavaScript-->
        var list = $("#listContainer").dxList("instance");
        var itemNodes = $("#listContainer").find(".dx-list-item");
        // Selects the last item by its DOM node
        list.selectItem(itemNodes[itemNodes.length-1]);
        // Checks that the last item is selected; if so, cancels the selection
        if(isItemSelected(itemNodes[itemNodes.length-1])) {
            list.unselectItem(itemNodes[itemNodes.length-1]);
        }

#####See Also#####
- [Widget Basics - Call Methods](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/')
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/jQuery/Light)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')