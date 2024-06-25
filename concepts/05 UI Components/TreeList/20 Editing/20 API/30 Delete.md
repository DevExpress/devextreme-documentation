Call the [deleteRow(rowIndex)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/deleteRow(rowIndex).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#deleteRowrowIndex') method to delete a specific row from the data source. This method invokes a confirmation dialog that allows a user to cancel deletion. The [confirmDelete](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/confirmDelete.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#confirmDelete') property allows you to hide this dialog instantly deleting the selected row from the data source.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var treeList = $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                mode: "row", 
                allowDeleting: true,
                confirmDelete: false
            }
        }).dxTreeList("instance");

        $("#deleteRowButton").dxButton({
            text: "Delete Row",
            onClick: function() {
                // Deletes the second row
                treeList.deleteRow(1);
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list>
        <dxo-editing 
            mode="row"
            [confirmDelete]="false"
            [allowDeleting]="true">
        </dxo-editing>
    </dx-tree-list>
    <dx-button
        text="Delete Row"
        (onClick)="deleteRow()">
    </dx-button>

    <!--TypeScript-->
    import { DxTreeListModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        deleteRow () {
            // Deletes the second row
            this.treeList.instance.deleteRow(1);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList
            ref="treeList">
            <DxEditing
                mode="row"
                :allow-deleting="true"
                :confirm-delete="false"
            />
        </DxTreeList>
        <DxButton
            text="Delete Row"
            @click="deleteRow"
        />
    </template>

    <script>
    import { DxTreeList, DxEditing } from 'devextreme-vue/tree-list';

    import DxButton from 'devextreme-vue/button';

    export default {
        components: {
            DxTreeList, 
            DxEditing,
            DxButton
        },
        methods: {
            deleteRow() {
                this.$refs.treeList.instance.deleteRow(1);
            }
        },
        data() {}
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import { TreeList, Editing } from 'devextreme-react/tree-list';
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.treeListRef = React.createRef();
            this.deleteRow = this.deleteRow.bind(this);
        }
        get treeList() {
            return this.treeListRef.current.instance();
        }

        deleteRow() {
            this.treeList.deleteRow(1);
        }

        render() {
            return (
                <TreeList  
                    ref={this.treeListRef}>
                    <Editing
                        mode="row"
                        confirmDelete={false}
                        allowDeleting={true} 
                    />
                </TreeList>
                <Button
                    text="Delete Row"
                    onClick={this.deleteRow}
                />
            );
        }
    }
    export default App;
    
---

Note that in the [batch mode](/concepts/05%20UI%20Components/TreeList/20%20Editing/10%20User%20Interaction/30%20Batch%20Mode.md '/Documentation/Guide/UI_Components/TreeList/Editing/#User_Interaction/Batch_Mode') a row is only marked as deleted. To save changes, call the [saveEditData()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/saveEditData().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#saveEditData') method. Calling the [undeleteRow(rowIndex)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/undeleteRow(rowIndex).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#undeleteRowrowIndex') method cancels row deletion.

---
##### jQuery

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("undeleteRow", 1);

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        undeleteRow () {
            this.treeList.instance.undeleteRow(1);
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
        <DxTreeList
            ref="treeList">
        </DxTreeList>
    </template>

    <script>
    import { DxTreeList } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
        },
        methods: {
            undeleteRow() {
                this.$refs.treeList.instance.undeleteRow(1);
            }
        },
        data() {}
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import { TreeList } from 'devextreme-react/tree-list';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.treeListRef = React.createRef();
            this.undeleteRow = this.undeleteRow.bind(this);
        }
        get treeList() {
            return this.treeListRef.current.instance();
        }

        undeleteRow() {
            this.treeList.undeleteRow(1);
        }

        render() {
            return (
                <TreeList  
                    ref={this.treeListRef}
                />
            );
        }
    }
    export default App;    

---

#####See Also#####
#include common-link-callmethods
