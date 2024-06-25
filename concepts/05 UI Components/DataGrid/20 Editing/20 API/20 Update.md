The [cellValue(rowIndex, visibleColumnIndex, value)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/cellValue(rowIndex_visibleColumnIndex_value).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#cellValuerowIndex_visibleColumnIndex_value') method updates a cell's value. This cell can be located using its row and column indexes. If the cell's data field is known, you can pass it instead of the column index. After a value is updated, save it to the data source by calling the [saveEditData()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/saveEditData().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#saveEditData') method.

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
            return this.dataGridRef.current.instance();
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

To process an updated cell value before saving it to the data source, implement the **columns**.[setCellValue](/api-reference/_hidden/GridBaseColumn/setCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#setCellValue') function. Refer to the function's description for an example.

You can check if there are any unsaved changes by calling the [hasEditData()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/hasEditData().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#hasEditData') method. Use the [saveEditData()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/saveEditData().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#saveEditData') or [cancelEditData()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/cancelEditData().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#cancelEditData') method to save or cancel them, respectively.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({ ... });

        $("#saveChangesButton").dxButton({
            text: "Save changes",
            onClick: function() {
                var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
                if(dataGrid.hasEditData()) {
                    dataGrid.saveEditData().then(() => {
                        if(!dataGrid.hasEditData()) {
                            // Saved successfully
                        } else {
                            // Saving failed
                        }
                    });
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
        saveEditData() {
            if(this.dataGrid.instance.hasEditData()) {
                this.dataGrid.instance.saveEditData().then(() => {
                    if(!this.dataGrid.instance.hasEditData()) {
                        // Saved successfully
                    } else {
                        // Saving failed
                    }
                });
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
                    this.dataGrid.saveEditData().then(() => {
                        if(!this.dataGrid.hasEditData()) {
                            // Saved successfully
                        } else {
                            // Saving failed
                        }
                    });
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
            return this.dataGridRef.current.instance();
        }

        saveChanges() {
            if(this.dataGrid.hasEditData()) {
                this.dataGrid.saveEditData().then(() => {
                    if(!this.dataGrid.hasEditData()) {
                        // Saved successfully
                    } else {
                        // Saving failed
                    }
                });
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
