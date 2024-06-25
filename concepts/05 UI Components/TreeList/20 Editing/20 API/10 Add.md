Use the [addRow()](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/addRow().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#addRow') method to add an empty row.

---
##### jQuery

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("addRow");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        addRow () {
           this.treeList.instance.addRow();
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
            ref="myTreeList">
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
        },
        methods: {
            addNewRow() {
                this.$refs['myTreeList'].instance.addRow();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.treeListRef = React.createRef();
            this.addNewRow = this.addNewRow.bind(this);
        }

        addNewRow() {
            this.treeListRef.current.instance().addRow();
        }

        render() {
            return (
                <TreeList ...
                    ref={this.treeListRef}>
                </TreeList>
            );
        }
    }
    export default App;
    
---

You can specify initial values for a newly added row in the [onInitNewRow](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/onInitNewRow.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onInitNewRow') event handler.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Hire_Date",
                dataType: "date"
            },
                // ...
            ],
            onInitNewRow: function(e) {
                e.data.Hire_Date = new Date();
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        (onInitNewRow)="onInitNewRow($event)">
        <dxi-column dataField="Hire_Date" dataType="date"></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onInitNewRow (e) {
            e.data.Hire_Date = new Date();
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
            @init-new-row="setHireDate">
            <DxColumn data-field="Hire_Date" data-type="date" />
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
        methods: {
            setHireDate(e) {
                e.data.Hire_Date = new Date();
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
        setHireDate(e) {
            e.data.Hire_Date = new Date();
        }

        render() {
            return (
                <TreeList ...
                    onInitNewRow={this.setHireDate}>
                    <Column dataField="Hire_Date" dataType="date" />
                </TreeList>
            );
        }
    }
    export default App;
    
---

#####See Also#####
#include common-link-callmethods