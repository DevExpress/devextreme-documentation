---
id: PivotGridDataSource.Options.fields.headerFilter.search
type: HeaderFilterSearchConfig
inheritsType: HeaderFilterSearchConfig
---
---
##### shortDescription
Configures the header filter's search.

---
---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                headerFilter: {
                    // ...
                    search: {
                        editorOptions: { 
                            placeholder: 'Search value',
                            mode: 'text' 
                        },
                        enabled: true,
                        timeout: 600,
                        mode: 'equals'
                    }
                }
            }]
        });

        $("#pivotGridContainer").dxPivotGrid({
            dataSource: pivotGridDataSource
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pivot-grid
        [dataSource]="pivotGridDataSource">
    </dx-pivot-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core'; 
    
    @Component({ 
        selector: 'app-root', 
        templateUrl: './app.component.html', 
        styleUrls: ['./app.component.css'] 
    })

    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                fields: [{
                    // ...
                    headerFilter: {
                        // ...
                        search: {
                            editorOptions: { 
                                placeholder: 'Search value',
                                mode: 'text' 
                            },
                            enabled: true,
                            timeout: 600,
                            mode: 'equals'
                        }
                    }
                }]
            });
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import { DxPivotGridModule } from "devextreme-angular";
  
    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxPivotGridModule
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 

    export class AppModule { }  

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxPivotGrid
            :data-source="pivotGridDataSource"
        />
    </template>
    
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-vue/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            // ...
            headerFilter: {
                // ...
                search: {
                    editorOptions: { 
                        placeholder: 'Search value',
                        mode: 'text' 
                    },
                    enabled: true,
                    timeout: 600,
                    mode: 'equals'
                }
            }
        }]
    });

    export default {
        components: {
            DxPivotGrid
        },
        data() {
            return {
                pivotGridDataSource
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxPivotGrid
            :data-source="pivotGridDataSource"
        />
    </template>
    
    <script setup>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-vue/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            // ...
            headerFilter: {
                // ...
                search: {
                    editorOptions: { 
                        placeholder: 'Search value',
                        mode: 'text' 
                    },
                    enabled: true,
                    timeout: 600,
                    mode: 'equals'
                }
            }
        }]
    });
    </script>

    <!-- tab: App.js -->
    import React from 'react';  
    import 'devextreme/dist/css/dx.light.css'; 

    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-react/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            // ...
            headerFilter: {
                // ...
                search: {
                    editorOptions: { 
                        placeholder: 'Search value',
                        mode: 'text' 
                    },
                    enabled: true,
                    timeout: 600,
                    mode: 'equals'
                }
            }
        }]
    });

    export default function App() { 
        return (
            <PivotGrid
                dataSource={pivotGridDataSource}
            />
        );
    } 

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/RemoteVirtualScrolling/"
}
