Call the [deleteRow(rowIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/deleteRow(rowIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deleteRowrowIndex') method to delete a specific row from the data source. This method invokes a confirmation dialog that allows a user to cancel deletion. The following code hides this dialog, thus a row is instantly deleted from the data source:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var dataGrid = $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                mode: "row", 
                allowDeleting: true,
                texts: {
                    // Hides the confirmation dialog
                    confirmDeleteMessage: null
                }
            }
        }).dxDataGrid("instance");

        $("#deleteRowButton").dxButton({
            text: "Delete Row",
            onClick: function() {
                // Deletes the second row
                dataGrid.deleteRow(1);
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid>
        <dxo-editing
            mode="row"
            [allowDeleting]="true">
            <dxo-texts [confirmDeleteMessage]="null"></dxo-texts>
        </dxo-editing>
    </dx-data-grid>
    <dx-button
        text="Delete Row"
        (onClick)="deleteRow()">
    </dx-button>

    <!--TypeScript-->
    import { DxDataGridModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        deleteRow () {
            // Deletes the second row
            this.dataGrid.instance.deleteRow(1);
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid
            ref="dataGrid">
            <DxEditing
                mode="row"
                :allow-deleting="true">
                <DxEditingTexts :confirm-delete-message="null" />
            </DxEditing>
        </DxDataGrid>
        <DxButton
            text="Delete Row"
            @click="deleteRow"
        />
    </template>

    <script>
    import { DxDataGrid, DxEditing, DxEditingTexts } from 'devextreme-vue/data-grid';

    import DxButton from 'devextreme-vue/button';

    export default {
        components: {
            DxDataGrid, 
            DxEditing,
            DxEditingTexts,
            DxButton
        },
        methods: {
            deleteRow() {
                this.$refs.dataGrid.instance.deleteRow(1);
            }
        },
        data() {}
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import { DataGrid, Editing, EditingTexts } from 'devextreme-react/data-grid';
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.dataGridRef = React.createRef();
            this.deleteRow = this.deleteRow.bind(this);
        }
        get dataGrid() {
            return this.dataGridRef.current.instance;
        }

        deleteRow() {
            this.dataGrid.deleteRow(1);
        }

        render() {
            return (
                <DataGrid  
                    ref={this.dataGridRef}>
                    <Editing
                        mode="row"
                        allowDeleting={true}>
                        <EditingTexts confirmDeleteMessage={null} />
                    </Editing>
                </DataGrid>
                <Button
                    text="Delete Row"
                    onClick={this.deleteRow}
                />
            );
        }
    }
    export default App;
    
---

Note that in the [batch mode](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/30%20Batch%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Batch_Mode') a row is only marked as deleted. To save changes, call the [saveEditData()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/saveEditData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#saveEditData') method. Calling the [undeleteRow(rowIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/undeleteRow(rowIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#undeleteRowrowIndex') method cancels row deletion.

---
##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("undeleteRow", 1);

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        undeleteRow () {
            this.dataGrid.instance.undeleteRow(1);
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
        <DxDataGrid
            ref="dataGrid">
        </DxDataGrid>
    </template>

    <script>
    import { DxDataGrid } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            undeleteRow() {
                this.$refs.dataGrid.instance.undeleteRow(1);
            }
        },
        data() {}
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import { DataGrid } from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.dataGridRef = React.createRef();
            this.undeleteRow = this.undeleteRow.bind(this);
        }
        get dataGrid() {
            return this.dataGridRef.current.instance;
        }

        undeleteRow() {
            this.dataGrid.undeleteRow(1);
        }

        render() {
            return (
                <DataGrid  
                    ref={this.dataGridRef}
                />
            );
        }
    }
    export default App;   
     
---

#####See Also#####
#include common-link-callmethods
