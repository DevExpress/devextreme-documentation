For a minor customization of menu items, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxSlideOut/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/items/') in item data objects. For example, in the following code, *"Favorites"* is disabled and *"Help"* is hidden.

    <!--JavaScript-->var menuItems = [
        { text: "Home" },
        { text: "Messages" },
        { text: "Downloads" },
        { text: "Favorites", disabled: true },
        { text: "Preferences" },
        { text: "Help", visible: false }
    ];

    $(function () {
        $("#slideOutContainer").dxSlideOut({
            dataSource: menuItems,
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

    <!--CSS-->#slideOutContainer {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

If you need a more flexible solution, define an [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#itemTemplate). Within the template, you can access item data and index:

---
##### jQuery

    <!--JavaScript-->var menuItems = [
        { text: "Home", icon: "home" },
        { text: "Messages", icon: "message" },
        { text: "Music", icon: "music" },
        { text: "Photos", icon: "photo" },
        { text: "Downloads", icon: "download" },
        { text: "Favorites", icon: "favorites" },
        { text: "Preferences", icon: "preferences" },
        { text: "Help", icon: "help" }
    ];

    $(function () {
        $("#slideOutContainer").dxSlideOut({
            dataSource: menuItems,
            menuItemTemplate: function (itemData, itemIndex, itemElement) {
                var iconElement = $('<span />').addClass("dx-icon-" + itemData.icon);
                var textElement = $('<span />').text(itemData.text)
                                        .attr('style', 'margin-left:10px');
                itemElement.append(iconElement, textElement);
            },
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

---
    
You can also customize an individual menu item. For this purpose, declare a template for this item as a script and pass its `id` to the [menuTemplate](/api-reference/_hidden/dxSlideOutItem/menuTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/items/#menuTemplate') field of the item's data object.

    <!--HTML--><script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->var menuItems = [
        { text: "Home" },
        { text: "Messages" },
        {
            text: "Downloads",
            menuTemplate: $("#individualTemplate")
        }
    ];
 
#####See Also#####
- [SlideOut - Group Menu Items](/concepts/05%20Widgets/SlideOut/08%20Group%20Menu%20Items.md '/Documentation/Guide/Widgets/SlideOut/Group_Menu_Items')
- [SlideOut Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slideout/Overview)
- [SlideOut API Reference](/api-reference/10%20UI%20Widgets/dxSlideOut '/Documentation/ApiReference/UI_Widgets/dxSlideOut/')

[tags]slide-out menu, slideOut, item appearance, customize, templates