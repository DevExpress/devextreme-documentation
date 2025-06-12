The CardView includes the following UI elements used to search and filter data:

- [headerFilter](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/headerFilter/)
- [filterPanel](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/filterPanel/) with [filterBuilder](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#filterBuilder)
- [searchPanel](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/searchPanel/)

In this tutorial, the header filter and the search panel are displayed:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#card-view").dxCardView({
            // ...
            headerFilter: {
                visible: true
            },
            searchPanel: {
                visible: true
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ... >
        <dxo-card-view-header-filter [visible]="true"></dxo-card-view-header-filter>
        <dxo-card-view-search-panel [visible]="true"></dxo-card-view-search-panel>
    </dx-card-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ... >
            <DxHeaderFilter :visible="true" />
            <DxSearchPanel :visible="true" />
        </DxCardView>
    </template>

    <script setup lang="ts">
    // ...
    import DxCardView, { DxHeaderFilter, DxSearchPanel } from 'devextreme-vue/card-view';
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import CardView, { HeaderFilter, SearchPanel } from 'devextreme-react/card-view';
    import { employees } from './data.ts';

    function App() {
        return (
            <CardView ... >
                <HeaderFilter visible={true} />
                <SearchPanel visible={true} />
            </CardView>
        );
    }

    export default App;

---