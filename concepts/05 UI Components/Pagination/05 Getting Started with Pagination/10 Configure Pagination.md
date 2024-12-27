This section of the tutorial details the steps for basic Pagination setup.

First, assign a total number of items to the [itemCount](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#itemCount) property. Pagination will not function properly without this setting.

Next, specify the [pageIndex](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#pageIndex) property to define the initial page to display. This tutorial sets **pageIndex** to 3 (the default value is 1).

The [allowedPageSizes](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#allowedPageSizes) option is preset to `[5, 10]`. These are available page sizes. You can modify this list as needed. Include `'all'` to show every item on one page. In this tutorial, the default values are used.

Finally, select an initial number of items to display per page from your allowed sizes. Assign the number to the [pageSize](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#pageSize) property.

The following code snippet demonstrates how to apply the aforementioned settings:

---
##### jQuery

    <!-- tab: index.js -->
    const total = 100;
    $(() => {
        const pagination = $('#pagination')
            .dxPagination({
                showInfo: true,
                showNavigationButtons: true,
                itemCount: total,
                pageIndex: 3,
                pageSize: 5,
            })
        .dxPagination('instance');
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pagination
        [showInfo]="true"
        [showNavigationButtons]="true"
        [itemCount]="total"
        [pageIndex]="pageIndex"
        [pageSize]="pageSize"
    >
    </dx-pagination>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        total = 100;
        pageIndex = 3;
        pageSize = 5;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPagination
            :show-info="true"
            :show-navigation-buttons="true"
            v-model:page-index="pageIndex"
            v-model:page-size="pageSize"
            :item-count="total"
        />
    </template>

    <script setup lang="ts">
    // ...
    import { ref } from 'vue';

    const total = 100;
    const pageSize = ref(5);
    const pageIndex = ref(3);
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useState } from 'react';
    // ...
    const total = 100;

    function App(): JSX.Element {
        const [pageSize, setPageSize] = useState<number>(5);
        const [pageIndex, setPageIndex] = useState<number>(3);
        return (
            <Pagination
                showInfo={true}
                showNavigationButtons={true}
                pageIndex={pageIndex}
                pageSize={pageSize}
                itemCount={total}
            />
        );
    }

    export default App;

---