A header filter allows a user to filter values in an individual column by including or excluding them from the applied filter. Clicking a header filter icon invokes a popup menu with all the column's unique values. A user includes or excludes values from the filter by selecting or clearing their selection in this menu.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular TreeList Filtering HeaderFilter](/images/treelist/visual_elements/header_filter.png)

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/UsingHeaderFilter/"
}

Assign **true** to the [headerFilter](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/headerFilter '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/headerFilter/').**visible** property to make header filter icons visible for all columns. Set a column's [allowHeaderFiltering](/api-reference/_hidden/GridBaseColumn/allowHeaderFiltering.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowHeaderFiltering') property to **false** if its header filter should not be available. Note that this property inherits the [allowFiltering](/api-reference/_hidden/GridBaseColumn/allowFiltering.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowFiltering') property's value by default.

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
    
    <!-- tab: app.component.html -->
    <dx-tree-list ... >
        <dxo-tree-list-header-filter [visible]="true"></dxo-tree-list-header-filter>
        <dxi-tree-list-column [allowHeaderFiltering]="false" ... ></dxi-tree-list-column>
    </dx-tree-list>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxTreeListModule } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        standalone: true,
        imports: [DxTreeListModule]
    })
    export class AppComponent {
        // ...
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxHeaderFilter :visible="true" />
            <DxColumn :allow-header-filtering="false" ... />
        </DxTreeList>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxTreeList, {
        DxColumn,
        DxHeaderFilter
    } from 'devextreme-vue/tree-list';
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import TreeList, {
        Column,
        HeaderFilter
    } from 'devextreme-react/tree-list';

    export default function App() {
        return (
            <TreeList ... >
                <HeaderFilter visible={true} />
                <Column allowHeaderFiltering={false} ... />
            </TreeList>
        );
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
    
    <!-- tab: app.component.html -->
    <dx-tree-list ... >
        <dxi-tree-list-column 
            dataField="OrderDate"
            [(filterValues)]="filterValues"
            [(filterType)]="filterType"> 
        </dxi-tree-list-column>
    </dx-tree-list>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxTreeListModule } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        standalone: true,
        imports: [DxTreeListModule]
    })
    export class AppComponent {
        filterValues: Array<any> = [2014];
        filterType: string = 'exclude'; // or 'include'
        applyFilter(filterType: string, values: Array<any>) {
            this.filterType = filterType;
            this.filterValues = values;
        }
    }

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

    <script setup>
    import { ref } from 'vue';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxTreeList, {
        DxColumn
    } from 'devextreme-vue/tree-list';

    const filterType = ref('exclude'); // or 'include'
    const filterValues = ref([2014]);

    function applyFilter(type, values) {
        filterType.value = type;
        filterValues.value = values;
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback, useState } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import TreeList, {
        Column
    } from 'devextreme-react/tree-list';

    export default function App() {
        const [filterType, setFilterType] = useState('exclude'); // or 'include'
        const [filterValues, setFilterValues] = useState([2014]);

        const onOptionChanged = useCallback((e) => {
            if (e.fullName === 'columns[0].filterValues') {
                setFilterValues(e.value);
            }
            if (e.fullName === 'columns[0].filterType') {
                setFilterType(e.value);
            }
        }, []);

        const applyFilter = useCallback((type, values) => {
            setFilterType(type);
            setFilterValues(values);
        }, []);

        return (
            <TreeList ... 
                onOptionChanged={onOptionChanged}>
                <Column 
                    dataField="OrderDate"
                    filterType={filterType}
                    filterValues={filterValues}
                />
            </TreeList>
        );
    }
    
---

You can use the **headerFilter**.**search**.[enabled](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/headerFilter/search/#enabled) property to enable the header filter's searching capability. The same property can be declared in a column's configuration object, in which case it controls searching in that column's header filter.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            headerFilter: { 
                visible: true,
                search: {
                    enabled: true
                }
            },
            columns: [{
                // ...
                headerFilter: { 
                    search: {
                        enabled: false
                    }
                }
            }]
        });
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-tree-list ... >
        <dxo-tree-list-header-filter [visible]="true">
            <dxo-tree-list-search [enabled]="true"></dxo-tree-list-search>
        </dxo-tree-list-header-filter>
        <dxi-tree-list-column ... >
            <dxo-tree-list-header-filter>
                <dxo-tree-list-search [enabled]="false"></dxo-tree-list-search>
            </dxo-tree-list-header-filter>
        </dxi-tree-list-column>
    </dx-tree-list>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxTreeListModule } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        standalone: true,
        imports: [DxTreeListModule]
    })
    export class AppComponent {
        // ...
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxHeaderFilter :visible="true">
                <DxSearch :enabled="true" />
            </DxHeaderFilter>
            <DxColumn ... >
                <DxHeaderFilter>
                    <DxSearch :enabled="false" />
                </DxHeaderFilter>
            </DxColumn>
        </DxTreeList>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxTreeList, {
        DxColumn,
        DxHeaderFilter,
        DxSearch
    } from 'devextreme-vue/tree-list';
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import TreeList, {
        Column,
        HeaderFilter,
        Search
    } from 'devextreme-react/tree-list';

    export default function App() {
        return (
            <TreeList ... >
                <HeaderFilter visible={true}>
                    <Search enabled={true} />
                </HeaderFilter>
                <Column ... >
                    <HeaderFilter>
                        <Search enabled={false} />
                    </HeaderFilter>
                </Column>
            </TreeList>
        );
    }
    
---

A header filter's popup menu lists all column values by default. You can group them using the **headerFilter**.[groupInterval](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/columns/headerFilter/groupInterval.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/headerFilter/#groupInterval') property if they are numbers or dates. You can also provide a custom data source for a header filter using the [dataSource](/api-reference/40%20Common%20Types/15%20grids/ColumnHeaderFilter/dataSource.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/headerFilter/#dataSource') property. Refer to the property's description for details.

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20UI%20Components/TreeList/40%20Filtering%20and%20Searching/6%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/UI_Components/TreeList/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
- [remoteOperations](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/')
