The filter panel displays the applied filter expression.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout TreeList Filter Panel](/images/TreeList/visual_elements/filter_panel.png)

You can click the filter expression to open the integrated filter builder.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout TreeList Filter Panel](/images/TreeList/visual_elements/integrated_filter_builder.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/FilterPanel/"
}

Set the **filterPanel**.[visible](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterPanel/visible.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterPanel/#visible') property to **true** to make the filter panel visible. 

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            filterPanel: { visible: true }
        });
    });

#####Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxo-filter-panel [visible]="true"></dxo-filter-panel>
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
           <DxFilterPanel :visible="true />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {      
        DxFilterPanel
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxFilterPanel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        FilterPanel
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ...>
                    <FilterPanel visible={true} />                  
                </TreeList>
            );
        }
    }

---

If a user changes the filter expression in the filter panel or filter builder, the changes are reflected in the [filter row](/concepts/05%20UI%20Components/TreeList/40%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/UI_Components/TreeList/Filtering_and_Searching/#Filter_Row') and [header filter](/concepts/05%20UI%20Components/TreeList/40%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/UI_Components/TreeList/Filtering_and_Searching/#Header_Filter'), and vice versa. Set the [filterSyncEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterSyncEnabled.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#filterSyncEnabled') property to **false** to disable this synchronization. In this case, the filter panel remains synchronized with the filter builder.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            filterSyncEnabled: false
        });
    });

#####Angular

    <!--HTML-->
    <dx-tree-list ...
        [filterSyncEnabled]="false">
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... 
            :filter-sync-enabled="false"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ...
                    filterSyncEnabled={false}
                />
            );
        }
    }

---

You can define the filter expression programmatically with the [filterValue](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterValue.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#filterValue') property. See the property's description for the full list of available filter operations and their peculiarities.

The **filterValue** is updated when a user changes the filter expression from the UI. Use the [option](/api-reference/10%20UI%20Components/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#optionoptionName_optionValue') method to update it from the API:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            filterValue: ["SaleAmount", "<>", null],
            filterPanel: { 
                visible: true
            }
        });
    });

<!---->

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("option", "filterValue", ["Employee", "contains", "Clark"]);

#####Angular

    <!--HTML-->
    <dx-tree-list ...
        [(filterValue)]="filterValue">
        <dxo-filter-panel 
            [visible]="true">
        </dxo-filter-panel>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
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
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... 
            v-model:filter-value="filterValue">
            <DxFilterPanel :visible="true" />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxFilterPanel
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
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
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        FilterPanel
    } from 'devextreme-react/tree-list';

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
                <TreeList ...
                    onOptionChanged={this.onOptionChanged} 
                    filterValue={filterValue}>
                    <FilterPanel visible={true} />                  
                </TreeList>
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

---

The TreeList provides the [filterBuilder](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterBuilder.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#filterBuilder') and [filterBuilderPopup](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterBuilderPopup.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#filterBuilderPopup') objects that configure the integrated filter builder and the popup in which it appears. These objects can contain the [FilterBuilder](/api-reference/10%20UI%20Components/dxFilterBuilder '/Documentation/ApiReference/UI_Components/dxFilterBuilder/')'s and [Popup](/api-reference/10%20UI%20Components/dxPopup '/Documentation/ApiReference/UI_Components/dxPopup/')'s properties. In the following code, the filter builder has an additional filter operation `Is Zero`; the filter builder's popup is customized and displayed on a button click:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var treeList = $("#treeListContainer").dxTreeList({
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
        }).dxTreeList("instance");
        $("#button").dxButton({
            text: "Show Filter Builder",
            onClick: function () {
                treeList.option("filterBuilderPopup", { visible: true });
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-tree-list ... 
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
    </dx-tree-list>
    <dx-button
        text="Show Filter Builder"
        (onClick)="showFilterBuilder()">
    </dx-button>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
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
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxTreeList ... 
                :filter-sync-enabled="true">
                <DxFilterPanel :visible="false" />
                <DxFilterBuilder :custom-operations="customOperations" />
                <DxFilterBuilderPopup 
                    :width="400"
                    v-model:visible="popupVisible"
                    title="Synchronized Filter"
                />
            </DxTreeList>
            <DxButton
                @click="showFilterBuilder"
                text="Show Filter Builder"                
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxButton from 'devextreme-vue/button';

    import DxTreeList, {
        DxFilterPanel,
        DxFilterBuilder,
        DxFilterBuilderPopup
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
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
    import 'devextreme/dist/css/dx.light.css';

    import Button from 'devextreme-react/button';

    import TreeList, {
        FilterPanel,        
        FilterBuilder,
        FilterBuilderPopup
    } from 'devextreme-react/tree-list';

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
                    <TreeList ... 
                        filterSyncEnabled={true} >
                        <FilterPanel visible={false} />
                        <FilterBuilder customOperations={this.customOperations} />
                        <FilterBuilderPopup 
                            width={400}
                            title="Synchronized Filter"
                            visible={popupVisible}
                        />                  
                    </TreeList>
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

---

#####See Also#####
- [FilterBuilder - Overview](/concepts/05%20UI%20Components/FilterBuilder/010%20Overview.md '/Documentation/Guide/UI_Components/FilterBuilder/Overview/')
- [remoteOperations](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/')
