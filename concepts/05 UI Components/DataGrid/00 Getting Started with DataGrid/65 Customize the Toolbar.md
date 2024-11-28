#include grids-tutorial-customize-the-toolbar

[important] If you add custom items to the DataGrid toolbar, you must also specify the built-in items you need.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const dataGrid = $("#dataGrid").dxDataGrid({
            // ...
            toolbar: {
                items: [
                    "groupPanel",
                    {
                        location: "after",
                        widget: "dxButton",
                        options: {
                            text: "Collapse All",
                            width: 136,
                            onClick(e) {
                                const expanding = e.component.option("text") === "Expand All";
                                dataGrid.option("grouping.autoExpandAll", expanding);
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
        }).dxDataGrid("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <div id="app-container">
        <dx-data-grid ... >
            <!-- ... -->
            <dxo-grouping [autoExpandAll]="expanded"></dxo-grouping>
            <dxo-toolbar>
                <dxi-item name="groupPanel"></dxi-item>
                <dxi-item location="after">
                    <dx-button
                        [text]="expanded ? 'Collapse All' : 'Expand All'"
                        [width]="136"
                        (onClick)="expanded = !expanded">
                    </dx-button>
                </dxi-item>
                <dxi-item name="addRowButton" showText="always"></dxi-item>
                <dxi-item name="exportButton"></dxi-item>
                <dxi-item name="columnChooserButton"></dxi-item>
                <dxi-item name="searchPanel"></dxi-item>
            </dxo-toolbar>
        </dx-data-grid>
    </div>

    <!-- tab: app.component.ts -->
    // ...
    @Component({
        // ...
    })
    export class AppComponent {
        // ...
        expanded: Boolean = true;
    }

    <!-- tab: app.module.ts -->
    import {
        // ...
        DxButtonModule
    } from 'devextreme-angular';

    @NgModule({
        // ...
        imports: [
            // ...
            DxButtonModule
        ],
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid ... >
                <!-- ... -->
                <DxGrouping :auto-expand-all="expanded" />
                <DxToolbar>
                    <DxItem name="groupPanel" />
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
                        @click="expanded = !expanded"
                    />
                </template>
            </DxDataGrid>
        </div>
    </template>

    <script>
    import {
        DxDataGrid,
        // ...
        DxGrouping,
        DxToolbar,
        DxItem
    } from 'devextreme-vue/data-grid';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxDataGrid,
            // ...
            DxGrouping,
            DxToolbar,
            DxItem,
            DxButton
        },
        data() {
            return {
                // ...
                expanded: true
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
    import React, { useState } from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import './App.css';

    import {
        DataGrid,
        // ...
        Grouping,
        Toolbar,
        Item
    } from 'devextreme-react/data-grid';
    import { Button } from 'devextreme-react/button';

    // ...

    function App() {
        // ...
        const [expanded, setExpanded] = useState(true);

        return (
            <div className="App">
                <DataGrid ... >
                    {/* ... */}
                    <Grouping autoExpandAll={expanded} />
                    <Toolbar>
                        <Item name="groupPanel" />
                        <Item location="after">
                            <Button
                                text={expanded ? 'Collapse All' : 'Expand All'}
                                width={136}
                                onClick={() => setExpanded(prevExpanded => !prevExpanded)}
                            />
                        </Item>
                        <Item name="addRowButton" showText="always" />
                        <Item name="exportButton" />
                        <Item name="columnChooserButton" />
                        <Item name="searchPanel" />
                    </Toolbar>
                </DataGrid>
            </div>
        );
    }

    export default App;

---