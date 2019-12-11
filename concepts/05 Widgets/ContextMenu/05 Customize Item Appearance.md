For a minor customization of **ContextMenu** items, you can use the default item template. This template defines the appearance of an item depending on whether [specific fields](/api-reference/10%20UI%20Widgets/dxContextMenu/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/') are present or absent from the item's data object. For example, the following code generates three context menu items. Between the first and the second items lies a separator dividing one group of items from another. All the items are supplied with [icons](/concepts/60%20Themes/30%20Icon%20Library '/Documentation/Guide/Themes/Icon_Library/').

    <!--JavaScript-->var contextMenuItems = [
        { text: "Zoom In", icon: "plus" },
        { text: "Share", icon: "message", beginGroup: true },
        { text: "Download", icon: "download" }
    ];

    $(function () {
        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            target: "#someElement"
        });
    });

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code gives a simple example of how you can use **dxTemplate** to customize context menu items.

**AngularJS**

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.contextMenuItems = [
                { text: "Zoom In", icon: "plus" },
                { text: "Share", icon: "message" },
                { text: "Download", icon: "download" }
            ];
        });

<!---->

    <!--HTML--><div ng-controller="DemoController">
        <div dx-context-menu="{
            items: contextMenuItems,
            itemTemplate: 'items',
            target: '#someElement'
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'items' }">
                <span class="dx-icon-{{ item.icon }}"></span> 
                <i style="margin-left:5px">{{ item.text }}</i>
            </div>
        </div>
    </div>

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

**Knockout**

    <!--JavaScript-->var viewModel = {
        contextMenuItems: [
            { text: "Zoom In", icon: "plus" },
            { text: "Share", icon: "message" },
            { text: "Download", icon: "download" }
        ]
    };

    ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxContextMenu: {
        items: contextMenuItems,
        itemTemplate: 'items',
        target: '#someElement'
    }">
        <div data-options="dxTemplate: { name: 'items' }">
            <span data-bind="css: 'dx-icon-' + icon"></span>
            <i style="margin-left:5px" data-bind="text: text"></i>
        </div>
    </div>

If you use jQuery alone, combine the HTML markup for context menu items manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->var contextMenuItems = [
        { text: "Zoom In", icon: "plus" },
        { text: "Share", icon: "message" },
        { text: "Download", icon: "download" }
    ];

    $(function () {
        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                var iconElement = $("<span></span>");
                iconElement.addClass("dx-icon-" + itemData.icon);
                itemElement.append(iconElement);
                itemElement.append("<i style='margin-left:5px'>" + itemData.text + "</i>");
            },
            target: '#someElement'
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Context_Menu/Templates/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

You can also customize an individual context menu item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template/template.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/#template') field of the item's data object.

    <!--HTML--><script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

<!---->

    <!--JavaScript-->var contextMenuItems = [
        { text: "Zoom In" },
        { text: "Zoom Out" },
        {
            text: "Download",
            template: $("#individualTemplate")
        },
        // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [Use an Alternative Template Engine](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance/5%20Use%20an%20Alternative%20Template%20Engine.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine') article.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')
- [ContextMenu API Reference](/api-reference/10%20UI%20Widgets/dxContextMenu '/Documentation/ApiReference/UI_Widgets/dxContextMenu/')

[tags]context menu, contextMenu, item appearance, customize, templates