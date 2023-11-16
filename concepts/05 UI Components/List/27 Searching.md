---
tags: list, collection UI component, search, search mode, search expression
---
[note] Searching works when inputting a plain data structure only. However, if you need the searching capability and grouped data, transform the plain data using the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') property.

Searching is disabled in the List UI component by default. Assign **true** to the [searchEnabled](/api-reference/10%20UI%20Components/dxList/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchEnabled') property to display the search panel. The [searchExpr](/api-reference/10%20UI%20Components/SearchBoxMixin/1%20Configuration/searchExpr.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchExpr') property specifies which data fields should be searched. Assign an _array_ of field names to it if you need to search several fields.

---
##### jQuery

    <!--JavaScript-->
    const listData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#listContainer").dxList({
            dataSource: listData,
            searchEnabled: true,
            searchExpr: ['country', 'capital'],
            itemTemplate: function(data) {
                return $("<div>").text(data.capital + " (" + data.country + ")");
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-list
        [dataSource]="listData"
        [searchEnabled]="true"
        [searchExpr]="['country', 'capital']"
        itemTemplate="listItem">
        <div *dxTemplate="let item of 'listItem'">
            <div>{{item.capital}} ({{item.country}})</div>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        listData = [
            { id: 1, country: "Afghanistan", capital: "Kabul" },
            { id: 2, country: "Albania", capital: "Tirana" },
            // ...
        ];
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
            :data-source="listData"
            :search-enabled="true"
            :search-expr="['country', 'capital']"
            item-template="list-item">
            <template #list-item="{ data }">
                <div>{{ data.capital }} ({{ data.country }})</div>
            </template>
        </DxList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList from 'devextreme-vue/list';

    const listData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // ...
    ];

    export default {
        components: {
            DxList
        },
        data() {
            return {
                listData
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import List from 'devextreme-react/list';

    const listData = [
        { id: 1, country: "Afghanistan", capital: "Kabul" },
        { id: 2, country: "Albania", capital: "Tirana" },
        // ...
    ];

    const ListItem = (data) => {
        return (
            <div>{ data.capital } ({ data.country })</div>
        );
    };

    export default function App() {
        return (
            <List
                dataSource={listData}
                itemRender={ListItem}
                searchEnabled={true}
                searchExpr={['country', 'capital']}
            />
        );
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListWithSearchBar/"
}

When a user types a string in the input field, the List suggests all items that _contain_ this string. Assign *'startswith'* to the [searchMode](/api-reference/10%20UI%20Components/SearchBoxMixin/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchMode') property if you want the List to suggest only those items that _start_ with the input string.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            searchMode: 'startswith'
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        searchMode="startswith">
    </dx-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList ...
            search-mode="startswith">
        </DxList>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    export default function App() {
        return (
            <List ...
                searchMode="startswith"
            />
        );
    }

---

You can customize the search panel by specifying the [searchEditorOptions](/api-reference/10%20UI%20Components/SearchBoxMixin/1%20Configuration/searchEditorOptions.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchEditorOptions') property. The following code changes the panel's default width and placeholder:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            searchEditorOptions: {
                placeholder: "Type search value here...",
                width: 300
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ... >
        <dxo-search-editor-options
            placeholder="Type search value here..."
            [width]="300">
        </dxo-search-editor-options>
    </dx-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList ... >
            <DxSearchEditorOptions
                placeholder="Type search value here..."
                :width="300"
            />
        </DxList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList, {
        DxSearchEditorOptions
    } from 'devextreme-vue/list';

    export default {
        components: {
            DxList,
            DxSearchEditorOptions
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import List, {
        SearchEditorOptions
    } from 'devextreme-react/list';

    export default function App() {
        return (
            <List ... >
                <SearchEditorOptions
                    placeholder="Type search value here..."
                    width={300}
                />
            </List>
        );
    }

---

#####See Also#####
- [Grouping](/concepts/05%20UI%20Components/List/14%20Grouping/01%20In%20the%20Data%20Source.md '/Documentation/Guide/UI_Components/List/Grouping/')


