DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component for Angular, AngularJS, and Knockout apps.

Implement a **dxTemplate** within the widget's container using the syntax of the used library (Angular, Knockout, etc.). You can access a template's context properties within the template and, in item templates, the item index as shown in the following code. Assign the template's **name** to a widget's **...Template** option. In the code below, it is the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI) widget's [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemTemplate') option. One widget can have multiple **dxTemplate**s.

If you use jQuery alone, set the widget's **...Template** option to a function that combines the HTML markup using jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation).

---
#####Angular

    <!--HTML-->
    <dx-list ...
        [dataSource]="listData"
        itemTemplate="listItem">
        <div *dxTemplate="let itemData of 'listItem'; let itemIndex = index">
            {{itemIndex}} - {{itemData.itemProperty}}
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        listData = [
            { 
                itemProperty: "someValue",
                // ...
            },
            // ...
        ]
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-list="{
            ...
            dataSource: listData,
            itemTemplate: 'listItem'
        }" dx-item-alias="itemData">
            <div data-options="dxTemplate: { name: 'listItem' }">
                {{$index}} - {{itemData.itemProperty}}
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.listData = [
                { 
                    itemProperty: "someValue",
                    // ...
                },
                // ...
            ];
        });

#####Knockout

    <!--HTML-->
    <div data-bind="dxList: {
        ...
        dataSource: listData,
        itemTemplate: 'listItem'
    }">
        <div data-options="dxTemplate: { name: 'listItem' }">
            <span data-bind="text: $index"></span> - <span data-bind="text: itemProperty"></span>
        </div>
    </div>


    <!--JavaScript-->
    var viewModel = {
        listData: [
            { 
                itemProperty: "someValue",
                // ...
            },
            // ...
        ]
    };

    ko.applyBindings(viewModel);

#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            dataSource: [
                { 
                    itemProperty: "someValue",
                    // ...
                },
                // ...
            ],
            itemTemplate: function (itemData, itemIndex, element) {
                element.append(
                    $("<span>").text(itemIndex) - $("<span>").text(itemData.itemProperty)
                )
            }
        });
    });

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ItemTemplate/"
}

You can define custom templates for individual items in<a name="In_Collection_Widgets" style="position: relative; top: -120px;">&nbsp;</a>collection widgets. In Angular, AngularJS, and Knockout apps, declare the items using the [dxItem](/api-reference/10%20UI%20Widgets/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxItem/') component as shown in the following code. Do not set the widget's **dataSource** option. To do the same with jQuery, assign a function combining the HTML markup to a data source object's **template** option.

---
#####Angular

    <!--HTML-->
    <dx-list ... >
        <dxi-item>
            <i>Item 1</i>
        </dxi-item>
        <dxi-item>
            <b>Item 2</b>
        </dxi-item>
        <dxi-item>
            Item with a nested component
            <div *dxTemplate>
                <dx-button text="Click me"></dx-button>
            </div>
        </dxi-item>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule,
            DxButtonModule
        ],
        // ...
    })

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-list="{ ... }">
            <div data-options="dxItem: { }">
                <i>Item 1</i>
            </div>
            <div data-options="dxItem: { }">
                <b>Item 2</b>
            </div>
            <div data-options="dxItem: { }">
                Item with a nested component
                <div dx-button="{
                    text: 'Click me'
                }"></div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            // ...
        });

#####Knockout

    <!--HTML-->
    <div data-bind="dxList: { ... }">
        <div data-options="dxItem: { }">
            <i>Item 1</i>
        </div>
        <div data-options="dxItem: { }">
            <b>Item 2</b>
        </div>
        <div data-options="dxItem: { }">
            Item with a nested component
            <div data-bind="dxButton: {
                text: 'Click me'
            }"></div>
        </div>
    </div>


    <!--JavaScript-->
    var viewModel = {
        // ...
    };

    ko.applyBindings(viewModel);

#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            dataSource: [{
                template: function () {
                    return $("<i>").text("Item 1")
                }
            }, {
                template: function () {
                    return $("<b>").text("Item 2")
                }
            },{
                template: function () {
                    return $("<div>").append(
                        $("<span>").text("Item with nested component"),
                        $("<div>").dxButton({
                            text: "Click me"
                        })
                    )
                }
            }]
        });
    });

---

Each widget's customization is described in dedicated articles. Search for "customize appearance" in the left menu and navigate to your widget's article for more information.
