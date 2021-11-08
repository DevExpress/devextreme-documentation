#include grids-tutorial-customize-the-toolbar

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const treeList = $("#treeList").dxTreeList({
            // ...
            toolbar: {
                items: [
                    {
                        location: "after",
                        widget: "dxButton",
                        options: {
                            text: "Collapse All",
                            width: 136,
                            onClick(e) {
                                const expanding = e.component.option("text") === "Expand All";
                                treeList.option({
                                    autoExpandAll: expanding,
                                    expandedRowKeys: []
                                });
                                e.component.option("text", expanding ? "Collapse All" : "Expand All");
                            },
                        },
                    },
                    {
                        name: "addRowButton",
                        showText: "always"
                    },
                    "exportButton",
                    "columnChooserButton",
                    "searchPanel"
                ]
            },
        }).dxTreeList("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <div id="app-container">
        <dx-tree-list ...
            [autoExpandAll]="expanded"
            [(expandedRowKeys)]="expandedRowKeys">
            <!-- ... -->
            <dxo-toolbar>
                <dxi-item location="after">
                    <dx-button
                        [text]="expanded ? 'Collapse All' : 'Expand All'"
                        [width]="136"
                        (onClick)="expanded = !expanded; expandedRowKeys = []">
                    </dx-button>
                </dxi-item>
                <dxi-item name="addRowButton" showText="always"></dxi-item>
                <dxi-item name="exportButton"></dxi-item>
                <dxi-item name="columnChooserButton"></dxi-item>
                <dxi-item name="searchPanel"></dxi-item>
            </dxo-toolbar>
        </dx-tree-list>
    </div>

    <!-- tab: app.component.ts -->
    // ...
    @Component({
        // ...
    })
    export class AppComponent {
        // ...
        expanded: Boolean = true;
        expandedRowKeys: Number[] = [];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList ...
                :auto-expand-all="expanded"
                :expanded-row-keys="expandedRowKeys">
                <!-- ... -->
                <DxToolbar>
                    <DxItem location="after" template="button-template" />
                    <DxItem name="addRowButton" show-text="always" />
                    <DxItem name="exportButton" />
                    <DxItem name="columnChooserButton" />
                    <DxItem name="searchPanel" />
                </DxToolbar>
                <template #button-template>
                    <DxButton
                        :text="expanded ? 'Collapse All' : 'Expand All'"
                        :width="136"
                        @click="expanded = !expanded; expandedRowKeys = []"
                    />
                </template>
            </DxTreeList>
        </div>
    </template>

    <script>
    import {
        DxTreeList,
        // ...
        DxToolbar,
        DxItem,
    } from 'devextreme-vue/tree-list';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxTreeList,
            // ...
            DxToolbar,
            DxItem,
            DxButton
        },
        data() {
            return {
                // ...
                expanded: true,
                expandedRowKeys: []
            }
        },
        // ...
    }
    </script>

    <style>
    /* ... */
    </style>

##### React

    <!-- tab: App.js -->
    import React, { useCallback, useState } from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import './App.css';

    import {
        TreeList,
        // ...
        Toolbar,
        Item,
    } from 'devextreme-react/tree-list';
    import { Button } from 'devextreme-react/button';

    // ...

    function App() {
        // ...
        const [expanded, setExpanded] = useState(true);
        const [expandedRowKeys, setExpandedRowKeys] = useState([]);

        const onOptionChanged = useCallback((e) => {
            if(e.name === 'expandedRowKeys') {
                setExpandedRowKeys(e.value);
            }
        }, []);

        return (
            <div className="App">
                <TreeList ...
                    autoExpandAll={expanded}
                    expandedRowKeys={expandedRowKeys}
                    onOptionChanged={onOptionChanged}>
                    {/* ... */}
                    <Toolbar>
                        <Item location="after">
                            <Button
                                text={expanded ? 'Collapse All' : 'Expand All'}
                                width={136}
                                onClick={() => {
                                    setExpanded(prevExpanded => !prevExpanded)
                                    setExpandedRowKeys([]);
                                }}
                            />
                        </Item>
                        <Item name="addRowButton" showText="always" />
                        <Item name="exportButton" />
                        <Item name="columnChooserButton" />
                        <Item name="searchPanel" />
                    </Toolbar>
                </TreeList>
            </div>
        );
    }

    export default App;

---