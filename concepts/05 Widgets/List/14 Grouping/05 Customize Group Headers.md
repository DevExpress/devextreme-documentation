By default, group headers contain the text of the **key** field in a bold font. You can define a custom template for group headers if you need to. For AngularJS and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code shows how to use **dxTemplate** to define a template for group headers.

---

#####Angular

    <!--HTML-->
    <dx-list
        [dataSource]="listDataSource"
        [grouped]="true"
        groupTemplate="group"
        itemTemplate="item">
        <div *dxTemplate="let itemObj of 'item'">
            <p style="margin:0px">{{itemObj.name}} | {{itemObj.count}}</p>
        </div>
        <div *dxTemplate="let groupObj of 'group'">
            <p>{{groupObj.key}} | {{groupObj.overallCount}}</p>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        fruitsVegetables = [{
            key: "Fruits",
            items: [
                { name: "Apples", count: 10 },
                { name: "Oranges", count: 12 },
                { name: "Lemons", count: 15 }
            ]
        }, {
            key: "Vegetables",
            items: [
                { name: "Potatoes", count: 5 },
                { name: "Tomatoes", count: 9 },
                { name: "Turnips", count: 8 }
            ]
        }];
        listDataSource = new DataSource({
            store: fruitsVegetables,
            map: function(groupedItem) {
                var overallCount = 0;
                groupedItem.items.forEach(function(item) {
                    overallCount += item.count;
                })
                return Object.assign(groupedItem, { overallCount: overallCount });
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-list="{
            dataSource: listDataSource,
            grouped: true,
            groupTemplate: 'group',
            itemTemplate: 'item'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'group' }">
                <p>{{ itemObj.key }} | {{ itemObj.overallCount }}</p>
            </div>
            <div data-options="dxTemplate: { name: 'item' }">
                <p style="margin:0">{{ itemObj.name }} | {{ itemObj.count }}</p>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            var fruitsVegetables = [{
                key: "Fruits",
                items: [
                    { name: "Apples", count: 10 },
                    { name: "Oranges", count: 12 },
                    { name: "Lemons", count: 15 }
                ]
            }, {
                key: "Vegetables",
                items: [
                    { name: "Potatoes", count: 5 },
                    { name: "Tomatoes", count: 9 },
                    { name: "Turnips", count: 8 }
                ]
            }];
            $scope.listDataSource = new DevExpress.data.DataSource({
                store: fruitsVegetables,
                map: function(groupedItem) {
                    var overallCount = 0;
                    groupedItem.items.forEach(function(item) {
                        overallCount += item.count;
                    })
                    return $.extend(groupedItem, { overallCount: overallCount })
                }
            });
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####Knockout

    <!--HTML-->
    <div data-bind="dxList: {
        dataSource: listDataSource,
        grouped: true,
        groupTemplate: 'group',
        itemTemplate: 'item'
    }">
        <div data-options="dxTemplate: { name: 'group' }">
            <p data-bind="text: key + ' | ' + overallCount"></p>
        </div>
        <div data-options="dxTemplate: { name: 'item' }">
            <p data-bind="text: name + ' | ' + count" style="margin:0"></p>
        </div>
    </div>

    <!--JavaScript-->var fruitsVegetables = [{
        // ...
        // omitted for brevity
        // see the AngularJS code
    }];

    var viewModel = {
        listDataSource: new DevExpress.data.DataSource({
            store: fruitsVegetables,
            map: function(groupedItem) {
                var overallCount = 0;
                groupedItem.items.forEach(function(item) {
                    overallCount += item.count;
                })
                return $.extend(groupedItem, { overallCount: overallCount })
            }
        })
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for group headers. To apply this markup, use the [groupTemplate](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/groupTemplate.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#groupTemplate') callback function as shown in the following code.

    <!--JavaScript-->var fruitsVegetables = [{
        // ...
        // omitted for brevity
        // see the AngularJS code
    }];

    $(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                store: fruitsVegetables,
                map: function(groupedItem) {
                    var overallCount = 0;
                    groupedItem.items.forEach(function(item) {
                        overallCount += item.count;
                    });
                    return $.extend(groupedItem, { overallCount: overallCount })
                }
            }),
            grouped: true,
            groupTemplate: function(groupData, _, groupElement) {
                groupElement.append(
                    $("<p>").text(groupData.key + " | " + groupData.overallCount)
                )
            },
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<p>").text(data.name + " | " + data.count).css("margin", 0)
                )
            }
        });
    });

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/GroupedList/"
}

In addition, you can use a 3rd-party template engine to perform the needed customizations. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, group headers appearance, customize, templates, template