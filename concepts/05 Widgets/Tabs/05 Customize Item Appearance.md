For a minor customization of tabs, you can use the default item template. This template defines the appearance of a tab depending on whether [specific fields](/api-reference/10%20UI%20Widgets/dxTabs/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxTabs/Default_Item_Template/') are present or absent from the tab's data object. For example, the following code generates three tabs: the first has an icon, the second has a [badge](/api-reference/10%20UI%20Widgets/dxTabPanel/5%20Default%20Item%20Template/badge.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Default_Item_Template/#badge'), the third is disabled.

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

Using the default item template is the easiest way to customize a tab, but it lacks flexibility. Instead, you can define a custom template. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code gives a simple example of how you can use **dxTemplate** to customize tabs.

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

If you use jQuery alone, combine the HTML markup for tabs manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#itemTemplate') callback function.

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

You can also customize an individual tab. For this purpose, declare a template for this tab as a script and pass its `id` to the [template](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template/template.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Default_Item_Template/#template') option.

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

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [Use an Alternative Template Engine](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance/5%20Use%20an%20Alternative%20Template%20Engine.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine') article.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')
- [Tabs Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tabs-overview)
- [Tabs API Reference](/api-reference/10%20UI%20Widgets/dxTabs '/Documentation/ApiReference/UI_Widgets/dxTabs/')

[tags]tabs, item appearance, customize, templates, template, custom template, default item, default template
