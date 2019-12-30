A column is considered hidden when its [visible](/api-reference/_hidden/GridBaseColumn/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visible') option is **false**. You can change this option programmatically using the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue') method. For example, the following code hides an *"Email"* column:

---
##### jQuery

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("columnOption", "Email", "visible", false);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        hideEmails() () {
            this.dataGrid.instance.columnOption("Email", "visible", false);
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
        <DxDataGrid ... >
            <DxColumn
                data-field="Email"
                :visible.sync="isEmailVisible"
            />
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
        data() {
            return() {
                isEmailVisible: true
            }
        },
        methods: {
            hideEmails() {
                this.isEmailVisible = false;
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

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.dataGridRef = React.createRef();

            this.hideEmails = () => {
                this.dataGrid.columnOption('Email', 'visible', false);
            }
        }

        get dataGrid() {
            return this.dataGridRef.current.instance;
        }

        render() {
            return (
                <DataGrid ref={this.dataGridRef}>
                    {/* ... */ }
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#####See Also#####
- [Column Chooser](/concepts/05%20Widgets/DataGrid/15%20Columns/60%20Column%20Chooser.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Chooser/')