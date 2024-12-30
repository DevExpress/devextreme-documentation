This tutorial step guides you through the basic Pagination setup.

Specify the following settings:

* [itemCount](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#itemCount) sets the total number of items. Pagination does not function properly without this setting.
* [pageIndex](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#pageIndex) sets the initial page to display. This tutorial sets **pageIndex** to 3 (the default value is 1).
* [allowedPageSizes](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#allowedPageSizes) specifies page sizes available to users. Modify this list as needed. Include `'all'` to allow users to display all items on one page. This tutorial uses the default value: `[5, 10]`.
* [pageSize](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#pageSize) specifies the initial page size.

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