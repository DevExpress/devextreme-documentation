You can define a [groupTemplate](/api-reference/10%20UI%20Components/dxList/1%20Configuration/groupTemplate.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#groupTemplate') to customize group headers. Without a **groupTemplate**, group headers display the text of the **key** field in bold font.

---
##### jQuery

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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/GroupedList/"
}

#####See Also#####
- [List API Reference](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/')

[tags]list, group headers appearance, customize, templates, template