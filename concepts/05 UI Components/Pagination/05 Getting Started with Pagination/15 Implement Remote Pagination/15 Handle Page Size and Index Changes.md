The render function is called on every page index/size [change](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/onOptionChanged.md '/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#onOptionChanged'):

---
##### jQuery

    <!-- tab: index.js -->
    // ...

    $(() => {
        const pagination = $('#pagination')
            .dxPagination({
                // ...
                onOptionChanged: (e) => {
                    if (e.name === 'pageSize' || e.name === 'pageIndex') {
                        const pageIndex = pagination.option('pageIndex');
                        const pageSize = pagination.option('pageSize');
                        renderCards(pageSize, pageIndex);
                    }
                },
            })
        .dxPagination('instance');
        // ...
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pagination ... 
        (pageIndexChange)="onPageIndexChange($event)"
        (pageSizeChange)="onPageSizeChange($event)"
    >
    </dx-pagination>
    <!-- ... -->

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        onPageIndexChange(val: number): void {
            this.pageIndex = val;
            void this.fetchColorsForPage();
        }

        onPageSizeChange(val: number): void {
            this.pageSize = val;
            void this.fetchColorsForPage();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPagination ... 
            @update:page-index="onPageIndexChange"
            @update:page-size="onPageSizeChange"
        />
        <!-- ... -->
    </template>

    <script setup lang="ts">
    // ...
    const onPageIndexChange = (value: number) => {
        pageIndex.value = value;
        fetchColorsForPage();
    };

    const onPageSizeChange = (value: number) => {
        pageSize.value = value;
        fetchColorsForPage();
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useState, useRef, useEffect, useCallback } from 'react';
    // ...

    function App(): JSX.Element {
        // ...
         const onPageIndexChange = useCallback((value: number) => {
            setPageIndex(value);
        }, []);

        const onPageSizeChange = useCallback((value: number) => {
            setPageSize(value);
        }, []);

        return (
            <Pagination ... 
                onPageIndexChange={onPageIndexChange}
                onPageSizeChange={onPageSizeChange}
            />
            <!-- ... -->
        );
    }

    export default App;

---