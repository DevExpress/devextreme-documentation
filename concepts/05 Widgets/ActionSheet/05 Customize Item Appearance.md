For a minor customization of **ActionSheet** buttons, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/items/') in button data objects. For example, the following code generates three buttons, the first is not customized, the second is disabled, the [type](/api-reference/_hidden/dxActionSheetItem/type.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/items/#type') of the third button is *danger*.

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

If you need a more flexible solution, define a custom template. For Angular, AngularJS and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code shows how to use **dxTemplate** to define a template for the **ActionSheet** buttons.

---
##### Angular

    <!--HTML-->
    <dx-action-sheet
        [dataSource]="actionSheetData"
        [visible]="isActionSheetVisible"
        itemTemplate="link">
        <div *dxTemplate="let item of 'link'">
            <div class="action-sheet-button">
                <a href="#">{{item.text}}</a>
            </div>
        </div>
    </dx-action-sheet>

    <!--TypeScript-->
    import { DxActionSheetModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        actionSheetData = [
            { text: "Reply" },
            { text: "Reply All" },
            { text: "Forward" },
            { text: "Delete" }
        ];
        isActionSheetVisible: Boolean = true;
    }
    @NgModule({
        imports: [
            // ...
            DxActionSheetModule
        ],
        // ...
    })

    <!--CSS-->
    .action-sheet-button {
        margin: 5px;
        padding: 10px;
        border: 1px dotted #080;
        background-color: white;
    }

#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-action-sheet="{ 
            dataSource: actionSheetData,
            itemTemplate: 'link',
            bindingOptions: {
                visible: 'isActionSheetVisible'
            }
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'link' }">
                <div class="action-sheet-button">
                    <a href="#">{{item.text}}</a>
                </div>
            </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.actionSheetData = [
                { text: "Reply" },
                { text: "Reply All" },
                { text: "Forward" },
                { text: "Delete" }
            ];
            $scope.isActionSheetVisible = true;
        });

    <!--CSS-->
    .action-sheet-button {
        margin: 5px;
        padding: 10px;
        border: 1px dotted #080;
        background-color: white;
    }

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML-->
    <div data-bind="dxActionSheet: { 
        dataSource: actionSheetData,
        visible: isActionSheetVisible,
        itemTemplate: 'link' 
    }">
        <div data-options="dxTemplate: { name: 'link' }">
            <div class="action-sheet-button">
                <a href="#" data-bind="text: text"></a>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        actionSheetData: [
            { text: "Reply" },
            { text: "Reply All" },
            { text: "Forward" },
            { text: "Delete" }
        ],
        isActionSheetVisible: ko.observable(false)
    };

    ko.applyBindings(viewModel);

    <!--CSS-->
    .action-sheet-button {
        margin: 5px;
        padding: 10px;
        border: 1px dotted #080;
        background-color: white;
    }

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for items. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#itemTemplate') callback function as shown in the following code.

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
                var linkContainer = $("<div class='action-sheet-button'>");
                linkContainer.append("<a href='#'>" + itemData.text + "</a>");
                itemElement.append(linkContainer);
            }
        });
    });

    <!--CSS-->
    .action-sheet-button {
        margin: 5px;
        padding: 10px;
        border: 1px dotted #080;
        background-color: white;
    }

You can also customize an individual **ActionSheet** button. For this purpose, declare a template for this button as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/items/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->var actionSheetData = [
        { text: "Reply", template: $('#individualTemplate') },
        { text: "Reply All" },
        // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [ActionSheet Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ActionSheet/Basics)
- [ActionSheet API Reference](/api-reference/10%20UI%20Widgets/dxActionSheet '/Documentation/ApiReference/UI_Widgets/dxActionSheet/')

[tags]action sheet, actionSheet, item appearance, customize, templates, template