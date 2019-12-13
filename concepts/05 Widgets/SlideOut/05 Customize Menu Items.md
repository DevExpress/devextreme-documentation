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

If you need a more flexible solution, define a custom template. For AngularJS and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code gives a simple example of how you can use **dxTemplate** to customize the items of a slide-out menu.

---

#####**AngularJS**

    <!--HTML--><div ng-controller="DemoController">
        <div dx-slide-out="{
            dataSource: menuData,
            menuItemTemplate: 'items',
            onItemClick: hideMenu
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'items' }">
                <span class="dx-icon-{{ item.icon }}"></span> 
                <span style="margin-left:10px">{{ item.text }}</span>
            </div>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.menuData = [
                { text: "Home", icon: "home" },
                { text: "Messages", icon: "message" },
                { text: "Music", icon: "music" },
                { text: "Photos", icon: "photo" },
                { text: "Downloads", icon: "download" },
                { text: "Favorites", icon: "favorites" },
                { text: "Preferences", icon: "preferences" },
                { text: "Help", icon: "help" }
            ];
            $scope.hideMenu = function (e) {
                e.component.hideMenu();
            };
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML--><div data-bind="dxSlideOut: {
        dataSource: menuData,
        menuItemTemplate: 'items',
        onItemClick: function (e) {
            e.component.hideMenu();
        }
    }">
        <div data-options="dxTemplate: { name: 'items' }">
            <span data-bind="css: 'dx-icon-' + icon"></span>
            <span style="margin-left:10px" data-bind="text: text"></span>
        </div>
    </div>

    <!--JavaScript-->var viewModel = {
        menuData: [
            { text: "Home", icon: "home" },
            { text: "Messages", icon: "message" },
            { text: "Music", icon: "music" },
            { text: "Photos", icon: "photo" },
            { text: "Downloads", icon: "download" },
            { text: "Favorites", icon: "favorites" },
            { text: "Preferences", icon: "preferences" },
            { text: "Help", icon: "help" }
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for menu items. To apply this markup, use the [menuItemTemplate](/api-reference/10%20UI%20Widgets/dxSlideOut/1%20Configuration/menuItemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#menuItemTemplate') callback function as shown in the following code.

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

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.
 
#####See Also#####
- [SlideOut - Group Menu Items](/concepts/05%20Widgets/SlideOut/08%20Group%20Menu%20Items.md '/Documentation/Guide/Widgets/SlideOut/Group_Menu_Items')
- [SlideOut Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slideout/Overview)
- [SlideOut API Reference](/api-reference/10%20UI%20Widgets/dxSlideOut '/Documentation/ApiReference/UI_Widgets/dxSlideOut/')

[tags]slide-out menu, slideOut, item appearance, customize, templates