You can define a [groupTemplate](/Documentation/ApiReference/UI_Components/dxList/Configuration/#groupTemplate) to customize group headers. In Angular and Vue, declare the template in the markup. In React, use a rendering function (shown in the code below) or component. Without a **groupTemplate**, group headers display the text of the **key** field in bold font.

---

##### Angular

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
            DxListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList
            :data-source="listDataSource"
            :grouped="true"
            item-template="list-item"
            group-template="group-header">
            <template #list-item="{ data }">
                <p style="margin:0px">{{ data.name }} | {{ data.count }}</p>
            </template>
            <template #group-header="{ data }">
                <p>{{ data.key }} | {{ data.overallCount }}</p>
            </template>
        </DxList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxList from 'devextreme-vue/list';
    import DataSource from 'devextreme/data/data_source';

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

    const listDataSource = new DataSource({
        store: fruitsVegetables,
        map: function(groupedItem) {
            let overallCount = 0;
            groupedItem.items.forEach(function(item) {
                overallCount += item.count;
            });
            return Object.assign(groupedItem, { overallCount: overallCount });
        }
    });

    export default {
        components: {
            DxList
        },
        data() {
            return {
                listDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import List from 'devextreme-react/list';
    import DataSource from 'devextreme/data/data_source';

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

    const listDataSource = new DataSource({
        store: fruitsVegetables,
        map: function(groupedItem) {
            let overallCount = 0;
            groupedItem.items.forEach(function(item) {
                overallCount += item.count;
            });
            return Object.assign(groupedItem, { overallCount: overallCount });
        }
    });

    const ListItem = (data) => {
        return (
            <p style={{ margin: '0px' }}>{ data.name } | { data.count }</p>
        );
    };

    const ListGroupHeader = (data) => {
        return (
            <p>{ data.key } | { data.overallCount }</p>
        );
    };

    export default function App() {
        return (
            <List
                dataSource={listDataSource}
                grouped={true}
                itemRender={ListItem}
                groupRender={ListGroupHeader}
            />
        );
    }

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for group headers. To apply this markup, use the [groupTemplate](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/groupTemplate.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#groupTemplate') callback function as shown in the following code.

    <!--JavaScript-->const fruitsVegetables = [{
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

    $(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                store: fruitsVegetables,
                map: function(groupedItem) {
                    let overallCount = 0;
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

In addition, you can use a 3rd-party template engine to perform the needed customizations. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/UI_Components/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Components/dxList/')

[tags]list, group headers appearance, customize, templates, template