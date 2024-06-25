---
id: dxDataGrid.totalCount()
---
---
##### shortDescription
Gets the total row count.

##### return: Number
The total row count.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        const dataSource = new DevExpress.data.DataSource({
            store: customers,
            paginate: true
        });
        
        $('#gridContainer').dxDataGrid({
            dataSource,
            paging: {
                enabled: true
            },
            // ...
            onContentReady (e) {
                const totalCount = e.component.totalCount();
                // ...
            }
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import DataSource from "devextreme/data/data_source";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        totalCount: Number;
        dataSource: DataSource;
        constructor () {
            this.dataSource = new DataSource({
                store: customers,
                paginate: true
            });
        }

        getTotalCount(e) {
            this.totalCount = e.component.totalCount();
            // ...
        }
    }

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        [dataSource]="dataSource"
        (onContentReady)="getTotalCount($event)"
    >
        <dxo-paging [enabled]="true"> </dxo-paging>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            :data-source="dataSource"
            @content-ready="getTotalCount"
        >
            <DxPaging :enabled="true" />
        </DxDataGrid>
    </template>

    <script>
    import DxDataGrid, { DxPaging } from 'devextreme-vue/data-grid';
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        store: customers,
        paginate: true
    });

    export default {
        components: {
            DxDataGrid,
            DxPaging
        },
        data() {
            return {
                dataSource,
                totalCount
            }
        },
        methods: {
            getTotalCount(e) {
                this.totalCount = e.component.totalCount();
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Paging } from 'devextreme-react/data-grid';
    import DataSource from 'devextreme/data/data_source';
    
    const dataSource = new DataSource({
        store: customers,
        paginate: true
    });

    const getTotalCount = (e) => {
        const totalCount = e.component.totalCount();
        // ...
    }

    function App() {
        return (
            <DataGrid ...
                dataSource={dataSource}
                onContentReady={getTotalCount}
            >
                <Paging enabled={true} />
            </DataGrid>
        );
    }
    export default App;

---

Please review the following notes:

- If any filter is applied, **totalCount()** returns the count of records after [filtering](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching '/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/').

- If paging is disabled in the DataGrid ([paging](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/paging/').[enabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging/enabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/paging/#enabled') is **false**) or in the underlying [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') ([paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') is **false**), **totalCount()** returns -1. To get the total record count in this case, you can use the following code:

    ---
    ##### jQuery

        <!-- tab: index.js -->
        const dataGrid = $("#dataGridContainer").dxDataGrid("instance");
        const dataSource = dataGrid.getDataSource();
        const recordCount = dataSource.items().length;

    ##### Angular

        <!-- tab: app.component.ts -->
        import { Component, ViewChild } from '@angular/core';
        import { DxDataGridComponent } from 'devextreme-angular';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            @ViewChild('dataGridRef', { static: false }) dataGrid: DxDataGridComponent;
            // Prior to Angular 8
            // @ViewChild('dataGridRef') dataGrid: DxDataGridComponent;
            getRecordCount() {
                const dataSource = this.dataGrid.instance.getDataSource();
                return dataSource.items().length;
            }
        }

        <!-- tab: app.component.html -->
        <dx-data-grid ...
            #dataGridRef
        ></dx-data-grid>

        <!-- tab: app.module.ts -->
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';

        import { DxDataGridModule } from 'devextreme-angular';

        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                DxDataGridModule
            ],
            providers: [ ],
            bootstrap: [AppComponent]
        })
        export class AppModule { }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxDataGrid ...
                :ref="dataGridRef">
            </DxDataGrid>
        </template>

        <script>
        import 'devextreme/dist/css/dx.light.css';

        import DxDataGrid from 'devextreme-vue/data-grid';

        const dataGridRef = 'dataGrid';

        export default {
            components: {
                DxDataGrid
            },
            data() {
                return {
                    dataGridRef
                }
            },
            computed: {
                dataGrid: function() {
                    return this.$refs[dataGridRef].instance;
                }
            },
            methods: {
                getRecordCount() {
                    const dataSource = this.dataGrid.getDataSource();
                    return dataSource.items().length;
                }
            }
        }
        </script>
    
    ##### React
    
        <!-- tab: App.js -->
        import React, { useRef, useCallback } from 'react';
        import 'devextreme/dist/css/dx.light.css';
    
        import DataGrid from 'devextreme-react/data-grid';
    
        export default function App() {
            const dataGrid = useRef(null);
            const getRecordCount = useCallback(() => {
                const dataSource = dataGrid.current.instance().getDataSource();
                return dataSource.items().length;
            }, []);
            return (
                <DataGrid ref={dataGrid}>
                    {/* ... */}
                </DataGrid>
            );
        }

    ---

#####See Also#####
#include common-link-callmethods