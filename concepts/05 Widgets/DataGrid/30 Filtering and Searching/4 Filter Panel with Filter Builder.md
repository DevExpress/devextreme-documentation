The filter panel displays the applied filter expression.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout DataGrid Filter Panel](/images/DataGrid/visual_elements/filter_panel.png)

You can click the filter expression to open the integrated filter builder.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout DataGrid Filter Panel](/images/DataGrid/visual_elements/integrated_filter_builder.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/FilterPanel/"
}

Set the **filterPanel**.[visible](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterPanel/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterPanel/#visible') option to **true** to make the filter panel visible. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            filterPanel: { visible: true }
        });
    });

##### Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-filter-panel [visible]="true"></dxo-filter-panel>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
           <DxFilterPanel :visible="true />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {      
        DxFilterPanel
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxFilterPanel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        FilterPanel
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ...>
                    <FilterPanel visible={true} />                  
                </DataGrid>
            );
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        @* ... *@
        .FilterPanel(fp => fp.Visible(true))
    )   

---

If a user changes the filter expression in the filter panel or filter builder, the changes are reflected in the [filter row](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Filter_Row') and [header filter](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Header_Filter'), and vice versa. Set the [filterSyncEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterSyncEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterSyncEnabled') option to **false** to disable this synchronization. In this case, the filter panel remains synchronized with the filter builder.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            filterSyncEnabled: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-data-grid ...
        [filterSyncEnabled]="false">
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... 
            :filter-sync-enabled="false"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
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
        render() {
            return (
                <DataGrid ...
                    filterSyncEnabled={false}
                />
            );
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        @* ...*@
        .FilterSyncEnabled(false)
    )

---

You can define the filter expression programmatically with the [filterValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterValue') option. See the option's description for the full list of available filter operations and their peculiarities.

The **filterValue** is updated when a user changes the filter expression from the UI. Use the [option](/api-reference/10%20UI%20Widgets/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#optionoptionName_optionValue') method to update it from the API:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            filterValue: ["SaleAmount", "<>", null],
            filterPanel: { 
                visible: true
            }
        });
    });

<!---->

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("instance").option("filterValue", ["Employee", "contains", "Clark"]);

##### Angular

    <!--HTML-->
    <dx-data-grid ...
        [(filterValue)]="filterValue">
        <dxo-filter-panel 
            [visible]="true">
        </dxo-filter-panel>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        filterValue: Array<any> = ['SaleAmount', '<>', null];
        applyFilter (filterExpression) {
            this.filterValue = filterExpression;
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
        <DxDataGrid ... 
            v-model:filter-value="filterValue">
            <DxFilterPanel :visible="true" />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxFilterPanel
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxFilterPanel
        },
        data() {
            return {
                filterValue: ['SaleAmount', '<>', null]
            };
        },
        methods: {
            applyFilter (filterExpression) {
                this.filterValue = filterExpression;
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
        FilterPanel
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                filterValue: ['SaleAmount', '<>', null]
            }
        }

        render() {
            let { filterValue } = this.state;
            return (
                <DataGrid ...
                    onOptionChanged={this.onOptionChanged} 
                    filterValue={filterValue}>
                    <FilterPanel visible={true} />                  
                </DataGrid>
            );
        }
        onOptionChanged = (e) => {
            if(e.fullName === "filterValue") {
                this.applyFilter(e.value);
            }      
        }
        applyFilter = (filterExpression) => {
            this.setState({
                filterValue: filterExpression
            });
        }

        
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        @* ... *@
        .ID("dataGridContainer")
        .FilterPanel(fp => fp.Visible(true))
        .FilterValue(new object[] { "SaleAmount", FilterBuilderFieldFilterOperations.NotEqual, null })
    )

    <script type="text/javascript"> 
        $("#dataGridContainer").dxDataGrid("instance")
            .option("filterValue", ["Employee", "contains", "Clark"]);
    </script> 

---

