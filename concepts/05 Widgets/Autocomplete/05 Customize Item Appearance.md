For a minor customization of **Autocomplete** items, you can define [specific fields](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/items/') in item data objects. For example, the following code generates three items: the first is not customized, the second is disabled and the third is hidden.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#autocompleteContainer").dxAutocomplete({
            valueExpr: "text",
            dataSource: [
                { text: "James" },
                { text: "John", disabled: true },
                { text: "Joseph", visible: false }
            ],
            placeholder: "Type first name..."
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxAutocompleteModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        autocompleteData = [
            { text: "James" },
            { text: "John", disabled: true },
            { text: "Joseph", visible: false }
        ]
    }
    @NgModule({
        imports: [
            // ...
            DxAutocompleteModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-autocomplete
        [dataSource]="autocompleteData"
        valueExpr="text"
        placeholder="Type first name...">
    </dx-autocomplete>

---

If you need a more flexible solution, define a custom template for items of the widget. For Angular, AngularJS, and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code shows how to use **dxTemplate** to define a template for the **Autocomplete** items.

---
##### Angular

    <!--HTML-->
    <dx-autocomplete
        [dataSource]="autocompleteData"
        valueExpr="country"
        placeholder="Type country name..."
        itemTemplate="full">
        <div *dxTemplate="let itemObj of 'full'">
            <p>Country: <b>{{itemObj.country}}</b></p>
            <p style="color:grey;">Capital: <b>{{itemObj.capital}}</b></p>
        </div>
    </dx-autocomplete>

    <!--TypeScript-->
    import { DxAutocompleteModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        autocompleteData = [
            { country: "Afghanistan", capital: "Kabul" },
            { country: "Albania", capital: "Tirana" },
            // ...
        ]
    }
    @NgModule({
        imports: [
            // ...
            DxAutocompleteModule
        ],
        // ...
    })

#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-autocomplete="{
            dataSource: autocompleteData,
            valueExpr: 'country',
            placeholder: 'Type country name...',
            itemTemplate: 'full'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'full' }">
                <p>Country: <b>{{itemObj.country}}</b></p>
                <p style="color:grey;">Capital: <b>{{itemObj.capital}}</b></p>
            </div>
        </div>
    </div>


    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.autocompleteData = [
                { country: "Afghanistan", capital: "Kabul" },
                { country: "Albania", capital: "Tirana" },
                // ...
            ];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML-->
    <div data-bind="dxAutocomplete: {
        dataSource: autocompleteData,
        valueExpr: 'country',
        placeholder: 'Type country name...',
        itemTemplate: 'full'
    }">
        <div data-options="dxTemplate: { name: 'full' }">
            <p>Country: <b data-bind="text: country"></b></p>
            <p style="color:grey;">Capital: <b data-bind="text: capital"></b></p>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        autocompleteData: [
            { country: "Afghanistan", capital: "Kabul" },
            { country: "Albania", capital: "Tirana" },
            // ...
        ]
    };

    ko.applyBindings(viewModel);
    
---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for items. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    var autocompleteData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#autocompleteContainer").dxAutocomplete({
            dataSource: autocompleteData,
            valueExpr: 'country',
            placeholder: 'Type country name...',
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<p>Country: <b>" + itemData.country + "</b></p>");
                itemElement.append("<p style='color:grey;'>Capital: <b>" + itemData.capital + "</b></p>");
            }
        });
    });

You can also customize an individual **Autocomplete** item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/items/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var autocompleteData = [
        { text: "James"},
        { text: "Joseph", template: $("#individualTemplate") },
        // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Autocomplete - Configure Search Parameters](/concepts/05%20Widgets/Autocomplete/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/Widgets/Autocomplete/Configure_Search_Parameters')
- [Autocomplete Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Autocomplete/Overview)
- [Autocomplete API Reference](/api-reference/10%20UI%20Widgets/dxAutocomplete '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/')

[tags]autocomplete, item appearance, customize, templates, template
