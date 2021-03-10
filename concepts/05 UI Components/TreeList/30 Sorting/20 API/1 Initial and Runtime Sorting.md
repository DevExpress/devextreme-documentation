Rows are sorted according to the data source by default. Set the [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#sortOrder') property to sort rows in the required order. Specify the [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#sortIndex') property as well to sort by multiple columns. Otherwise, each sorted column gets a sort index according to its position in the [columns](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/') array. For example, the following code sorts rows first by the *"Surname"*, then by the *"Name"* column:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [
                { dataField: "Name",    sortIndex: 1, sortOrder: "asc" },
                { dataField: "Surname", sortIndex: 0, sortOrder: "asc" },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="Name"    [sortIndex]="1" sortOrder="asc"></dxi-column>
        <dxi-column dataField="Surname" [sortIndex]="0" sortOrder="asc"></dxi-column>
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
        <DxTreeList>
            <DxColumn
                data-field="City"
                :sort-index="1"
                sort-order="asc"
            />
            <DxColumn
                data-field="Country"
                :sort-index="0"
                sort-order="asc"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeList, DxColumn } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TreeList, Column } from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList>
                    <Column
                        dataField="City"
                        defaultSortIndex={1}
                        defaultSortOrder="asc" />
                    <Column
                        dataField="Country"
                        defaultSortIndex={0}
                        defaultSortOrder="asc" />
                </TreeList>
            );
        }
    }
    export default App;
    
---

Change the **sortOrder** and **sortIndex** properties using the [columnOption](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#columnOptionid_optionName_optionValue') method to sort at runtime.

---
##### jQuery

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.columnOption("Surname", {
        sortOrder: "desc",
        sortIndex: 2
    });

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        sortBySurnames () {
            this.treeList.instance.columnOption("Surname", {
                sortOrder: "desc",
                sortIndex: 2
            });
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
        <DxTreeList ...>
            <DxColumn
                data-field="Country"
                v-model:sort-order="countrySortOrder"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeList, DxColumn } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn
        },
        data() {
            return {
                countrySortOrder: "asc"
            }
        },
        methods: {
            sortByCountries(order) {
                this.countrySortOrder = order;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TreeList, Column } from 'devextreme-react/tree-list';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                countrySortOrder: "asc"
            };
        }

        render() {
            return (
                <TreeList ...
                    onOptionChanged={this.onOptionChanged}>
                    <Column
                        dataField="Country"
                        sortOrder={this.state.countrySortOrder} />
                </TreeList>
            );
        }

        sortByCountries = (order) => {
            this.setState({
                countrySortOrder: order
            });
        }

        onOptionChanged = (e) => {
            if (e.fullName === "columns[0].sortOrder") {
                this.sortByCountries(e.value);
            }
        }
    }
    export default App;
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/MultipleSorting/"
}
