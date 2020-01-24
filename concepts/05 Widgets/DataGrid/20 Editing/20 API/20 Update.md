The [cellValue(rowIndex, visibleColumnIndex, value)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cellValue(rowIndex_visibleColumnIndex_value).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_visibleColumnIndex_value') method updates a cell's value. This cell can be located using its row and column indexes. If the cell's data field is known, you can pass it instead of the column index. After a value is updated, save it to the data source by calling the [saveEditData()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/saveEditData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#saveEditData') method.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({ ... });

        $("#updateCellButton").dxButton({
            text: "Update Cell",
            onClick: function() {
                $("#dataGridContainer").dxDataGrid("cellValue", 1, "Position", "CTO");
                $("#dataGridContainer").dxDataGrid("saveEditData");
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxDataGridModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        updateCell () {
            this.dataGrid.instance.cellValue(1, "Position", "CTO");
            this.dataGrid.instance.saveEditData();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxButtonModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ... ></dx-data-grid>
    <dx-button
        text="Update Cell"
        (onClick)="updateCell()">
    </dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxDataGrid ...
                :ref="dataGridRefKey">
            </DxDataGrid>
            <DxButton
                text="Update Cell"
                @click="updateCell"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';
    import DxButton from 'devextreme-vue/button';

    const dataGridRefKey = 'myDataGrid';

    export default {
        components: {
            DxDataGrid,
            DxButton
        },
        data: function() {
            return {
                dataGridRefKey
            }
        },
        methods: {
            updateCell() {
                this.dataGrid.cellValue(1, "Position", "CTO");
                this.dataGrid.saveEditData();
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
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.dataGridRef = React.createRef();
            this.updateCell = this.updateCell.bind(this);
        }

        get dataGrid() {
            return this.dataGridRef.current.instance;
        }

        updateCell() {
            this.dataGrid.cellValue(1, "Position", "CTO");
            this.dataGrid.saveEditData();
        }

        render() {
            return (
                <React.Fragment>
                    <DataGrid ...
                        ref={this.dataGridRef}>
                    </DataGrid>
                    <Button
                        text="Update Cell"
                        onClick={this.updateCell}
                    />
                </React.Fragment>
            );
        }
    }
    export default App;
    
---

The **DataGrid** widget allows you to process an updated cell value in the **columns**.[setCellValue](/api-reference/_hidden/GridBaseColumn/setCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#setCellValue') function before this value is saved to the data source. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true, 
                allowAdding: true
            },
            columns: [
                { dataField: "ID", visible: false },
                {
                    dataField: "Full_Name",
                    setCellValue: function (rowData, value) {
                        rowData.ID = value + Math.random() * 100;
                        rowData.Full_Name = value;
                    }
                }
                // ...
            ]
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        setCellValue (rowData, value) {
            rowData.ID = value + Math.random() * 100;
            rowData.Full_Name = value;
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
    <dx-data-grid>
        <dxo-editing
            [allowUpdating]="true"
            [allowAdding]="true">
        </dxo-editing>
        <dxi-column dataField="ID" [visible]="false"></dxi-column>
        <dxi-column dataField="Full_Name" [setCellValue]="setCellValue"></dxi-column>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxEditing
                :allow-updating="true"
                :allow-adding="true"
            />
            <DxColumn data-field="ID" :visible="false" />
            <DxColumn data-field="Full_Name" :set-cell-value="setCellValue" />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxEditing,
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxEditing,
            DxColumn
        },
        methods: {
            setCellValue(rowData, value) {
                rowData.ID = value + Math.random() * 100;
                rowData.Full_Name = value;
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
        Editing,
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        setCellValue(rowData, value) {
            rowData.ID = value + Math.random() * 100;
            rowData.Full_Name = value;
        }

        render() {
            return (
                <DataGrid ... >
                    <Editing
                        allowUpdating={true}
                        allowAdding={true}
                    />
                    <Column dataField="ID" visible={false} />
                    <Column dataField="Full_Name" setCellValue={this.setCellValue} />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

Call the [hasEditData()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/hasEditData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#hasEditData') to check if there are any unsaved changes. You can save or cancel them using the [saveEditData()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/saveEditData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#saveEditData') or [cancelEditData()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cancelEditData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cancelEditData') method, respectively.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({ ... });

        $("#saveChangesButton").dxButton({
            text: "Save changes",
            onClick: function() {
                var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
                if (dataGrid.hasEditData()) {
                    // Implement your logic here
                    dataGrid.saveEditData();
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        saveEditData () {
            if (this.dataGrid.instance.hasEditData()) {
                // Implement your logic here
                this.dataGrid.instance.saveEditData();
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxButtonModule
        ],
        // ...
    })
    
    <!--HTML-->
    <dx-data-grid ... ></dx-data-grid>
    <dx-button
        text="Save changes"
        (onClick)="saveEditData()">
    </dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxDataGrid ...
                :ref="dataGridRefKey">
            </DxDataGrid>
            <DxButton
                text="Save changes"
                @click="saveChanges"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';
    import DxButton from 'devextreme-vue/button';

    const dataGridRefKey = 'myDataGrid';

    export default {
        components: {
            DxDataGrid,
            DxButton
        },
        data: function() {
            return {
                dataGridRefKey
            }
        },
        methods: {
            saveChanges() {
                if(this.dataGrid.hasEditData()) {
                    // Implement your logic here
                    this.dataGrid.saveEditData();
                }
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
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.dataGridRef = React.createRef();
            this.saveChanges = this.saveChanges.bind(this);
        }

        get dataGrid() {
            return this.dataGridRef.current.instance;
        }

        saveChanges() {
            if(this.dataGrid.hasEditData()) {
                // Implement your logic here
                this.dataGrid.saveEditData();
            }
        }

        render() {
            return (
                <React.Fragment>
                    <DataGrid ...
                        ref={this.dataGridRef}>
                    </DataGrid>
                    <Button
                        text="Save changes"
                        onClick={this.saveChanges}
                    />
                </React.Fragment>
            );
        }
    }
    export default App;
    
---

#####See Also#####
#include common-link-callmethods
