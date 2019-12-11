For a minor customization of **ContextMenu** items, you can use the default item template. This template defines the appearance of an item depending on whether [specific fields](/api-reference/10%20UI%20Widgets/dxContextMenu/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/') are present or absent from the item's data object. For example, the following code generates three context menu items. Between the first and the second items lies a separator dividing one group of items from another. All the items are supplied with [icons](/concepts/60%20Themes/30%20Icon%20Library '/Documentation/Guide/Themes/Icon_Library/').

---
#####jQuery

    <!--JavaScript-->var contextMenuItems = [
        { text: "Zoom In", icon: "plus" },
        { text: "Share", icon: "message", beginGroup: true },
        { text: "Download", icon: "download" }
    ];

    $(function () {
        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            target: "#someElement",
            visible: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-context-menu
        [items]="contextMenuItems"
        target="#someElement"
        [visible]="true">
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        contextMenuItems = [
            { text: "Zoom In", icon: "plus" },
            { text: "Share", icon: "message" },
            { text: "Download", icon: "download" }
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxContextMenuModule
         ],
         // ...
     })

---

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For Angular, AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code gives a simple example of how you can use **dxTemplate** to customize context menu items.

---

#####Angular

    <!--HTML-->
    <dx-context-menu
        [items]="contextMenuItems"
        target="#someElement"
        itemTemplate="item"
        [visible]="true">
        <div *dxTemplate="let data of 'item'; let i = index">
            <span class="dx-icon-{{data.icon}}"></span> 
            <i style="margin-left:5px">{{data.text}}</i><span> [{{i + 1}}]</span>
        </div>
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        contextMenuItems = [
            { text: "Zoom In", icon: "plus" },
            { text: "Share", icon: "message" },
            { text: "Download", icon: "download" }
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxContextMenuModule
         ],
         // ...
     })

#####AngularJS

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.contextMenuItems = [
                { text: "Zoom In", icon: "plus" },
                { text: "Share", icon: "message" },
                { text: "Download", icon: "download" }
            ];
        });

    <!--HTML--><div ng-controller="DemoController">
        <div dx-context-menu="{
            items: contextMenuItems,
            itemTemplate: 'item',
            target: '#someElement',
            visible: true
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'item' }">
                <span class="dx-icon-{{item.icon}}"></span> 
                <i style="margin-left:5px">{{item.text}}</i><span> [{{$index + 1}}]</span>
            </div>
        </div>
    </div>

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####Knockout

    <!--JavaScript-->var viewModel = {
        contextMenuItems: [
            { text: "Zoom In", icon: "plus" },
            { text: "Share", icon: "message" },
            { text: "Download", icon: "download" }
        ]
    };

    ko.applyBindings(viewModel);

    <!--HTML--><div data-bind="dxContextMenu: {
        items: contextMenuItems,
        itemTemplate: 'item',
        target: '#someElement',
        visible: true
    }">
        <div data-options="dxTemplate: { name: 'item' }">
            <span data-bind="css: 'dx-icon-' + icon"></span>
            <i style="margin-left:5px" data-bind="text: text"></i> [<span data-bind="text: $index"></span>]
        </div>
    </div>

---

If you use jQuery alone, combine the HTML markup for context menu items manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->var contextMenuItems = [
        { text: "Zoom In", icon: "plus" },
        { text: "Share", icon: "message" },
        { text: "Download", icon: "download" }
    ];

    $(function () {
        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            visible: true,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                var iconElement = $("<span></span>");
                iconElement.addClass("dx-icon-" + itemData.icon);
                itemElement.append(iconElement);
                itemElement.append("<i style='margin-left:5px'>" + itemData.text + "</i>" + " [" + itemIndex + "]");
            },
            target: '#someElement'
        });
    });

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Context_Menu/Templates/jQuery/Light/"
}

You can also customize an individual context menu item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template/template.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/#template') field of the item's data object.

    <!--HTML--><script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->var contextMenuItems = [
        { text: "Zoom In" },
        { text: "Zoom Out" },
        {
            text: "Download",
            template: $("#individualTemplate")
        },
        // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [ContextMenu API Reference](/api-reference/10%20UI%20Widgets/dxContextMenu '/Documentation/ApiReference/UI_Widgets/dxContextMenu/')

[tags]context menu, contextMenu, item appearance, customize, templates