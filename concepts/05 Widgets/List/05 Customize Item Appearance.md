For a minor customization of **List** items, you can use the default item template. This template defines the appearance of an item depending on whether [specific fields](/api-reference/10%20UI%20Widgets/dxList/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxList/Default_Item_Template/') are present or absent from the item's data object. For example, the following code generates three items: each item has a badge, the second is disabled and the third is hidden.

---
#####jQuery

    <!--JavaScript-->var fruits = [
        { text: "Apples", badge: 10 },
        { text: "Oranges", badge: 12, disabled: true },
        { text: "Lemons", badge: 15, visible: false }
    ];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruits
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { text: "Apples", badge: 10 },
            { text: "Oranges", badge: 12, disabled: true },
            { text: "Lemons", badge: 15, visible: false }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-list
        [dataSource]="fruits">
    </dx-list>

---

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template for widget items. For Angular, AngularJS, and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code shows how you can use **dxTemplate** to define a template for **List** items.

---

#####Angular

    <!--HTML-->
    <dx-list
        [dataSource]="fruits"
        itemTemplate="listItem">
        <div *dxTemplate="let item of 'listItem'">
            <b>{{item.name}}</b><br />
            <p style="margin:0px">{{item.count}}</p>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 },
            { name: "Pears", count: 20 },
            { name: "Pineapples", count: 3 }
        ];
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
            dataSource: fruits,
            itemTemplate: 'listItem'
        }" dx-item-alias="fruit">
            <div data-options="dxTemplate: { name: 'listItem' }">
                <b>{{ fruit.name }}</b><br />
                <p style="margin:0px">{{ fruit.count }}</p>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.fruits = [
                { name: "Apples", count: 10 },
                { name: "Oranges", count: 12 },
                { name: "Lemons", count: 15 },
                { name: "Pears", count: 20 },
                { name: "Pineapples", count: 3 }
            ];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####Knockout

    <!--HTML-->
    <div data-bind="dxList: {
        dataSource: fruits,
        itemTemplate: 'listItem'
    }">
        <div data-options="dxTemplate: { name: 'listItem' }">
            <b data-bind="text: name"></b><br />
            <p data-bind="text: count" style="margin:0px"></p>
        </div>
    </div>


    <!--JavaScript-->
    var viewModel = {
        fruits: [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 },
            { name: "Pears", count: 20 },
            { name: "Pineapples", count: 3 }
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine the HTML markup for items manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    var fruits = [
        { name: "Apples", count: 10 },
        { name: "Oranges", count: 12 },
        { name: "Lemons", count: 15 },
        { name: "Pears", count: 20 },
        { name: "Pineapples", count: 3 }
    ];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruits,
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<b>").text(data.fruit), $("<br />"),
                    $("<p>").text(data.count).css("margin", 0)
                )
            }
        });
    });

You can also customize an individual **List** item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template/template.md '/Documentation/ApiReference/UI_Widgets/dxList/Default_Item_Template/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var fruits = [
        { name: "Apples", count: 10 },
        { name: "Oranges", count: 12, template: $("#individualTemplate") },
        // ...
    ];

In addition, you can use a 3rd-party template engine to perform the needed customizations. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

<a href="/Demos/WidgetsGallery/Demo/List/ItemTemplate/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 5px; width:240px" target="_blank">View Built-In Template Engine Demo</a>
<a href="/Demos/WidgetsGallery/Demo/List/Item3RdPartyEngineTemplate/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px; width:240px" target="_blank">View 3rd-Party Template Engine Demo</a>

#####See Also#####
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, item appearance, customize, templates, template, default item, default template