<article data-show="Content/Applications/16_1/UIWidgets/dxList/DeleteItems/markup.html,
        Content/Applications/16_1/UIWidgets/dxList/DeleteItems/script.js,
        Content/Applications/16_1/UIWidgets/dxList/DeleteItems/styles.css">

The **List** widget allows an end-user to delete items. To enable deletion, set the [allowItemDeleting](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/allowItemDeleting.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemDeleting') option to *true*.

    <!--JavaScript-->
    var listOptions = {
        dataSource: listData,
        allowItemDeleting: true
    }

You can specify the way an end-user can delete a required item using the [itemDeleteMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/itemDeleteMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemDeleteMode') option. This option can take on one of the following values.

- "static"  
 The Delete button is always displayed by each item. When an end-user clicks the Delete button, the corresponding item is deleted immediately without confirmation.

- "toggle"  
 A user can toggle Delete button visibility by clicking the appropriate icon, located to the left of the required item.

- "slideButton"  
 The "Delete" button slides out the screen when a user swipes the item.

- "slideItem"  
 The item slides left and uncovers the Delete button when a user swipes the item.

- "swipe"  
 A user can delete an item by just swiping it.

- "context"  
 The widget adds the Delete item to the context menu called when the list item is held.

<!---->
    
    <!--JavaScript-->
    var listOptions = {
        dataSource: listData,
        allowItemDeletion: true,
        itemDeleteMode: "toggle"
    }
</article>