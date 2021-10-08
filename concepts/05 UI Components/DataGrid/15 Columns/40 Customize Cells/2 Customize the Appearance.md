Cell appearance is customized using a column's [cellTemplate](/api-reference/_hidden/dxDataGridColumn/cellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate'). In Angular and Vue, you can declare the template in the markup. In React, you can use a rendering function (shown in the code below) or component:

---
##### Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="Title" cellTemplate="cellTemplate"></dxi-column>
        <div *dxTemplate="let cell of 'cellTemplate'">
            <div style="color:blue">{{cell.text}}</div>
        </div>
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
            <DxColumn
                data-field="Title"
                cell-template="grid-cell"
            />
            <template #grid-cell="{ data }">
                <div style="color:blue">{{ data.cell.text }}</div>
            </template>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    const renderGridCell = (data) => {
        return <div style={{ color: 'blue' }}>{data.cell.text}</div>;
    }

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Column
                        dataField="Title"
                        cellRender={renderGridCell}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for cells. To apply this markup, use the **cellTemplate** function as shown in the following code:

---
##### jQuery

    <!--JavaScript-->
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

---

While **cellTemplate** customizes data cells only, the [onCellPrepared](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onCellPrepared.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onCellPrepared') function can customize any cell. Unlike **cellTemplate**, this function does customizations after a cell is created, so you cannot use it to change the cell value. Check the [rowType](/api-reference/10%20UI%20Components/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Row/#rowType') field of the function's argument to detect the UI element that owns the cell.

---
##### jQuery

    <!--JavaScript-->
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

    <!--CSS-->
    .adaptiveRowStyle { 
        background-color: #cce6ff;
        font-size: 12pt
    }

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onCellPrepared (e) {
            if (e.rowType == "detailAdaptive") {
                e.cellElement.classList.add("adaptiveRowStyle");
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid
        (onCellPrepared)="onCellPrepared($event)">
    </dx-data-grid>

    <!--CSS-->
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
    import 'devextreme/dist/css/dx.common.css';
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
    <style scoped>
        .adaptiveRowStyle { 
            background-color: #cce6ff;
            font-size: 12pt
        }
    </style>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);

            // Uncomment the line below if the function should be executed in the component's context
            // this.onCellPrepared = this.onCellPrepared.bind(this);
        }

        onCellPrepared(e) {
            if (e.rowType == 'detailAdaptive') {
                e.cellElement.classList.add('adaptiveRowStyle');
            }
        }

        render() {
            return (
                <DataGrid ...
                    onCellPrepared={this.onCellPrepared}>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnTemplate/"
}

#####See Also#####
- [Customize Column Headers](/concepts/05%20UI%20Components/DataGrid/15%20Columns/15%20Customize%20Column%20Headers.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Customize_Column_Headers/')
