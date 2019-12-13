For minor customization of nodes, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/items/') in node data objects. For example, the following code adds an icon to each node.

    <!--JavaScript-->var hierarchicalData = [{
        id: '1',
        text: 'Fruits',
        icon: '/pics/fruits.ico',
        items: [
            { id: '1_1', text: 'Apples', icon: '/pics/fruits/apple.ico' },
            { id: '1_2', text: 'Oranges', icon: '/pics/fruits/orange.ico' }
        ]
    }, {
        id: '2',
        text: 'Vegetables',
        icon: '/pics/vegetables.ico',
        items: [
            { id: '2_1', text: 'Cucumbers', icon: '/pics/vegetables/cucumber.ico' },
            { id: '2_2', text: 'Tomatoes', icon: '/pics/vegetables/tomato.ico' }
        ]
    }];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: hierarchicalData
        });
    });

If you need a more flexible solution, define a custom template. For Angular, AngularJS, and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code gives a simple example of how you can use **dxTemplate** to customize nodes.

---
##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="hierarchicalData"
        itemTemplate="itemTemplate">
        <div *dxTemplate="let itemObj of 'itemTemplate'">
            <i>{{itemObj.text}}</i>
        </div>
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        hierarchicalData = [{
            id: '1',
            text: 'Fruits',
            items: [
                { id: '1_1', text: 'Apples' },
                { id: '1_2', text: 'Oranges' }
            ]
        }, {
            id: '2',
            text: 'Vegetables',
            items: [
                { id: '2_1', text: 'Cucumbers' },
                { id: '2_2', text: 'Tomatoes' }
            ]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

#####**AngularJS**

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tree-view="{
            dataSource: hierarchicalData,
            itemTemplate: 'itemTemplate'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'itemTemplate' }">
                <i>{{itemObj.text}}</i>
            </div>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.hierarchicalData = [{
                id: '1',
                text: 'Fruits',
                items: [
                    { id: '1_1', text: 'Apples' },
                    { id: '1_2', text: 'Oranges' }
                ]
            }, {
                id: '2',
                text: 'Vegetables',
                items: [
                    { id: '2_1', text: 'Cucumbers' },
                    { id: '2_2', text: 'Tomatoes' }
                ]
            }];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML--><div data-bind="dxTreeView: {
        dataSource: hierarchicalData,
        itemTemplate: 'itemTemplate'
    }">
        <div data-options="dxTemplate: { name: 'itemTemplate' } ">
            <i data-bind="text: text"></i>
        </div>
    </div>

    <!--JavaScript-->var viewModel = {
        hierarchicalData: [{
            id: '1',
            text: 'Fruits',
            items: [
                { id: '1_1', text: 'Apples' },
                { id: '1_2', text: 'Oranges' }
            ]
        }, {
            id: '2',
            text: 'Vegetables',
            items: [
                { id: '2_1', text: 'Cucumbers' },
                { id: '2_2', text: 'Tomatoes' }
            ]
        }]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup. To apply the markup to the **TreeView** nodes, use the [itemTemplate](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#itemTemplate') callback function.

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: treeViewData,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<i>" + itemData.text + "</i>");
            }
        });
    });

You can also customize an individual node. For this purpose, declare a template for this node as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/items/#template') option.

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->var treeViewData = [{
        id: '1',
        text: 'Fruits',
        items: [
            { id: '1_1', text: 'Apples', template: $("#individualItemTemplate") },
            { id: '1_2', text: 'Oranges' }
        ]
    },
    // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Built-In Icon Library](/concepts/60%20Themes%20and%20Styles/30%20Icons/10%20Built-In%20Icon%20Library.md '/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library')
- [TreeView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/ItemSelectionAndCustomization)
- [TreeView API Reference](/api-reference/10%20UI%20Widgets/dxTreeView '/Documentation/ApiReference/UI_Widgets/dxTreeView/')

[tags]treeview, tree view, item appearance, customize, templates, template, custom template
