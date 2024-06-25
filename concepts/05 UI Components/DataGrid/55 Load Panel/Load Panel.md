The load panel is displayed while the UI component loads data. It consists of a loading indicator and text, both placed on a pane.

![DevExtreme HTML5/JavaScript DataGrid UI component - Load Panel](/images/DataGrid/visual_elements/load_panel.png)

The load panel is shown only for remote data sources by default. To show it regardless of the data source type, assign **true** to the **loadPanel**.[enabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/loadPanel/enabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/loadPanel/#enabled') property. Setting the same property to **false** disables the load panel completely.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            loadPanel: {
                enabled: true
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-load-panel
            [enabled]="true">
        </dxo-load-panel>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxLoadPanel :enabled="true" />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxLoadPanel
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxLoadPanel
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        LoadPanel
    } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            <DataGrid ... >
                <LoadPanel enabled />
            </DataGrid>
        );
    }
    
---

You can also control the load panel programmatically using the [beginCustomLoading(messageText)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/beginCustomLoading(messageText).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#beginCustomLoadingmessageText') and [endCustomLoading()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/endCustomLoading().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#endCustomLoading') methods.

---
##### jQuery

    <!--JavaScript-->var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.beginCustomLoading();
    // ...
    dataGrid.endCustomLoading();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        performLongOperation() {
            this.dataGrid.instance.beginCustomLoading();
            // ...
            this.dataGrid.instance.endCustomLoading();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ref="dataGridRefKey">
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        // ...
    } from 'devextreme-vue/data-grid';

    const dataGridRefKey = "my-data-grid";

    export default {
        components: {
            DxDataGrid,
            // ...
        },
        data: function() {
            return {
                dataGridRefKey
            };
        },
        methods: {
            performLongOperation: function() {
                this.dataGrid.beginCustomLoading();
                // ...
                this.dataGrid.endCustomLoading();
            }
        },
        computed: {
            dataGrid: function() {
                return this.$refs[dataGridRefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useRef, useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        // ...
    } from 'devextreme-react/data-grid';

    export default function App() {
        const dataGrid = useRef(null);
        const performLongOperation = useCallback(() => {
            dataGrid.current.instance().beginCustomLoading();
            // ...
            dataGrid.current.instance().endCustomLoading();
        }, []);

        return (
            <DataGrid ref="dataGrid">
                {/* ... */}
            </DataGrid>
        );
    }
    
---

Since the load panel is a DevExtreme [LoadPanel](/concepts/05%20UI%20Components/LoadPanel/00%20Overview.md '/Documentation/Guide/UI_Components/LoadPanel/Overview/') UI component, you can declare any [properties of this UI component](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/') in the DataGrid's [loadPanel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/loadPanel '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/loadPanel/') object. For example, you can change the panel's size with the [height](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#height') and [width](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#width') properties, or employ another loading indicator using the [indicatorSrc](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/indicatorSrc.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#indicatorSrc') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            loadPanel: {
                height: 100,
                width: 250,
                indicatorSrc: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-load-panel
            [height]="100"
            [width]="250"
            indicatorSrc="https://js.devexpress.com/Content/data/loadingIcons/rolling.svg">
        </dxo-load-panel>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxLoadPanel
                :height="100"
                :width="250"
                indicator-src="https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxLoadPanel
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxLoadPanel
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        LoadPanel
    } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            <DataGrid ... >
                <LoadPanel
                    height={100}
                    width={250}
                    indicatorSrc="https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
                />
            </DataGrid>
        );
    }
    
---

#####See Also#####
- [LoadPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Load_Panel/Overview)
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/AjaxRequest)
