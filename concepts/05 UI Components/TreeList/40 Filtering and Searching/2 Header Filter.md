A header filter allows a user to filter values in an individual column by including or excluding them from the applied filter. Clicking a header filter icon invokes a popup menu with all the column's unique values. A user includes or excludes values from the filter by selecting or clearing their selection in this menu.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular TreeList Filtering HeaderFilter](/images/treelist/visual_elements/header_filter.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/UsingHeaderFilter/"
}

Assign **true** to the [headerFilter](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/headerFilter/').**visible** property to make header filter icons visible for all columns. Set a column's [allowHeaderFiltering](/api-reference/_hidden/GridBaseColumn/allowHeaderFiltering.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowHeaderFiltering') property to **false** if its header filter should not be available. Note that this property inherits the [allowFiltering](/api-reference/_hidden/GridBaseColumn/allowFiltering.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowFiltering') property's value by default.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            headerFilter: { visible: true },
            columns: [{
                // ...
                allowHeaderFiltering: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-header-filter [visible]="true"></dxo-header-filter>
        <dxi-column [allowHeaderFiltering]="false" ... ></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
        <DxTreeList ... >
           <DxHeaderFilter :visible="true" />
           <DxColumn :allow-header-filtering="false" ... />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxColumn,
        DxHeaderFilter
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn,
            DxHeaderFilter
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column,
        HeaderFilter
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <HeaderFilter visible={true} />
                    <Column allowHeaderFiltering={false} ... />
                </TreeList>
            );
        }
    }
    
---

A user can change the applied filter by including or excluding values. Use a column's [filterType](/api-reference/_hidden/GridBaseColumn/filterType.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#filterType') property to specify the required mode. You can specify the initial filter by combining this property and the [filterValues](/api-reference/_hidden/GridBaseColumn/filterValues.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#filterValues') property. To change it at runtime, call the [columnOption](/api-reference/10%20UI%20Components/GridBase/3%20Methods/columnOption(id_options).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#columnOptionid_options') method:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "OrderDate",
                filterType: "exclude", // or "include"
                filterValues: [2014]
            }]
        });
    });

<!---->

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("columnOption", "OrderDate", {
        filterType: "include",
        filterValues: [2014, 2015]
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column 
            dataField="OrderDate"
            [(filterValues)]="filterValues"
            [(filterType)]="filterType"> 
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        filterValues: Array<any> = [2014];
        filterType: string = "exclude";    // or "include"
        applyFilter (filterType, values) {
            this.filterType = filterType;
            this.filterValues = values;
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
        <DxTreeList ... >           
            <DxColumn 
                v-model:filter-type="filterType"
                v-model:filter-values="filterValues" 
                data-field="OrderDate"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxColumn
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn
        },
        data() {
            return {
               filterType: "exclude", // or "include" 
               filterValues: [2014]
            }
        },
        methods: {
            applyFilter (filterType, values) {
                this.filterType = filterType;
                this.filterValues = values;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        constructor(props) {
            super(props);            
            this.state = {
                filterType: 'exclude', // or 'include'
                filterValues: [2014]
            }
        }

        render() {
            let { filterType, filterValues } = this.state;
            return (
                <TreeList ... 
                    onOptionChanged={this.onOptionChanged}>                
                    <Column 
                        dataField="OrderDate"
                        filterType={filterType}                   
                        filterValues={filterValues}
                    />
                </TreeList>
            );
        }
        onOptionChanged = (e) => {
            if(e.fullName === "columns[0].filterValues") {
                this.setState({ 
                    filterValues: e.value
                })
            }
            if(e.fullName === "columns[0].filterType") {
                this.setState({ 
                    filterType: e.value
                })
            }
        }
        applyFilter = (filterType, values) => {
            this.setState({
                filterType: filterType,
                filterValues: values
            })
        }
    }
    
---

You can use the **headerFilter**.[allowSearch](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/headerFilter/allowSearch.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/headerFilter/#allowSearch') property to enable the header filter's searching capability. The same property can be declared in a column's configuration object, in which case it controls searching in that column's header filter.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            headerFilter: { 
                visible: true,
                allowSearch: true
            },
            columns: [{
                // ...
                headerFilter: { 
                    allowSearch: false
                }
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-header-filter [visible]="true" [allowSearch]="true"></dxo-header-filter>
        <dxi-column ... >
            <dxo-header-filter [allowSearch]="false"></dxo-header-filter>
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
        <DxTreeList ... >
            <DxHeaderFilter 
                :allow-search="true" 
                :visible="true" 
            />
            <DxColumn>
                <DxColumnHeaderFilter :allow-search="false" />
            </DxColumn>
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxColumn,
        DxHeaderFilter,
        DxColumnHeaderFilter
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn,
            DxHeaderFilter,
            DxColumnHeaderFilter
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column,
        HeaderFilter,
        ColumnHeaderFilter
    } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ... >
                    <HeaderFilter 
                        allowSearch={true} 
                        visible={true} 
                    />
                    <Column>
                        <ColumnHeaderFilter allowSearch={false} />
                    </Column>
                </TreeList>
            );
        }
    }
    
---

A header filter's popup menu lists all column values by default. You can group them using the **headerFilter**.[groupInterval](/api-reference/_hidden/GridBaseColumn/headerFilter/groupInterval.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/headerFilter/#groupInterval') property if they are numbers or dates. You can also provide a custom data source for a header filter using the [dataSource](/api-reference/_hidden/GridBaseColumn/headerFilter/dataSource.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/headerFilter/#dataSource') property. Refer to the property's description for details.

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20UI%20Components/TreeList/40%20Filtering%20and%20Searching/6%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/UI_Components/TreeList/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
- [remoteOperations](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/')