The **DataGrid** provides the [filterBuilder](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterBuilder.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterBuilder') and [filterBuilderPopup](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterBuilderPopup.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterBuilderPopup') objects that configure the integrated filter builder and the popup in which it appears. These objects can contain the [FilterBuilder](/api-reference/10%20UI%20Widgets/dxFilterBuilder '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/')'s and [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/')'s options. In the following code, the filter builder has an additional filter operation `Is Zero`; the filter builder's popup is customized and displayed on a button click:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var dataGrid = $("#dataGridContainer").dxDataGrid({
            // ...
            filterPanel: { visible: false },
            filterSyncEnabled: true,
            filterBuilder: {
                customOperations: [{
                    name: "isZero",
                    caption: "Is Zero",
                    dataTypes: ["number"],
                    hasValue: false,
                    calculateFilterExpression: function(filterValue, field) {
                        return [field.dataField, "=", 0];
                    }
                }]
            }, 
            filterBuilderPopup: {
                width: 400,
                title: "Synchronized Filter"
            }
        }).dxDataGrid("instance");
        $("#button").dxButton({
            text: "Show Filter Builder",
            onClick: function () {
                dataGrid.option("filterBuilderPopup", { visible: true });
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... 
        [filterSyncEnabled]="true">
        <dxo-filter-panel [visible]="false"></dxo-filter-panel>
        <dxo-filter-builder 
            [customOperations]="customOperations">
        </dxo-filter-builder>
        <dxo-filter-builder-popup 
            [width]="400"
            title="Synchronized Filter"
            [(visible)]="popupVisible">
        </dxo-filter-builder-popup>
    </dx-data-grid>
    <dx-button
        text="Show Filter Builder"
        (onClick)="showFilterBuilder()">
    </dx-button>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        popupVisible: boolean = false;
        customOperations = [{
            name: "isZero",
            caption: "Is Zero",
            dataTypes: ["number"],
            hasValue: false,
            calculateFilterExpression: function(filterValue, field) {
                return [field.dataField, "=", 0];
            }
        }];
        showFilterBuilder () {
            this.popupVisible = true;
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
            <DxDataGrid ... 
                :filter-sync-enabled="true">
                <DxFilterPanel :visible="false" />
                <DxFilterBuilder :custom-operations="customOperations" />
                <DxFilterBuilderPopup 
                    :width="400"
                    v-model:visible="popupVisible"
                    title="Synchronized Filter"
                />
            </DxDataGrid>
            <DxButton
                @click="showFilterBuilder"
                text="Show Filter Builder"                
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxButton from 'devextreme-vue/button';

    import DxDataGrid, {
        DxFilterPanel,
        DxFilterBuilder,
        DxFilterBuilderPopup
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxFilterPanel,
            DxFilterBuilder,
            DxFilterBuilderPopup,
            DxButton
        },
        data() {
            return {
                customOperations: [{
                    name: "isZero",
                    caption: "Is Zero",
                    dataTypes: ["number"],
                    hasValue: false,
                    calculateFilterExpression: function(filterValue, field) {
                        return [field.dataField, "=", 0];
                    }
                }],
                popupVisible: false                
            };
        },
        methods: {
            showFilterBuilder () {
                this.popupVisible = true;
            }            
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Button from 'devextreme-react/button';

    import DataGrid, {
        FilterPanel,        
        FilterBuilder,
        FilterBuilderPopup
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                popupVisible: false
            }
            this.customOperations = [{
                name: "isZero",
                caption: "Is Zero",
                dataTypes: ["number"],
                hasValue: false,
                calculateFilterExpression: function(filterValue, field) {
                    return [field.dataField, "=", 0];
                }
            }]
        }

        render() {
            let { popupVisible } = this.state;
            return (
                <React.Fragment>
                    <DataGrid ... 
                        filterSyncEnabled={true} >
                        <FilterPanel visible={false} />
                        <FilterBuilder customOperations={this.customOperations} />
                        <FilterBuilderPopup 
                            width={400}
                            title="Synchronized Filter"
                            visible={popupVisible}
                        />                  
                    </DataGrid>
                    <Button 
                        text="Show Filter Builder" 
                        onClick={this.showFilterBuilder} 
                    />
                </React.Fragment>
            );
        }
        showFilterBuilder = () => {
            this.setState({
                popupVisible: true
            });
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        @* ... *@
        .ID("dataGridContainer")
        .FilterPanel(fp => fp.Visible(false))
        .FilterSyncEnabled(true)
        .FilterBuilderPopup(fbp => fbp.Width(400).Title("Synchronized Filter"))
        .FilterBuilder(fb => fb
            .CustomOperations(co => {
                co.Add().Name("isZero")
                    .Caption("Is Zero")
                    .DataTypes(new[] { FilterBuilderFieldDataType.Number })        
                    .HasValue(false)
                    .CalculateFilterExpression("calculateFilterExpression");
            })
        )
    )
    @(Html.DevExtreme().Button()
        .Text("Show Filter Builder")
        .OnClick("showFilterBuilder")
    )

    <script type="text/javascript">
        function showFilterBuilder() {
            $("#dataGridContainer").dxDataGrid('instance').option('filterBuilderPopup', { visible: true })
        }
        function calculateFilterExpression(filterValue, field) { 
            return [field.dataField, "=", 0]; 
        }
    </script>

---

#####See Also#####
- [FilterBuilder - Overview](/concepts/05%20Widgets/FilterBuilder/010%20Overview.md '/Documentation/Guide/Widgets/FilterBuilder/Overview/')
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/')
