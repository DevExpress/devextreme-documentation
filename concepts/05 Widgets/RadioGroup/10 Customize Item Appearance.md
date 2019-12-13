For a minor customization of **RadioGroup** items, you can define [specific fields](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/items/') in item data objects. For example, the following code generates three radio buttons: the first is disabled, the second is not customized, the third is hidden.

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: [
                { text: "Low", disabled: true },
                { text: "High" },
                { text: "Urgent", visible: false }
            ]
        });
    });

If you need a more flexible solution, define a custom template. For AngularJS and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code gives a simple example of how you can use **dxTemplate** to customize radio buttons.

---

#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
       <div dx-radio-group="{
           dataSource: dataItems, 
           itemTemplate: 'customItemTemplate'
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'customItemTemplate' }">
                <div ng-style="{ color: item.color }">{{ item.text }}</div>
            </div>    
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.dataItems = [
                { text: "Low", color: "grey" },
                { text: "Normal", color: "green" },
                { text: "Urgent", color: "yellow" },
                { text: "High", color: "red" }
            ];
        });

[note]The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML-->
    <div data-bind="dxRadioGroup: {
        dataSource: dataItems,
        itemTemplate: 'customItemTemplate'
    }">
        <div data-options="dxTemplate: { name: 'customItemTemplate' }">
            <div data-bind="text: text, style: { color: color }"></div>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        dataItems: [
            { text: "Low", color: "grey" },
            { text: "Normal", color: "green" },
            { text: "Urgent", color: "yellow" },
            { text: "High", color: "red" }
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for items. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: [
                { text: "Low", color: "grey" },
                { text: "Normal", color: "green" },
                { text: "Urgent", color: "yellow" },
                { text: "High", color: "red" }
            ],
            itemTemplate: function(itemData, itemIndex, itemElement){
                itemElement.append(
                    $("<div />").attr("style", "color:" + itemData.color )
                                .text(itemData.text)
                );
            }
        });
    });

You can also customize an individual item. For this purpose, declare a template for it as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/items/#template').

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var radioGroupItems = [{
        text: "Low",
        template: $("#individualTemplate")
    },
    // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [RadioGroup - Handle the Value Change Event](/concepts/05%20Widgets/RadioGroup/05%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/RadioGroup/Handle_the_Value_Change_Event')
- [RadioGroup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/RadioGroup/Overview)
- [RadioGroup API Reference](/api-reference/10%20UI%20Widgets/dxRadioGroup '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/')

[tags]radio group, radioGroup, button appearance, item appearance, customize, templates, template, custom template
