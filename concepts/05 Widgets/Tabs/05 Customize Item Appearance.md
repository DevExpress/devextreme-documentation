For a minor customization of tabs, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxTabs/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/items/') in item data objects. For example, the following code generates three tabs: the first has an icon, the second has a [badge](/api-reference/_hidden/dxTabPanelItem/badge.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/items/#badge'), the third is disabled.

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: [
                { text: "User", icon: 'user' },
                { text: "Comment", badge: "New" },
                { text: "Find", disabled: true }
            ]
        });
    });

If you need a more flexible solution, define a custom template. For AngularJS and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code gives a simple example of how you can use **dxTemplate** to customize tabs.

---
#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-tabs="{
            items: tabItems,
            itemTemplate: 'tab'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'tab' } ">
                <p style="color:#6600cc;">{{ itemObj.text }}</p>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.tabItems = [
                { text: 'User' },
                { text: 'Comment' },
                { text: 'Find' },
                // . . .
            ];
        });


[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML-->
    <div data-bind="dxTabs: {
        items: tabItems,
        itemTemplate: 'tab'
    }">
        <div data-options="dxTemplate: { name: 'tab' } ">
            <p data-bind="text: text" style="color:#6600cc;"></p>
        </div>
    </div>

    <!--JavaScript-->var viewModel = {
        tabItems: [
            { text: 'User' },
            { text: 'Comment' },
            { text: 'Find' },
            // . . .
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for tabs. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#itemTemplate') callback function.

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: [
                { text: "User" },
                { text: "Comment" },
                { text: "Find" }
            ],
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<p>" + itemData.text + "</p>");
            }
        });
    });

You can also customize an individual tab. For this purpose, declare a template for this tab as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/items/#template') option.

    <!--HTML-->
    <script id="individualTabTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var tabs = [{
        title: "Contacts",
        text: 'This is Contacts Tab',
        template: $("#individualTabTemplate")
    },
    // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Tabs Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tabs/Overview)
- [Tabs API Reference](/api-reference/10%20UI%20Widgets/dxTabs '/Documentation/ApiReference/UI_Widgets/dxTabs/')

[tags]tabs, item appearance, customize, templates, template, custom template
