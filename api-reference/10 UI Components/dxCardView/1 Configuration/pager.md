---
id: dxCardView.Options.pager
type: Pager
---
---
##### shortDescription
Configures the pager.

---
The pager is an element that allows users to navigate through pages and change their size at runtime. The pager consists of the page navigator and several optional elements: the page size selector, navigation buttons, and page information.

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