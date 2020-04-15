Since v20.1, the **DataGrid** raises only the [exporting](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/exporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#exporting') event. Use its [onExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) handler to specify the **DevExpress**.**excelExporter**.[exportDataGrid(options)](/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions) method before the default export is activated. Refer to the [export](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/) topic for details and further configuration.


---
##### jQuery

    <!--JavaScript-->
    $('#gridContainer').dxDataGrid({
        export: {
            enabled: true
        },
        onExporting: function(e) { 
            // ...
            DevExpress.excelExporter.exportDataGrid({
                // ... 
            }); 
            e.cancel = true; 
        }
    });

##### Angular   

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        (onExporting)="onExporting($event)">
        <dxo-export [enabled]="true"></dxo-export>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import ExcelJS from 'exceljs';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        onExporting(e) {
            // ...
            exportDataGrid({
                // ...
            });
            e.cancel = true; 
        }
    }

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
            @exporting="onExporting">
            <DxExport
                :enabled="true"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxExport } from 'devextreme-vue/data-grid';
    import { exportDataGrid } from 'devextreme/excel_exporter';
    import ExcelJS from 'exceljs';

    export default {
        components: {
            DxDataGrid,
            DxExport
        },
        methods: {
            onExporting(e) {
                // ...
                exportDataGrid({
                    // ...
                });
                e.cancel = true;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, { Export } from 'devextreme-react/data-grid';
    import ExcelJS from 'exceljs';
    import { exportDataGrid } from 'devextreme/excel_exporter';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ...
                    onExporting={this.onExporting}>
                    <Export enabled={true} />
                </DataGrid>
            );
        }

        onExporting(e) {
            // ...
            exportDataGrid({
                // ...
            });
            e.cancel = true;
        }
    }
    export default App;

--- 
Otherwise (or if you need several handlers for a single event), subscribe to the export-related event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var exportingHandler1 = function (e) {
        // First handler of the "exported" event
    };

    var exportingHandler2 = function (e) {
        // Second handler of the "exported" event
    };

    $("#dataGridContainer").dxDataGrid("instance")
        .on("exporting", exportingHandler1)
        .on("exporting", exportingHandler2);

#####See Also#####
#include common-link-handleevents
