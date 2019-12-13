For a minor customization of **Lookup** items, you can define [specific fields](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/items/') in item data objects. For example, the following code generates three items: the first is not customized, the second is disabled and the third is hidden.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            valueExpr: 'text',
            displayExpr: 'text',
            dataSource: [
                { text: "HD Video Player" },
                { text: "SuperHD Video Player", disabled: true },
                { text: "SuperPlasma 50", visible: false }
            ]
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = [
            { text: "HD Video Player" },
            { text: "SuperHD Video Player", disabled: true },
            { text: "SuperPlasma 50", visible: false }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="text"
        displayExpr="text">
    </dx-lookup>

---

If you need a more flexible solution, define a custom template for widget items. For Angular, AngularJS and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code shows how to use **dxTemplate** to define a template for the **Lookup** items.

---
#####Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="id"
        itemTemplate="lookupItem">
        <div *dxTemplate="let item of 'lookupItem'; let i = index">
            <img src="{{item.imgSrc}}"/>
            <div 
                style="display:inline-block" 
                [style.font-style]="i % 2 == 0 ? 'italic' : 'normal'">
                {{item.name}}
            </div>
        </div>
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = [{
            id: 1,
            name: "HD Video Player",
            imgSrc: "images/products/1-small.png"
        }, {
            id: 2,
            name: "UltraHD Player",
            imgSrc: "images/products/2-small.png"
        },
        // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-lookup="{
            dataSource: lookupData,
            valueExpr: 'id',
            itemTemplate: 'item'
        }" dx-item-alias="product">
            <div data-options="dxTemplate: { name: 'item' }">
                <img ng-src="{{product.imgSrc}}"/>
                <div 
                    style="display:inline-block; 
                    font-style:{{$index % 2 == 0 ? 'italic' : 'normal'}}">
                    {{product.name}}
                </div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.lookupData = [{
                id: 1,
                name: "HD Video Player",
                imgSrc: "images/products/1-small.png"
            }, {
                id: 2,
                name: "UltraHD Player",
                imgSrc: "images/products/2-small.png"
            },
            // ...
            ];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####Knockout

    <!--HTML-->
    <div data-bind="dxLookup: {
        dataSource: lookupData,
        valueExpr: 'id',
        itemTemplate: 'item'
    }">
        <div data-options="dxTemplate: { name: 'item' }">
            <img data-bind="attr: { src: imgSrc }"/>
            <div style="display:inline-block" data-bind="{
                style: { 'font-style': $index % 2 == 0 ? 'italic' : 'normal' },
                text: name
            }"></div>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        lookupData: [{
            id: 1,
            name: "HD Video Player",
            imgSrc: "images/products/1-small.png"
        }, {
            id: 2,
            name: "UltraHD Player",
            imgSrc: "images/products/2-small.png"
        },
        // ...
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for items. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    var lookupData = [{
        id: 1,
        name: "HD Video Player",
        imgSrc: "images/products/1-small.png"
    }, {
        id: 2,
        name: "UltraHD Player",
        imgSrc: "images/products/2-small.png"
    },
    // ...
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'id',
            displayExpr: 'name',
            itemTemplate: function (itemData, itemIndex, itemElement) {
                return $("<div />").append(
                            $("<img />").attr("src", itemData.imgSrc),
                            $("<p />").text(itemData.name)
                                    .css("display", "inline-block")
                                    .css("font-style", (itemIndex % 2 == 0) ? "italic" : "normal")
                        );
            }
        });
    });

You can also customize an individual **Lookup** item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/items/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var lookupData = [
        { text: "SuperHD Player"},
        { text: "HD Video Player", template: $("#individualTemplate") },
        // ...
    ];

Using similar techniques, you can customize the input field of the **Lookup**. The template for it should be assigned to the [fieldTemplate](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/fieldTemplate.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#fieldTemplate') option. 

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'id',
            displayExpr: 'name',
            fieldTemplate: function(itemData, itemElement) {
                return $("<div />").append(
                    $("<img />").attr("src", itemData.imgSrc)
                );
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="id"
        displayExpr="name"
        fieldTemplate="inputField">
        <div *dxTemplate="let item of 'inputField'">
            <img src="{{item.imgSrc}}" />
        </div>
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = [{
            id: 1,
            name: "HD Video Player",
            imgSrc: "images/products/1-small.png"
        }, {
            id: 2,
            name: "UltraHD Player",
            imgSrc: "images/products/2-small.png"
        },
        // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-lookup="{
            dataSource: lookupData,
            valueExpr: 'id',
            displayExpr: 'name',
            fieldTemplate: 'inputField'
        }" dx-item-alias="product">
            <div data-options="dxTemplate: { name: 'inputField' }">
                <img ng-src="{{ product.imgSrc }}" />
            </div>
        </div>
    </div>

#####Knockout

    <!--HTML-->
    <div data-bind="dxLookup: {
        dataSource: lookupData,
        valueExpr: 'id',
        displayExpr: 'name',
        fieldTemplate: 'inputField'
    }">
        <div data-options="dxTemplate: { name: 'inputField' }">
            <img data-bind="attr: { src: imgSrc }" />
        </div>
    </div>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Templates/"
}

In addition, you can use a 3rd-party template engine to perform the needed customizations. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Lookup - Customize the Drop-Down Menu](/concepts/05%20Widgets/Lookup/20%20Customize%20the%20Appearance/08%20Customize%20the%20Drop-Down%20Menu.md '/Documentation/Guide/Widgets/Lookup/Customize_the_Appearance/Customize_the_Drop-Down_Menu/')

[tags]lookup, item appearance, customize, templates, template, field template
