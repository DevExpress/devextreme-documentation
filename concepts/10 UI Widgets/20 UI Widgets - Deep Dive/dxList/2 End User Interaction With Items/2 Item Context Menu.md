<article data-show="Content/Applications/16_1/UIWidgets/dxList/ContextMenu/markup.html,
        Content/Applications/16_1/UIWidgets/dxList/ContextMenu/script.js,
        Content/Applications/16_1/UIWidgets/dxList/ContextMenu/styles.css">

An end-user can call a context menu for a list item. The menu items are specified using the [menuItems](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/menuItems '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#menuItems') option. The context menu is available if the **menuItems** option includes an array containing at least one item.

The [menuMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/menuMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#menuMode') option specifies the way an end-user calls the context menu for an item. This option can take on one of the following values.

- "context"  
 The context menu appears if a user holds the required item. In this case, the context menu may include the "Delete" item in addition to the specified items if [item deletion](/concepts/10%20UI%20Widgets/20%20UI%20Widgets%20-%20Deep%20Dive/dxList/2%20End%20User%20Interaction%20With%20Items/3%20Delete%20Items.md '/Documentation/Guide/UI_Widgets/UI_Widgets_-_Deep_Dive/dxList/#End_User_Interaction_With_Items/Delete_Items') is enabled and the [itemDeleteMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/itemDeleteMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemDeleteMode') option is set to "context".

- "slide"  
 A user swipes the required item to uncover the **More** button, which calls the context menu.
<!---->
    
    <!--JavaScript-->
    var listOptions = {
        dataSource: listData,
        menuItems: contextMenuItems,
        menuType: "hold"
    };

An array passed to the **menuItems** option should contain objects including the following properties.

- **text**  
 Specifies the menu item text.

- **action**  
 Takes on a function called when the item is clicked (tapped). The function passed to this property has the **itemElement** and **itemData** parameters used to access the element and the data object of a list item for which the context menu is called.

<!---->

    <!--JavaScript-->
    var contextMenuItems = [
        {
            text: "Show on the map",
            action: function (itemElement, itemData) {
                //Action implementation
            }
        },
        {
            text: "Show info",
            action: function (itemElement, itemData) {
                //Action implementation
            }
        },
        {
            text: "Edit info",
            action: function (itemElement, itemData) {
                //Action implementation
            }
        }
    ];
</article>