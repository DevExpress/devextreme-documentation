For a minor customization of **Toolbar** items, you can use the default item template. This template defines the appearance of an item depending on whether [specific fields](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/') are present or absent from the item's data object. For example, the following code gererates four toolbar items: the first is a widget, the second is hidden, the third is disabled, the fourth is relocated.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [{
                widget: 'dxButton',
                options: {
                    type: 'back',
                    text: 'Back'
                },
                location: 'before'
            }, {
                text: 'Change',
                locateInMenu: 'always',
                visible: false
            }, {
                text: 'Remove',
                locateInMenu: 'always',
                disabled: true
            }, {
                text: 'Products',
                location: 'center'
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-toolbar>
        <dxi-item
            widget="dxButton"
            location="before"
            [options]="{
                type: 'back',
                text: 'Back'
            }">
        </dxi-item>
        <dxi-item
            text="Change"
            locateInMenu="always"
            [visible]="false">
        </dxi-item>
        <dxi-item
            text="Remove"
            locateInMenu="always"
            [disabled]="true">
        </dxi-item>
        <dxi-item
            text="Products"
            location="center">
        </dxi-item>
    </dx-toolbar>

    <!--TypeScript-->
    import { DxToolbarModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule,
            DxButtonModule
        ],
        // ...
    })

---

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For Angular, AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code gives a simple example of how you can use **dxTemplate** to customize items on the toolbar and commands on the overflow menu.

---
##### Angular

    <!--HTML-->
    <dx-toolbar 
        [items]="items"
        itemTemplate="itemTemplate"
        menuItemTemplate="menuItemTemplate">
        <div *dxTemplate="let item of 'itemTemplate'">
            <b style="color:green;">{{item.text}}</b>
        </div>
        <div *dxTemplate="let menuItem of 'menuItemTemplate'">
            <b style="font-style:italic;">{{menuItem.text}}</b>
        </div>
    </dx-toolbar>

    <!--TypeScript-->
    import { DxToolbarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        items = [{
            text: 'Back',
            location: 'before'
        }, {
            text: 'Change',
            locateInMenu: 'always'
        }, {
            text: 'Remove',
            locateInMenu: 'always'
        }, {
            text: 'Products',
            location: 'center'
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule
        ],
        // ...
    })


##### AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-toolbar="{
            items: toolbarItems,
            itemTemplate: 'itemTemplate',
            menuItemTemplate: 'menuItemTemplate'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'itemTemplate' }">
                <b style="color:green;">{{itemObj.text}}</b>
            </div>
            <div data-options="dxTemplate: { name: 'menuItemTemplate' }">
                <b style="font-style:italic;">{{itemObj.text}}</b>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.toolbarItems = [{
                text: 'Back',
                location: 'before'
            }, {
                text: 'Change',
                locateInMenu: 'always'
            }, {
                text: 'Remove',
                locateInMenu: 'always'
            }, {
                text: 'Products',
                location: 'center'
            }];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

##### Knockout

    <!--HTML-->
    <div data-bind="dxToolbar: {
        items: toolbarItems,
        itemTemplate: 'itemTemplate',
        menuItemTemplate: 'menuItemTemplate'
    }">
        <div data-options="dxTemplate: { name: 'itemTemplate' } ">
            <b style="color:green;" data-bind="text: text"></b>
        </div>
        <div data-options="dxTemplate: { name: 'menuItemTemplate' }">
            <b style="font-style:italic;" data-bind="text: text"></b>
        </div>
    </div>

    <!--JavaScript-->var viewModel = {
        toolbarItems: [{
            text: 'Back',
            location: 'before'
        }, {
            text: 'Change',
            locateInMenu: 'always'
        }, {
            text: 'Remove',
            locateInMenu: 'always'
        }, {
            text: 'Products',
            location: 'center'
        }]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine the HTML markup manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply the markup to items on the toolbar and commands on the overflow menu, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/#itemTemplate') and [menuItemTemplate](/api-reference/10%20UI%20Widgets/dxToolbar/1%20Configuration/menuItemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/#menuItemTemplate') callback functions, respectively.

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: toolbarItems,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<b style='color:green;'>" + itemData.text + "</b>");
            },
            menuItemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<b style='font-style:italic;'>" + itemData.text + "</b>");
            }
        });
    });

You can also customize an individual toolbar item or menu command. For this purpose, declare a template for this item or command as a script and pass its `id` to the [template](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template/template.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#template') or [menu item template](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/menuItemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#menuItemTemplate') option, respectively.

    <!--HTML-->
    <script id="individualItemTemplate" type="text/html">
        <!-- ... -->
    </script>

    <script id="individualMenuItemTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var toolbarItems = [{
        text: "Back",
        location: "before",
        template: $("#individualItemTemplate")
    }, {
        text: "Change",
        locateInMenu: "always",
        menuItemTemplate: $("#individualMenuItemTemplate")
    },
    // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Toolbar - Specify Item Type](/concepts/05%20Widgets/Toolbar/05%20Specify%20Item%20Type.md '/Documentation/Guide/Widgets/Toolbar/Specify_Item_Type')
- [Toolbar - Specify Item Location](/concepts/05%20Widgets/Toolbar/10%20Specify%20Item%20Location.md '/Documentation/Guide/Widgets/Toolbar/Specify_Item_Location')
- [Toolbar Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-toolbar-overview)
- [Toolbar API Reference](/api-reference/10%20UI%20Widgets/dxToolbar '/Documentation/ApiReference/UI_Widgets/dxToolbar/')

[tags]toolbar, item appearance, customize, templates, template, custom template, default item, default template
