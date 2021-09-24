<!-- %fullDescription% -->

When being [exported to Excel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/'), the specified format is converted to an Excel format as follows:

- **Numeric**   
Converted to the Number format, except for *"largeNumber"*, which is exported without formatting.

- **Currency**  
Converted to the Currency format.

- **Date-Time**  
Converted to the Date or Time format, depending on the cell value.      
Exceptions: *"quarter"* and *"quarterAndYear"* are exported as Short Date; *"minute"* and *"millisecond"* are exported as Long Time.

- **Function**  
Cannot be converted automatically. Assign this function to the [customizeText](/api-reference/_hidden/GridBaseColumn/customizeText.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#customizeText') property instead of the **format** property.   

- [Custom format string](/concepts/Common/Value%20Formatting/10%20Format%20Widget%20Values/20%20Custom%20Format%20String.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String')   
Cannot be converted, the cell value is exported without formatting. To export this format, return the formatted string from the [customizeText](/api-reference/_hidden/GridBaseColumn/customizeText.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#customizeText') callback as follows:

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#gridContainer").dxDataGrid({
                // ...
                columns:[{
                    // ...
                    format: "0.##",   
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
                format="0.##" 
                [customizeText]="customizeText">
            </dxi-column>
            <dxo-export [enabled]="true">
            </dxo-export>
        </dx-data-grid>

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';

        #include angular-component-decorator
        export class AppComponent {
            customizeText(options) {
                return options.valueText;
            }
        }

        <!-- tab: app.module.ts -->
        #include angular-app-module-ts

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxDataGrid ... >
                <DxColumn ...
                    format="0.##"
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
                            format="0.##"
                            customizeText={this.customizeText} 
                        />
                        <Export 
                            enabled={true}
                        />
                    </DataGrid>
                );
            }
            customizeText(options) {
                return options.valueText;
            }
        }
        export default App;

    ---

A column's default format depends on the data type, which is detected automatically. If you find that a format is exported incorrectly, you will need to explicitly set the column's [dataType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType).

<!-- import * from "api-reference\_hidden\GridBaseColumn\format.md" -->
