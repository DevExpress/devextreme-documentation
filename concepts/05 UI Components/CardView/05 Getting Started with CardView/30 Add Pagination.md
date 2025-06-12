To add pagination to CardView, configure the following settings:

- [paging](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/paging/) - enables paging
- [pager](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#pager) - activates UI elements for pagination

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#card-view").dxCardView({
            // ...
            paging: {
                pageSize: 3,
            },
            pager: {
                showInfo: true,
                showNavigationButtons: true,
                showPageSizeSelector: true
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ... >
        <dxo-card-view-paging [pageSize]="3"></dxo-card-view-paging>
        <dxo-card-view-pager
            [showInfo]="true"
            [showNavigationButtons]="true"
            [showPageSizeSelector]="true"
        ></dxo-card-view-pager>
    </dx-card-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ... >
            <DxPaging :page-size="3" />
            <DxPager
                :show-info="true"
                :show-navigation-buttons="true"
                :show-page-size-selector="true"
            />
        </DxCardView>
    </template>

    <script setup lang="ts">
    // ...
    import DxCardView, { DxPaging, DxPager } from 'devextreme-vue/card-view';
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import CardView, { Paging, Pager } from 'devextreme-react/card-view';
    import { employees } from './data.ts';

    function App() {
        return (
            <CardView ... >
                <Paging
                    pageSize={3}
                />
                <Pager
                    showInfo={true}
                    showNavigationButtons={true}
                    showPageSizeSelector={true}
                />
            </CardView>
        );
    }

    export default App;

---