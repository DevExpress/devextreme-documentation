Use a column's [cellTemplate](/api-reference/_hidden/dxDataGridColumn/cellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate') to customize cell appearance. If a customization is not immediately applied, use the [repaint()](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#repaint) method to repaint DataGrid cells.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnTemplate/"
}

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Title",
                cellTemplate: function(element, info) {
                    element.append("<div>" + info.text + "</div>")
                        .css("color", "blue");
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column dataField="Title" cellTemplate="cellTemplate"></dxi-column>
        <div *dxTemplate="let data of 'cellTemplate'">
            <div style="color:blue">{{data.text}}</div>
        </div>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="Title"
                cell-template="grid-cell"
            />
            <template #grid-cell="{ data }">
                <div style="color:blue">{{ data.text }}</div>
            </template>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    const renderGridCell = (data) => {
        return <div style={{ color: 'blue' }}>{data.text}</div>;
    }

    function App() {
        return (
            <DataGrid ... >
                <Column
                    dataField="Title"
                    cellRender={renderGridCell}
                />
            </DataGrid>
        );
    }
    export default App;

---

While **cellTemplate** customizes data cells only, the [onCellPrepared](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onCellPrepared.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onCellPrepared') function can customize any cell. Unlike **cellTemplate**, this function does customizations after a cell is created, so you cannot use it to change the cell value. Check the [rowType](/api-reference/10%20UI%20Components/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Row/#rowType') field of the function's argument to detect the UI element that owns the cell.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onCellPrepared: function(e) {
                if (e.rowType == "detailAdaptive") {
                    e.cellElement.addClass("adaptiveRowStyle"); 
                }
            }
        });
    });

    <!-- tab: index.css -->
    .adaptiveRowStyle { 
        background-color: #cce6ff;
        font-size: 12pt
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid
        (onCellPrepared)="onCellPrepared($event)">
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        onCellPrepared (e) {
            if (e.rowType == "detailAdaptive") {
                e.cellElement.classList.add("adaptiveRowStyle");
            }
        }
    }

    <!-- tab: app.component.css -->
    .adaptiveRowStyle { 
        background-color: #cce6ff;
        font-size: 12pt
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @cell-prepared="onCellPrepared">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            onCellPrepared(e) {
                if (e.rowType == 'detailAdaptive') {
                    e.cellElement.classList.add('adaptiveRowStyle');
                }
            }
        }
    }
    </script>
    <style>
        .adaptiveRowStyle { 
            background-color: #cce6ff;
            font-size: 12pt
        }
    </style>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    const cellPrepared = (e) => {
        if (e.rowType == 'detailAdaptive') {
            e.cellElement.classList.add('adaptiveRowStyle');
        }
    }

    function App() {
        return (
            <DataGrid ...
                onCellPrepared={cellPrepared}>
            </DataGrid>
        );
    }

    export default App;
    
---

You can also use the [cssClass](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cssClass) property to specify a CSS class for a column. 

#####See Also#####
- [Customize Column Headers](/concepts/05%20UI%20Components/DataGrid/15%20Columns/15%20Customize%20Column%20Headers.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Customize_Column_Headers/')
