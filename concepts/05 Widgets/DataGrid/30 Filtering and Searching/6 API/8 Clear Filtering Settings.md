The [clearFilter(filterName)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/clearFilter(filterName).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearFilterfilterName') method allows you to clear different filter settings depending on the argument. Acceptable arguments are listed in the method's description.

<!---->

---
##### jQuery

    <!--JavaScript-->// Clears the search panel
    $("#dataGridContainer").dxDataGrid("instance").clearFilter("search");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        clearSearchPanel () {
            this.dataGrid.instance.clearFilter("search");
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
        <dx-data-grid ... 
            :ref="gridRefKey"
        />       
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
        },
        data() {
            return {
                // ...
                gridRefKey: 'data-grid',
            };
        },
        methods: {
            clearSearchPanel = () => {
                this.dataGrid.clearFilter("search");
            }
        },
        computed: {
            dataGrid: function() {
                return this.$refs[gridRefKey].instance;
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
            this.gridRef = React.createRef();                  
        }
        get dataGrid() {
            return this.gridRef.current.instance;
        }
        
        render() {
            return (
                <DataGrid ... 
                    :ref="gridRef" 
                />
            );
        }

        clearSearchPanel = () => {
            this.dataGrid.clearFilter("search");
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .ID("dataGridContainer")
        // ... 
    )

    <script type="text/javascript">
        // Clears the search panel
        $("#dataGridContainer").dxDataGrid("instance").clearFilter("search");
    </script>    

---

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/')
