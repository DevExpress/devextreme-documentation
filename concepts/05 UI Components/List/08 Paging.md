---
tags: list, paging, paginate, pageSize, pageLoadMode
---
Paging properties are set in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'): [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') enables paging; [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') specifies how many data items a page should contain.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                store: /* A store is configured here */,
                paginate: true,
                pageSize: 10
            }),
            // ...
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        listDataSource = new DataSource({
            store: /* A store is configured here */,
            paginate: true,
            pageSize: 10
        });
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-list ...
        [dataSource]="listDataSource">
    </dx-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList
            :data-source="listDataSource"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxList from 'devextreme-vue/list';
    import DataSource from 'devextreme/data/data_source';

    const listDataSource = new DataSource({
        store: /* A store is configured here */,
        paginate: true,
        pageSize: 10
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

    const listDataSource = new DataSource({
        store: /* A store is configured here */,
        paginate: true,
        pageSize: 10
    });

    export default function App() {
        return (
            <List
                dataSource={listDataSource}
            />
        );
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().List()
        .ID("list")
        .DataSource(d => d
            // Data access is configured here
        )
        .DataSourceOptions(o => o
            .Paginate(true)
            .PageSize(10)
        )
    )

---

The next page can be rendered when a user scrolls the List down to the bottom, or after a user clicks the **More** button. Set the [pageLoadMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/pageLoadMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#pageLoadMode') property to specify the mode:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            // ...
            pageLoadMode: "scrollBottom" // or "nextButton"
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        pageLoadMode="scrollBottom"> <!-- or "nextButton" -->
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
        <DxList ...
            page-load-mode="scrollBottom" /> <!-- or "nextButton" -->
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
                pageLoadMode="scrollBottom" /> {/* or "nextButton" */}
        );
    }

---

[note] The List renders as many pages as it can fit into its [height](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#height') when the UI component is displayed for the first time and the **pageLoadMode** is set to *"scrollBottom"*.

[Local arrays](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/10%20Local%20Array.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/') and remote datasets loaded using the **CustomStore** in [raw mode](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/3%20Custom%20Sources/1%20Load%20Data%20in%20Raw%20Mode.md '/Documentation/Guide/Data_Binding/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode') are *only rendered* page by page. In other cases, remote datasets are *also loaded* page by page if the server can partition data.

#####See Also#####
- **Data Binding**: [Web API, PHP, MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/') | [OData Service](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/40%20OData.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/') | [Custom Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/') | [JavaScript Array](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/10%20Local%20Array.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/')
- [List - Localization](/concepts/05%20UI%20Components/List/50%20Localization.md '/Documentation/Guide/UI_Components/List/Localization/')


