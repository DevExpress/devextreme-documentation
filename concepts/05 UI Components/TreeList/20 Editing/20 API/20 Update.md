The [cellValue (rowIndex, visibleColumnIndex, value)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/cellValue(rowIndex_visibleColumnIndex_value).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#cellValuerowIndex_visibleColumnIndex_value') method updates a cell's value. This cell can be located using its row and column indexes. If the cell's data field is known, you can pass it instead of the column index. After a value is updated, save it to the data source by calling the [saveEditData()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/saveEditData().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#saveEditData') method.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({ ... });

        $("#updateCellButton").dxButton({
            text: "Update Cell",
            onClick: function() {
                $("#treeListContainer").dxTreeList("cellValue", 1, "Position", "CTO");
                $("#treeListContainer").dxTreeList("saveEditData");
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        updateCell () {
            this.treeList.instance.cellValue(1, "Position", "CTO");
            this.treeList.instance.saveEditData();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ... ></dx-tree-list>
    <dx-button
        text="Update Cell"
        (onClick)="updateCell()">
    </dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxTreeList ...
                :ref="treeListRefKey">
            </DxTreeList>
            <DxButton
                text="Update Cell"
                @click="updateCell"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';
    import DxButton from 'devextreme-vue/button';

    const treeListRefKey = 'myTreeList';

    export default {
        components: {
            DxTreeList,
            DxButton
        },
        data: function() {
            return {
                treeListRefKey
            }
        },
        methods: {
            updateCell() {
                this.treeList.cellValue(1, "Position", "CTO");
                this.treeList.saveEditData();
            }
        },
        computed: {
            treeList: function() {
                return this.$refs[treeListRefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.treeListRef = React.createRef();
            this.updateCell = this.updateCell.bind(this);
        }

        get treeList() {
            return this.treeListRef.current.instance();
        }

        updateCell() {
            this.treeList.cellValue(1, "Position", "CTO");
            this.treeList.saveEditData();
        }

        render() {
            return (
                <React.Fragment>
                    <TreeList ...
                        ref={this.treeListRef}>
                    </TreeList>
                    <Button
                        text="Update Cell"
                        onClick={this.updateCell}
                    />
                </React.Fragment>
            );
        }
    }
    export default App;
    
---

The TreeList UI component allows you to process an updated cell value in the **columns**.[setCellValue](/api-reference/_hidden/GridBaseColumn/setCellValue.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#setCellValue') function before this value is saved to the data source. Refer to the function's description for an example.

Call the [hasEditData()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/hasEditData().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#hasEditData') to check if there are any unsaved changes. You can save or cancel them using the [saveEditData()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/saveEditData().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#saveEditData') or [cancelEditData()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/cancelEditData().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#cancelEditData') method, respectively.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({ ... });

        $("#saveChangesButton").dxButton({
            text: "Save changes",
            onClick: function() {
                var treeList = $("#treeListContainer").dxTreeList("instance");
                if(treeList.hasEditData()) {
                    treeList.saveEditData().then(() => {
                        if(!treeList.hasEditData()) {
                            // Saved successfully
                        } else {
                            // Saving failed
                        }
                    });
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        saveEditData() {
            if(this.treeList.instance.hasEditData()) {
                this.treeList.instance.saveEditData().then(() => {
                    if(!this.treeList.instance.hasEditData()) {
                        // Saved successfully
                    } else {
                        // Saving failed
                    }
                });
            }
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
    
    <!--HTML-->
    <dx-tree-list ... ></dx-tree-list>
    <dx-button
        text="Save changes"
        (onClick)="saveEditData()">
    </dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxTreeList ...
                :ref="treeListRefKey">
            </DxTreeList>
            <DxButton
                text="Save changes"
                @click="saveChanges"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';
    import DxButton from 'devextreme-vue/button';

    const treeListRefKey = 'myTreeList';

    export default {
        components: {
            DxTreeList,
            DxButton
        },
        data: function() {
            return {
                treeListRefKey
            }
        },
        methods: {
            saveChanges() {
                if(this.treeList.hasEditData()) {
                    this.treeList.saveEditData().then(() => {
                        if(!this.treeList.hasEditData()) {
                            // Saved successfully
                        } else {
                            // Saving failed
                        }
                    });
                }
            }
        },
        computed: {
            treeList: function() {
                return this.$refs[treeListRefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.treeListRef = React.createRef();
            this.saveChanges = this.saveChanges.bind(this);
        }

        get treeList() {
            return this.treeListRef.current.instance();
        }

        saveChanges() {
            if(this.treeList.hasEditData()) {
                this.treeList.saveEditData().then(() => {
                    if(!this.treeList.hasEditData()) {
                        // Saved successfully
                    } else {
                        // Saving failed
                    }
                });
            }
        }

        render() {
            return (
                <React.Fragment>
                    <TreeList ...
                        ref={this.treeListRef}>
                    </TreeList>
                    <Button
                        text="Save changes"
                        onClick={this.saveChanges}
                    />
                </React.Fragment>
            );
        }
    }
    export default App;
    
---

#####See Also#####
#include common-link-callmethods
