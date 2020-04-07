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

To convert unsupported formats, return the formatted string from the [customizeText](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#customizeText) callback as follows:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gridContainer").dxDataGrid({
            // ...
            columns:[{
                // ...
                format: (value) => {
                    return value + " USD";
                },   
                customizeText: (options) => {
                    return options.valueText;
                }
            }],
            export: {
                enabled: true
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column ...
            [format]="formatValue" 
            [customizeText]="customizeText">
        </dxi-column>
        <dxo-export [enabled]="true">
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
        formatValue(value) {
            return value + " USD";
        }

        customizeText(options) {
            return options.valueText;
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
            <DxColumn ...
                :format="formatValue"
                :customize-text="customizeText"
            />
            <DxExport
                :enabled="true"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxExport,
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxExport,
            DxColumn
        },
        methods: {
            formatValue(value) {
                return value + " USD";
            },   

            customizeText(options) {
                return options.valueText;
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
        Export,
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Column ...
                        format={this.formatValue}
                        customizeText={this.customizeText} 
                    />
                    <Export 
                        enabled={true}
                    />
                </DataGrid>
            );
        }

        formatValue(value) {
            return value + " USD";
        }   

        customizeText(options) {
            return options.valueText;
        }
    }
    export default App;

---

<!-- import * from "api-reference\_hidden\GridBaseColumn\format.md" -->