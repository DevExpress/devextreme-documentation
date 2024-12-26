info about:
- itemCount
- pageIndex
- pageSize
- allowedPageSizes
- showInfo
- showNavigationButtons

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