---
id: dxDataGridColumnButton.template
type: template
---
---
##### shortDescription
Specifies a custom button template.

##### param(cellElement): DxElement
The container of the cell that should display the button. It is an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="http://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

##### param(cellInfo): Object
The cell's properties.

##### field(cellInfo.column): dxDataGridColumn
The column's properties.

##### field(cellInfo.columnIndex): Number
The index of the cell's column. <br/> Refer to [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(cellInfo.component): dxDataGrid
The UI component's instance.

##### field(cellInfo.data): Object
The data of the cell's row.

##### field(cellInfo.key): any
The row's key.

##### field(cellInfo.row): dxDataGridRowObject
The row's properties.

##### field(cellInfo.rowIndex): Number
The index of the cell's row. Begins with 0 on each page. Group rows are included. <br/> Refer to [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(cellInfo.rowType): String
The row's [type](/api-reference/10%20UI%20Components/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Row/#rowType').

##### return: String | Element | jQuery
A template name or container.

---
---
##### jQuery  

    <!-- tab: index.js -->
    $(function () {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [
                // ...
                {
                    type: "buttons",
                    buttons: [{
                        // ...
                        template: function(data) {
                            return $("<div>").addClass("dx-icon-email").css("display", "inline-block");
                        },
                    }]
                }
            ]
        });
    });

##### Angular  

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column type="buttons">
            <dxi-button
                // ...
                template="buttonTemplate"
            ></dxi-button>
        </dxi-column>

        <div *dxTemplate="let data of 'buttonTemplate'" style="display:inline-block">
            <div class="dx-icon-email"></div>
        </div>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {}
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn type="buttons">
                <DxButton
                    // ...
                    template="buttonTemplate"
                />
            </DxColumn>
            <template #buttonTemplate="{ data }">
                <div class="dx-icon-email" style="display:inline-block"></div>
            </template>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import Dx{WidgetName}, {
        DxColumn,
        DxButton
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxButton
        },
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn type="buttons">
                <DxButton
                    // ...
                    template="buttonTemplate"
                />
            </DxColumn>
            <template #buttonTemplate="{ data }">
                <div class="dx-icon-email" style="display:inline-block"></div>
            </template>
        </Dx{WidgetName}>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';
    import Dx{WidgetName}, {
        DxColumn,
        DxButton
    } from 'devextreme-vue/{widget-name}';
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column,
        Button
    } from 'devextreme-react/{widget-name}';

    const buttonRender = (data) => {
        return <div className="dx-icon-email" style="display: inline-block"></div>;
    }

    export default function App() {
        return (
            <{WidgetName} ... >
                <Column type="buttons">
                    <Button
                    // ...
                        render={buttonRender}
                    />
                </Column>
            </{WidgetName}>
        );
    }
    
---

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')