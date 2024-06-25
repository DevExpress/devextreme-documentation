The DataGrid UI component has an integrated filter builder that can be invoked using the [filter panel](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching/4%20Filter%20Panel%20with%20Filter%20Builder.md '/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/#Filter_Panel_with_Filter_Builder'). You can also use the [FilterBuilder](/concepts/05%20UI%20Components/FilterBuilder/010%20Overview.md '/Documentation/Guide/UI_Components/FilterBuilder/Overview/') UI component as a standalone component. Pass an array of columns that should be filtered to the FilterBuilder's [fields](/api-reference/10%20UI%20Components/dxFilterBuilder/1%20Configuration/fields '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/#fields') property. Each item in this array should at least specify a [dataField](/api-reference/_hidden/dxFilterBuilderField/dataField.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#dataField'). The following code passes DataGrid columns to the FilterBuilder:

---
##### jQuery

    <!--JavaScript-->
    var columns = [{
        caption: "ID",
        dataField: "Product_ID",
        dataType: "number"
    }, {
        dataField: "Product_Name"
    }, {
        caption: "Cost",
        dataField: "Product_Cost",
        dataType: "number",
        format: "currency"
    }];

    $(function () {
        $("#dataGrid").dxDataGrid({
            // ...
            columns: columns
        });
        $("#filterBuilder").dxFilterBuilder({
            fields: columns
        });
    });

##### Angular

    <!--HTML-->
    <dx-filter-builder 
        [fields]="columns">
    </dx-filter-builder>
    <dx-data-grid ...       
        [columns]="columns">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule, DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        columns = [{
            caption: "ID",
            dataField: "Product_ID",
            dataType: "number"
        }, {
            dataField: "Product_Name"
        }, {
            caption: "Cost",
            dataField: "Product_Cost",
            dataType: "number",
            format: "currency"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxFilterBuilderModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxDataGrid :columns="columns" />
            <DxFilterBuilder :fields="columns" />          
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';
    import DxFilterBuilder from 'devextreme-vue/filter-builder';

    export default {
        components: {
            DxDataGrid,
            DxFilterBuilder
        },
        data() {
            return {
                columns: [{
                    caption: "ID",
                    dataField: "Product_ID",
                    dataType: "number"
                }, {
                    dataField: "Product_Name"
                }, {
                    caption: "Cost",
                    dataField: "Product_Cost",
                    dataType: "number",
                    format: "currency"
                }]
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';
    import FilterBuilder from 'devextreme-react/filter-builder';
    
    const columns = [{
        caption: "ID",
        dataField: "Product_ID",
        dataType: "number"
    }, {
        dataField: "Product_Name"
    }, {
        caption: "Cost",
        dataField: "Product_Cost",
        dataType: "number",
        format: "currency"
    }];

    function App() {
        return (
            <React.Fragment>
                <DataGrid defaultColumns={columns} />              
                <FilterBuilder defaultFields={columns} />
            </React.Fragment>
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .Columns(columns => {
            columns.Add()
                .Caption("ID")
                .DataField("Product_ID")
                .DataType(GridColumnDataType.Number);
            columns.Add()
                .DataField("Product_Name");
            columns.Add()
                .Caption("Cost")
                .DataField("Product_Cost")
                .DataType(GridColumnDataType.Number)
                .Format(Format.Currency);
        })
    )

    @(Html.DevExtreme().FilterBuilder()
        .Fields(fields => {
            fields.Add()
                .Caption("ID")
                .DataField("Product_ID")
                .DataType(FilterBuilderFieldDataType.Number);
            fields.Add()
                .DataField("Product_Name");
            fields.Add()
                .Caption("Cost")
                .DataField("Product_Cost")
                .DataType(FilterBuilderFieldDataType.Number)
                .Format(Format.Currency);
        })
    ) 

---

Then, add a button that updates a filter of the DataGrid's data source according to the filter expression:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        // ...
        $("#button").dxButton({
            text: "Apply Filter",
            onClick: function () {
                var filter = $("#filterBuilder").dxFilterBuilder("instance").getFilterExpression();
                $("#dataGrid").dxDataGrid("instance").filter(filter);
            },
        });
    });

##### Angular

    <!--TypeScript-->
    import { 
        DxDataGridModule, 
        DxButtonModule,
        DxFilterBuilderModule, 
        DxDataGridComponent, 
        DxFilterBuilderComponent 
    } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        @ViewChild(DxFilterBuilderComponent, { static: false }) filterBuilder: DxFilterBuilderComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        // @ViewChild(DxFilterBuilderComponent) filterBuilder: DxFilterBuilderComponent;
        
        // ...
        buttonClick () {
            this.dataGrid.instance.filter(this.filterBuilder.instance.getFilterExpression());
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxButtonModule,
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-button 
        text="Apply Filter"
        (onClick)="buttonClick()">
    </dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxDataGrid ... 
               :ref="gridRefKey"
            />
            <DxFilterBuilder ... 
                :ref="fbRefKey"
            />
            <DxButton 
                @click="buttonClick"
                text="Apply Filter"   
            />               
        </div>    
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';
    import DxFilterBuilder from 'devextreme-vue/filter-builder';
    import DxButton from 'devextreme-vue/button';

    const gridRefKey = 'data-grid';
    const fbRefKey = 'filter-builder';

    export default {
        components: {
            DxDataGrid,
            DxButton,
            DxFilterBuilder
        },
        data() {
            return {
                // ...
                gridRefKey,
                fbRefKey
            };
        },
        methods: {
            buttonClick () {
                this.dataGrid.filter(this.filterBuilder.getFilterExpression());
            }
        },
        computed: {
            dataGrid: function() {
                return this.$refs[gridRefKey].instance;
            },
            filterBuilder: function(){
                return this.$refs[fbRefKey].instance;                
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useRef, useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';
    import FilterBuilder from 'devextreme-react/filter-builder';
    import Button from 'devextreme-react/button';

    function App() {
        const gridRef = useRef(null);
        const fbRef = useRef(null);

        const buttonClick = useCallback(() => {
            const dataGridInstance = gridRef.current.instance();
            const filterBuilderInstance = fbRef.current.instance();
            dataGridInstance.filter(filterBuilderInstance.getFilterExpression());
        }, []);

        return (
            <React.Fragment>
                <DataGrid ref={gridRef}  ... />              
                <FilterBuilder ref={fbRef} ... />
                <Button 
                    text="Apply Filter" 
                    onClick={buttonClick} 
                />    
            </React.Fragment>
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .ID("dataGrid")
        // ... 
    )

    @(Html.DevExtreme().FilterBuilder()
        .ID("filterBuilder")
        // ...       
    )

    <script type="text/javascript">
        var filter = $("#filterBuilder").dxFilterBuilder("instance").getFilterExpression();
        $("#dataGrid").dxDataGrid("instance").filter(filter);
    </script>

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/WithDataGrid/"
}

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching/6%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
