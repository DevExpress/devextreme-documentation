For a minor customization of **SelectBox** items, you can use the default item template. This template defines the appearance of an item depending on whether [specific fields](/api-reference/10%20UI%20Widgets/DataExpressionMixin/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Default_Item_Template/') are present or absent from the item's data object. For example, the following code generates three items: the first is not customized, the second is disabled and the third is hidden.

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            valueExpr: 'text',
            displayExpr: 'text',
            dataSource: [
                { text: "HD Video Player" },
                { text: "SuperHD Video Player", disabled: true },
                { text: "SuperPlasma 50", visible: false }
            ],
            placeholder: "Select a product..."
        });
    });

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template for widget items. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code shows how you can use **dxTemplate** to define a template for the **SelectBox** items.

**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-select-box="{
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'name',
            itemTemplate: 'item'
        }" dx-item-alias="product">
            <div data-options="dxTemplate: { name: 'item' }">
                <img ng-src="{{ product.imgSrc }}"/>
                <div style="display:inline-block">{{ product.name }}</div>
            </div>
        </div>
    </div>

<!---->

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.selectBoxData = [{
                id: 1,
                name: "HD Video Player",
                imgSrc: "images/products/1-small.png"
            }, {
                id: 2,
                name: "UltraHD Player",
                imgSrc: "images/products/2-small.png"
            },
            // . . .
            ];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

**Knockout**

    <!--HTML-->
    <div data-bind="dxSelectBox: {
        dataSource: selectBoxData,
        valueExpr: 'id',
        displayExpr: 'name',
        itemTemplate: 'item'
    }">
        <div data-options="dxTemplate: { name: 'item' }">
            <img data-bind="attr: { src: imgSrc }"/>
            <div style="display:inline-block" data-bind="text: name"></div>
        </div>
    </div>

<!---->

    <!--JavaScript-->
    var viewModel = {
        selectBoxData: [{
            id: 1,
            name: "HD Video Player",
            imgSrc: "images/products/1-small.png"
        }, {
            id: 2,
            name: "UltraHD Player",
            imgSrc: "images/products/2-small.png"
        },
        // . . .
        ]
    };

    ko.applyBindings(viewModel);

If you use jQuery alone, combine the HTML markup for items manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    var selectBoxData = [{
        id: 1,
        name: "HD Video Player",
        imgSrc: "images/products/1-small.png"
    }, {
        id: 2,
        name: "UltraHD Player",
        imgSrc: "images/products/2-small.png"
    },
    // . . .
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'name',
            itemTemplate: function (itemData, itemIndex, itemElement) {
                return $("<div />").append(
                	$("<img />").attr("src", itemData.imgSrc),
                    $("<p />").text(itemData.name)
                              .css("display", "inline-block")
                );
            }
        });
    });

You can also customize an individual **SelectBox** item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/10%20UI%20Widgets/DataExpressionMixin/5%20Default%20Item%20Template/template.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Default_Item_Template/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

<!---->

    <!--JavaScript-->
    var selectBoxData = [
        { text: "SuperHD Player"},
        { text: "HD Video Player", template: $("#individualTemplate") },
        // . . .
    ];

Using similar techniques, you can customize the input field of the **SelectBox**. The template for it should be assigned to the [fieldTemplate](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/fieldTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#fieldTemplate') option. Note that the input field must contain the [TextBox](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Widgets/dxTextBox/') widget.

**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-select-box="{
            dataSource: selectBoxData,
            valueExpr: 'id',
            value: 1,
            displayExpr: 'name',
            fieldTemplate: 'inputField'
        }" dx-item-alias="product">
            <div data-options="dxTemplate: { name: 'inputField' }">
                <img ng-src="{{ product.imgSrc }}" />
                <div style="display:inline-block" dx-text-box="{ value: product.name }"></div>
            </div>
        </div>
    </div>

**Knockout**

    <!--HTML-->
    <div data-bind="dxSelectBox: {
        dataSource: selectBoxData,
        valueExpr: 'id',
        value: 1,
        displayExpr: 'name',
        fieldTemplate: 'inputField'
    }">
        <div data-options="dxTemplate: { name: 'inputField' }">
            <img data-bind="attr: { src: imgSrc }" />
            <div style="display:inline-block" data-bind="dxTextBox: { value: name }"></div>
        </div>
    </div>

**jQuery**

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'name',
            value: 1,
            fieldTemplate: function(selectedItem, fieldElement) {
                return $("<div />").append(
                	$("<img />").attr("src", selectedItem.imgSrc),
                    $("<div />").dxTextBox({ value: selectedItem.name })
                                .css("display", "inline-block")
                );
            }
        });
    });

In addition, you can use a 3rd-party template engine to perform the needed customizations. For more information, see the [Use an Alternative Template Engine](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance/5%20Use%20an%20Alternative%20Template%20Engine.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine') article.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')
- [SelectBox API Reference](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/')
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-select_box-overview)

[tags]selectBox, select box, editor, item appearance, customize, templates, template, default item, default template, field template
