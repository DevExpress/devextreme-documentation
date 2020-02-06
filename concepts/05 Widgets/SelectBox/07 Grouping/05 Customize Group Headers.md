By default, group headers display text of the **key** field in a bold font. You can define a custom template for the group headers if you need to. For Angular, AngularJS and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code shows how to use **dxTemplate** to define a template for group headers.

---
#####Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxDataSource"
        [grouped]="true"
        groupTemplate="group"
        displayExpr="name"
        valueExpr="count">
        <div *dxTemplate="let data of 'group'">
            <p>{{data.key}} | Count: {{data.overallCount}}</p>
        </div>
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
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
        selectBoxDataSource = new DataSource({
            store: this.fruitsVegetables,
            map: function(groupedItem) {
                let overallCount = 0;
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
             DxSelectBoxModule
         ],
         // ...
     })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ...
            :data-source="selectBoxDataSource"
            :grouped="true"
            display-expr="name"
            value-expr="count"
            group-template="group"
        >
            <template #group="{ data }">
                <p>
                    {{ data.key + ' | Count: ' + data.overallCount }}
                </p>
            </template>
        </DxSelectBox>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';
    import DataSource from "devextreme/data/data_source";

    export default {
        components: {
            DxSelectBox
        },
        data() {
            const fruitsVegetables = [{
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
            const selectBoxDataSource = new DataSource({
                store: fruitsVegetables,
                map: function(groupedItem) {
                    let overallCount = 0;
                    groupedItem.items.forEach(function(item) {
                        overallCount += item.count;
                    })
                    return Object.assign(groupedItem, { overallCount: overallCount });
                }
            });

            return {
                selectBoxDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import SelectBox from 'devextreme-react/select-box';
    import DataSource from "devextreme/data/data_source";

    const fruitsVegetables = [{
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
    const selectBoxDataSource = new DataSource({
        store: fruitsVegetables,
        map: function(groupedItem) {
            let overallCount = 0;
            groupedItem.items.forEach(function(item) {
                overallCount += item.count;
            })
            return Object.assign(groupedItem, { overallCount: overallCount });
        }
    });

    const renderGroup = (data) => {
        return (
            <p>
                {data.key + ' | Count: ' + data.overallCount}
            </p>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <SelectBox ...
                    dataSource={selectBoxDataSource}
                    grouped="true"
                    displayExpr="name"
                    valueExpr="count"
                    groupRender={renderGroup}
                />
            );
        }
    }
    export default App;

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-select-box="{
            dataSource: selectBoxDataSource,
            grouped: true,
            groupTemplate: 'group',
            displayExpr: 'name',
            valueExpr: 'count'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'group' }">
                <p>{{itemObj.key}} | Count: {{itemObj.overallCount}}</p>
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
            $scope.selectBoxDataSource = new DevExpress.data.DataSource({
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
    <div data-bind="dxSelectBox: {
        dataSource: selectBoxDataSource,
        grouped: true,
        groupTemplate: 'group',
        displayExpr: 'name',
        valueExpr: 'count'
    }">
        <div data-options="dxTemplate: { name: 'group' }">
            <p data-bind="text: key + ' | Count: ' + overallCount"></p>
        </div>
    </div>

    <!--JavaScript-->var fruitsVegetables = [{
        // ...
        // omitted for brevity
        // see the AngularJS code
    }];

    var viewModel = {
        selectBoxDataSource: new DevExpress.data.DataSource({
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

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for group headers. To apply this markup, use the [groupTemplate](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/groupTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#groupTemplate') callback function as shown in the following code.

    <!--JavaScript-->var fruitsVegetables = [{
        // ...
        // omitted for brevity
        // see the AngularJS code
    }];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
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
                    $("<p>").text(groupData.key + " | Count: " + groupData.overallCount)
                )
            },
            displayExpr: 'name',
            valueExpr: 'count'
        });
    });

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/GroupedItems/"
}

In addition, you can use a 3rd-party template engine to perform the needed customizations. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [SelectBox - Customize Item Appearance](/concepts/05%20Widgets/SelectBox/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/SelectBox/Customize_Item_Appearance/')
- [SelectBox API Reference](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/')

[tags]selectBox, group headers appearance, customize, templates, template
