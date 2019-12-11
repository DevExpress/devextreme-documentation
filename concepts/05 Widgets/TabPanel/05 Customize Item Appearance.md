An item in the **TabPanel** widget includes a tab and a view. For a minor customization of **TabPanel** items, you can use the default item template. This template defines the appearance of an item depending on whether [specific fields](/api-reference/10%20UI%20Widgets/dxTabPanel/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Default_Item_Template/') are present or absent from the item's data object. For example, the following code generates three items: the first has a [badge](/api-reference/10%20UI%20Widgets/dxTabPanel/5%20Default%20Item%20Template/badge.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Default_Item_Template/#badge'), the second is disabled, the third has an icon.

    <!--JavaScript-->
    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: [{
                title: "Info",
                text: 'This is Info Tab',
                badge: 'New'
            }, {
                title: "Contacts",
                text: 'This is Contacts Tab',
                disabled: true
            }, {
                title: "Address",
                text: 'This is Address Tab',
                icon: 'home'
            }]
        });
    });

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code gives a simple example of how you can use **dxTemplate** to customize tab panel items.

**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-tab-panel="{
            items: tabPanelItems,
            itemTitleTemplate: 'tab',
            itemTemplate: 'view'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'tab' } ">
                <p style="color:#6600cc;">{{ itemObj.text }}</p>
            </div>
            <div data-options="dxTemplate: { name: 'view' } ">
                <div style="margin:25px;">
                    <h1>{{ itemObj.text }}</h1>
                    <div style="text-align:left;" ng-repeat="item in itemObj.dataArray">
                        <p>{{ item.propertyKey }}: <b>{{ item.propertyValue }}</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!---->

    <!--JavaScript-->
    var dataItems = [{
        title: "Info",
        data: { firstName: "John", lastName: "Smith", birthYear: 1986 }
    }, {
        title: "Contacts",
        data: { phone: "(555)555-5555", email: "John.Smith@example.com" }
    },
    // . . .
    ];

    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.tabPanelItems = new DevExpress.data.DataSource({
                store: dataItems,
                // Brings each item of the loaded array to a specific structure
                map: function (itemData) {
                    itemData.text = itemData.title;
                    itemData.dataArray = $.map(itemData.data, function (value, key) {
                        return {
                            propertyKey: key,
                            propertyValue: value
                        }
                    });
                    return itemData;
                }
            });
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

**Knockout**

    <!--HTML-->
    <div data-bind="dxTabPanel: {
        items: tabPanelItems,
        itemTitleTemplate: 'title',
        itemTemplate: 'tab'
    }">
        <div data-options="dxTemplate: { name: 'title' } ">
            <p data-bind="text: text"></p>
        </div>
        <div data-options="dxTemplate: { name: 'tab' } ">
            <div style="margin:25px;">
                <h1 data-bind="text: text"></h1>
                <div style="text-align:left;" data-bind="foreach: dataArray">
                    <p><span data-bind="text: propertyKey"></span>: <b data-bind="text: propertyValue"></b></p>
                </div>
            </div>
        </div>
    </div>

<!---->

    <!--JavaScript-->
    var dataItems = [{
        title: "Info",
        data: { firstName: "John", lastName: "Smith", birthYear: 1986 }
    }, {
        title: "Contacts",
        data: { phone: "(555)555-5555", email: "John.Smith@example.com" }
    },
    // . . .
    ];

    var viewModel = {
        tabPanelItems: new DevExpress.data.DataSource({
            store: dataItems,
            // Brings each item of the loaded array to to a specific structure
            map: function (itemData) {
                itemData.text = itemData.title;
                itemData.dataArray = $.map(itemData.data, function (value, key) {
                    return {
                        propertyKey: key,
                        propertyValue: value
                    }
                });
                return itemData;
            }
        })
    };

    ko.applyBindings(viewModel);

If you use jQuery alone, combine the HTML markup for items manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#itemTemplate') and [itemTitleTemplate](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/itemTitleTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#itemTitleTemplate') callback functions for views and tabs, respectively.

    <!--JavaScript-->
    var dataItems = [{
        title: "Info",
        data: { firstName: "John", lastName: "Smith", birthYear: 1986 }
    }, {
        title: "Contacts",
        data: { phone: "(555)555-5555", email: "John.Smith@example.com" }
    },
    // . . .
    ];

    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: dataItems,
            itemTitleTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<p>" + itemData.title + "</p>");
            },
            itemTemplate: function (itemData, itemIndex, itemElement) {
                var mainContainer = $("<div style='margin:25px;'>");
                mainContainer.append("<h1>" + itemData.title + "</h1>");

                var info = $("<div style='text-align:left;'>");
                for (var field in itemData.data) {
                    info.append("<p>" + field + ": <b>" + itemData.data[field] + "</b></p>");
                }
                mainContainer.append(info);
                itemElement.append(mainContainer);
            }
        });
    });

You can also customize an individual view or tab. For this purpose, declare a template for this view or tab as a script and pass its `id` to the [template](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template/template.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Default_Item_Template/#template') or [tabTemplate](/api-reference/10%20UI%20Widgets/dxTabPanel/5%20Default%20Item%20Template/tabTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Default_Item_Template/#tabTemplate') option, respectively.

    <!--HTML-->
    <script id="individualViewTemplate" type="text/html">
        <!-- ... -->
    </script>

    <script id="individualTabTemplate" type="text/html">
        <!-- ... -->
    </script>

<!---->

    <!--JavaScript-->
    var tabPanelData = [{
        title: "Contacts",
        text: 'This is Contacts Tab',
        template: $("#individualViewTemplate"),
        tabTemplate: $("#individualTabTemplate")
    },
    // ...
    ];
    
In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [Use an Alternative Template Engine](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance/5%20Use%20an%20Alternative%20Template%20Engine.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine') article.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')
- [TabPanel - Control the Behavior](/concepts/05%20Widgets/TabPanel/15%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/TabPanel/Control_the_Behavior')
- [TabPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tab_panel-overview)
- [TabPanel API Reference](/api-reference/10%20UI%20Widgets/dxTabPanel '/Documentation/ApiReference/UI_Widgets/dxTabPanel/')

[tags]tab panel, tabPanel, item appearance, customize, templates, template, custom template, default item, default template
