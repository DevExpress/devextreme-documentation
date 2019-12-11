For a minor customization of **ActionSheet** buttons, you can use the default item template. This template defines the appearance of a button depending on whether [specific fields](/api-reference/10%20UI%20Widgets/dxActionSheet/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Default_Item_Template/') are present or absent from the button's data object. For example, the following code generates three buttons, the first is not customized, the second is disabled, the [type](/api-reference/10%20UI%20Widgets/dxActionSheet/5%20Default%20Item%20Template/type.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Default_Item_Template/#type') of the third button is *danger*.

    <!--JavaScript-->
    $(function() {
        $("#actionSheetContainer").dxActionSheet({
            dataSource: [
                { text: "Reply" },
                { text: "Reply All", disabled: true },
                { text: "Delete", type: 'danger' }
            ]
        });
    });

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code shows how you can use **dxTemplate** to define a template for the **ActionSheet** buttons.

**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-action-sheet="{ 
            dataSource: actionSheetData,
            itemTemplate: 'links',
            bindingOptions: {
                visible: 'isActionSheetVisible'
            }
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'links' }">
                <div style="margin:5px; padding:10px; border:1px dotted #080; background-color:white;">
                    <a href="#">{{ itemObj.text }}</a>
                </div>
            </div>
    </div>

<!---->

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.isActionSheetVisible = false;
            $scope.actionSheetData = [
                { text: "Reply" },
                { text: "Reply All" },
                { text: "Forward" },
                { text: "Delete" }
            ];
            $scope.showActionSheet = function () {
                $scope.isActionSheetVisible = true;
            };
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

**Knockout**

    <!--HTML-->
    <div data-bind="dxActionSheet: { 
        dataSource: actionSheetData,
        visible: isActionSheetVisible,
        itemTemplate: 'links' 
    }">
        <div data-options="dxTemplate: { name: 'links' }">
            <div style="margin:5px; padding:10px; border:1px dotted #080; background-color:white;">
                <a href="#" data-bind="text: text"></a>
            </div>
        </div>
    </div>

<!---->

    <!--JavaScript-->
    var viewModel = {
        isActionSheetVisible: ko.observable(false),
        actionSheetData: [
            { text: "Reply" },
            { text: "Reply All" },
            { text: "Forward" },
            { text: "Delete" }
        ],
        showActionSheet: function () {
            viewModel.isActionSheetVisible(true);
        }
    };

    ko.applyBindings(viewModel);

If you use jQuery alone, combine the HTML markup for items manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    $(function() {
        $("#actionSheetContainer").dxActionSheet({
            dataSource: [
                { text: "Reply", icon: 'arrowleft' },
                { text: "Reply All", icon: 'arrowleft' },
                { text: "Forward", icon: 'arrowright' },
                { text: "Delete", icon: 'close' }
            ],
            itemTemplate: function (itemData, itemIndex, itemElement) {
                var linkContainer = $("<div style='margin:5px; padding:10px; border:1px dotted #080; background-color:white;'>");
                linkContainer.append("<a href='#'>" + itemData.text + "</a>");
                itemElement.append(linkContainer);
            }
        });
    });

You can also customize an individual **ActionSheet** button. For this purpose, declare a template for this button as a script and pass its `id` to the [template](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template/template.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Default_Item_Template/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

<!---->

    <!--JavaScript-->var actionSheetData = [
        { text: "Reply", template: $('#individualTemplate') },
        { text: "Reply All" },
        // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [Use an Alternative Template Engine](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance/5%20Use%20an%20Alternative%20Template%20Engine.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine') article.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')
- [ActionSheet Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-action_sheet-overview/ios7)
- [ActionSheet API Reference](/api-reference/10%20UI%20Widgets/dxActionSheet '/Documentation/ApiReference/UI_Widgets/dxActionSheet/')

[tags]action sheet, actionSheet, item appearance, customize, templates, template, default item, default template
