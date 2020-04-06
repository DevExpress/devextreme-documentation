<!-- %fullDescription% -->

When being [exported to Excel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/), the specified format is converted to an Excel format as follows:

- **Numeric**   
Converted to the *"Number"* format, except for *"largeNumber"*, which is exported without formatting.
- **Currency**  
Converted the *"Currency"* format.
- **Date-Time**  
Converted to the *"Date"* or *"Time"* formats depending on the cell value, except for the *"quarter"* and *"quarterAndYear"* types that are exported as *"short date"* and the *"minute"* and *"millisecond"* formats that are exported as *"long time"*.
- **Function**  
Cannot be converted, the cell value is exported without formatting.
- [Custom format string](/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String)   
Cannot be converted, the cell value is exported without formatting. 

To convert unsupported formats, use the [customizeExcelCell](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#customizeExcelCell) function as follows:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gridContainer").dxDataGrid({
            // ...
            export: {
                enabled: true,
                customizeExcelCell: (options) => {
                    // ...
                    options.value = options.value + "$";
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxo-export 
            [enabled]="true"
            [customizeExcelCell]="customizeExcelCell">
        </dxo-export>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        customizeExcelCell(options) {
            // ...
            options.value = options.value + "$";
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
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxExport
                :enabled="true"
                :customize-excel-cell="customizeExcelCell"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxExport
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxExport
        },
        methods: {
            customizeExcelCell(options) {
                // ...
                options.value = options.value + "$";
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Export
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Export 
                        enabled={true}
                        customizeExcelCell={this.customizeExcelCell} 
                    />
                </DataGrid>
            );
        }   

        customizeExcelCell(options) {
            // ...
            options.value = options.value + "$";
        }
    }
    export default App;

---

<!-- import * from "api-reference\_hidden\GridBaseColumn\format.md" -->