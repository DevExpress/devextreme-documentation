The initial and runtime filtering API depends on the UI element and is described in the topics above. This API is designed to filter data the data source returns. If you need to pre-filter data in the data source, call the [filter(filterExpr)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr') method by passing a [filter expression](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') as an argument. Note that this filter can only be cleared [programmatically](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/6%20API/8%20Clear%20Filtering%20Settings.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Clear_Filtering_Settings').

---
##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("instance").filter([
        [ "Cost", ">", 1000 ],
        "and",
        [ "Cost", "<=", 2000 ]
    ]);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        filterByCost () {
            this.dataGrid.instance.filter([
                [ "Cost", ">", 1000 ],
                "and",
                [ "Cost", "<=", 2000 ]
            ]);
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
                gridRefKey: 'data-grid'
            };
        },
        methods: {
            filterByCost() {
                this.dataGrid.filter([
                    [ "Cost", ">", 1000 ],
                    "and",
                    [ "Cost", "<=", 2000 ]
                ]);
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
                    :ref="gridRef" /> 
            );
        }

        filterByCost = () => {
            this.dataGrid.filter([
                [ "Cost", ">", 1000 ],
                "and",
                [ "Cost", "<=", 2000 ]
            ]);
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .ID("dataGridContainer")
        // ... 
    )

    <script type="text/javascript">
        $("#dataGridContainer").dxDataGrid("instance").filter([
            [ "Cost", ">", 1000 ],
            "and",
            [ "Cost", "<=", 2000 ]
        ]);
    </script>    

---

You can create a filter that combines all the applied filters by calling the [getCombinedFilter()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getCombinedFilter().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getCombinedFilter') method. It returns a filter with [getters](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') by default. Call it by passing **true** as the argument to get the combined filter with [data fields](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField').

---
##### jQuery

    <!--JavaScript-->
    var filterExpression = $("#dataGridContainer").dxDataGrid("instance").getCombinedFilter(true);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {        
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        getCombinedFilter () {
            return this.dataGrid.instance.getCombinedFilter(true);
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
        <div>
            <dx-data-grid ... 
               :ref="gridRefKey"
            />   
        </div>    
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
                gridRefKey: 'data-grid'
            };
        },
        methods: {
            getCombinedFilter () {
                return this.dataGrid.getCombinedFilter(true);
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
                    :ref="gridRef" />
            );
        }

        getCombinedFilter = () => {
            return this.dataGrid.getCombinedFilter(true);
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .ID("dataGridContainer")
        // ... 
    )

    <script type="text/javascript">
        var filterExpression = $("#dataGridContainer").dxDataGrid("instance").getCombinedFilter(true);
    </script>       

---

#####See Also#####
- [Filtering API - Clear Filtering Settings](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/6%20API/8%20Clear%20Filtering%20Settings.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Clear_Filtering_Settings')
