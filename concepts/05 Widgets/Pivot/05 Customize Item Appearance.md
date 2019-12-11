A **Pivot** item includes a view and a title. For a minor customization of **Pivot** items, you can use the default item template. This template defines the appearance of an item depending on whether [specific fields](/api-reference/10%20UI%20Widgets/dxPivot/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxPivot/Default_Item_Template/') are present or absent from the item's data object. For example, the following code generates two **Pivot** items: the first contains only text and a title, the second is disabled.

    <!--JavaScript-->
    $(function() {
        $("#pivotContainer").dxPivot({
            items: [{
                title: "Main courses",
                text: "First and second courses of a meal"
            }, {
                title: "Seafood",
                text: "Seafood: ocean and sea",
                disabled: true
            }],
            height: "auto"
        });
    });

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code gives a simple example of how you can use **dxTemplate** to customize pivot items and item titles.

---

#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-pivot="{
            items: pivotItems,
            height: 'auto',
            itemTemplate: 'customItemTemplate',
            itemTitleTemplate: 'customTitleTemplate'
        }" dx-item-alias="pivotItem">
            <div data-options="dxTemplate: { name: 'customTitleTemplate' }">
                <div style="color:#99ccff">{{ pivotItem.title }}</div>
            </div>
            <div data-options="dxTemplate: { name: 'customItemTemplate' }">
                <div dx-list="{ dataSource: pivotItem.listData }" dx-item-alias="contact">
                    <div data-options="dxTemplate: { name: 'item' }">
                        <div>{{ contact.name }}</div>
                        <div>{{ contact.phone }}</div>
                        <div>{{ contact.email }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.pivotItems = [{
                title: "All",
                listData: [{ 
                    name: "Barbara J. Coggins", 
                    phone: "512-964-2757", 
                    email: "barbarajcoggins@rhyta.com"
                },
                // . . .
                ]
            },
            // . . .
            ];
        });

[note]The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML-->
    <div data-bind="dxPivot: { 
        items: pivotItems,
        height: 'auto',
        itemTemplate: 'customItemTemplate',
        itemTitleTemplate: 'customTitleTemplate' 
    }">
        <div data-options="dxTemplate: { name: 'customTitleTemplate' }">
            <div style="color:#99ccff" data-bind="text: title"></div>
        </div>
        <div data-options="dxTemplate: { name: 'customItemTemplate' }">
            <div data-bind="dxList: { dataSource: listData }">
                <div data-options="dxTemplate: { name: 'item' }">
                    <div data-bind="text: name"></div>
                    <div data-bind="text: phone"></div>
                    <div data-bind="text: email"></div>
                </div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        pivotItems: [{
            title: "All",
            listData: [{ 
                name: "Barbara J. Coggins", 
                phone: "512-964-2757", 
                email: "barbarajcoggins@rhyta.com"
            },
            // . . .
            ]
        },
        // . . .
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine the HTML markup for items manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxPivot/Configuration/#itemTemplate') or [itemTitleTemplate](/api-reference/10%20UI%20Widgets/dxPivot/1%20Configuration/itemTitleTemplate.md '/Documentation/ApiReference/UI_Widgets/dxPivot/Configuration/#itemTitleTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    var pivotItems = [{
        title: "All",
        listData: [{ 
            name: "Barbara J. Coggins", 
            phone: "512-964-2757", 
            email: "barbarajcoggins@rhyta.com"
        },
        // . . .
        ]
    },
    // . . .
    ];

    $(function() {
        $("#pivotContainer").dxPivot({
            items: pivotItems,
            height: "auto",
            itemTitleTemplate: function(itemData, itemIndex, itemElement){
                itemElement.append(
                    $("<div />").attr("style", "color:#99ccff")
                                .text(itemData.title)
                );
            },
            itemTemplate: function(itemData, itemIndex, itemElement) {
                $("<div />").dxList({
                    dataSource: itemData.listData,
                    itemTemplate: function(itemData, itemIndex, itemElement) {
                        var infoContainer = $("<div />");
                        infoContainer.append(
                            $("<div />").text(itemData.name),
                            $("<div />").text(itemData.phone),
                            $("<div />").text(itemData.email)
                        );
                        itemElement.append(infoContainer);   
                    }
                }).appendTo(itemElement);
            }
        });
    });

You can also customize an individual view or title. For this purpose, declare a template for this view or title as a script and pass its `id` to the [template](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template/template.md '/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/#template') or [titleTemplate](/api-reference/10%20UI%20Widgets/dxPivot/5%20Default%20Item%20Template/titleTemplate.md '/Documentation/ApiReference/UI_Widgets/dxPivot/Default_Item_Template/#titleTemplate') option, respectively.

    <!--HTML-->
    <script id="individualViewTemplate" type="text/html">
        <!-- ... -->
    </script>

    <script id="individualTitleTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var pivotItems = [{
        title: "About",
        template: $("#individualViewTemplate"),
        titleTemplate: $("#individualTitleTemplate")
    },
    // ...
    ];

In cases when you need to manage the content of views regardless of which view is selected, use the [contentTemplate](/api-reference/10%20UI%20Widgets/dxPivot/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxPivot/Configuration/#contentTemplate') option.

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Pivot - Categorize Data for Views](/concepts/05%20Widgets/Pivot/10%20Categorize%20Data%20for%20Views.md '/Documentation/Guide/Widgets/Pivot/Categorize_Data_for_Views')
- [Pivot Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-pivot-overview/ios7)
- [Pivot API Reference](/api-reference/10%20UI%20Widgets/dxPivot '/Documentation/ApiReference/UI_Widgets/dxPivot/')

[tags]pivot, item appearance, customize, templates, template, custom template, default item, default template
