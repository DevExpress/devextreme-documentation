For a minor customization of **TagBox** items, you can use the default item template. This template defines the appearance of an item depending on whether [specific fields](/api-reference/10%20UI%20Widgets/DataExpressionMixin/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxTagBox/Default_Item_Template/') are present or absent from the item's data object. For example, the following code generates three items: the first is not customized, the second is disabled and the third is hidden.

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            valueExpr: 'text',
            displayExpr: 'text',
            dataSource: [
                { text: "HD Video Player" },
                { text: "SuperHD Video Player", disabled: true },
                { text: "SuperPlasma 50", visible: false }
            ],
            placeholder: "Select products..."
        });
    });

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template for widget items. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code shows how you can use **dxTemplate** to define a template for the **TagBox** items.

---
#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-tag-box="{
            dataSource: tagBoxData,
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

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.tagBoxData = [{
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

#####**Knockout**

    <!--HTML-->
    <div data-bind="dxTagBox: {
        dataSource: tagBoxData,
        valueExpr: 'id',
        displayExpr: 'name',
        itemTemplate: 'item'
    }">
        <div data-options="dxTemplate: { name: 'item' }">
            <img data-bind="attr: { src: imgSrc }"/>
            <div style="display:inline-block" data-bind="text: name"></div>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        tagBoxData: [{
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

---

If you use jQuery alone, combine the HTML markup for items manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    var tagBoxData = [{
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
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
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

You can also customize an individual item in the drop-down list. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/10%20UI%20Widgets/DataExpressionMixin/5%20Default%20Item%20Template/template.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Default_Item_Template/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var tagBoxData = [
        { text: "SuperHD Player"},
        { text: "HD Video Player", template: $("#individualTemplate") },
        // . . .
    ];

Using similar techniques, you can also customize tags of the selected items. The template for them should be assigned to the [tagTemplate](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/tagTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#tagTemplate') option. 

---
#####**jQuery**

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'name',
            tagTemplate: function (itemData, tagElement) {
                tagElement.append("<p><b>" + itemData.name + "</b> (" + itemData.id + ")</p>");
            }
        });
    });

#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-tag-box="{
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'name',
            tagTemplate: 'tagTemplate'
        }" dx-item-alias="product">
            <div data-options="dxTemplate: { name: 'tagTemplate' }">
                <p><b>{{ product.name }}</b> ({{ product.id }})</p>
            </div>
        </div>
    </div>

#####**Knockout**

    <!--HTML-->
    <div data-bind="dxTagBox: {
        dataSource: tagBoxData,
        valueExpr: 'id',
        displayExpr: 'name',
        tagTemplate: 'tagTemplate'
    }">
        <div data-options="dxTemplate: { name: 'tagTemplate' }">
            <p><b data-bind="text: name"></b> (<span data-bind="text: id"></span>)</p>
        </div>
    </div>

---

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [TagBox API Reference](/api-reference/10%20UI%20Widgets/dxTagBox '/Documentation/ApiReference/UI_Widgets/dxTagBox/')
- [TagBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-tag_box-overview)

[tags]tagBox, tag box, editor, item appearance, customize, templates, template, default item, default template, tag template
