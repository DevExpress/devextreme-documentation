The column chooser allows a user to change the set of columns at runtime. It is configured using the [columnChooser](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnChooser '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/') object and may operate in two [modes](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnChooser/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/#mode'): the default drag and drop mode and the select mode designed for touch devices.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columnChooser: {
                enabled: true,
                mode: "dragAndDrop" // or "select"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-column-chooser
            [enabled]="true"
            mode="dragAndDrop"> <!-- or "select" -->
        </dxo-column-chooser>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
        <DxDataGrid ... >
            <DxColumnChooser
                :enabled="true"
                mode="dragAndDrop" <!-- or "select" -->
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumnChooser
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumnChooser
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        ColumnChooser
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <ColumnChooser
                        enabled={true}
                        mode="dragAndDrop" {/* or "select" */}
                    />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

<img src="/Content/images/doc/20_2/DataGrid/visual_elements/column-chooser_draganddrop-mode.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid ColumnChooser" style="margin-right:60px" /> <img src="/Content/images/doc/20_2/DataGrid/visual_elements/column-chooser_select-mode.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid ColumnChooser" style="margin-right:90px" />

Set a column's [allowHiding](/api-reference/_hidden/GridBaseColumn/allowHiding.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowHiding') option to **false** if it should never be hidden. For columns whose headers should never appear in the column chooser, set the [showInColumnChooser](/api-reference/_hidden/GridBaseColumn/showInColumnChooser.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#showInColumnChooser') option to **false**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columnChooser: { enabled: true },
            columns: [{
                // ...
                allowHiding: false // cannot be hidden
            }, {
                // ...
                showInColumnChooser: false // does not appear in the column chooser even when hidden
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-column-chooser [enabled]="true"></dxo-column-chooser>
        <dxi-column ...
            [allowHiding]="false"> <!-- cannot be hidden -->
        </dxi-column>
        <dxi-column ...
            [showInColumnChooser]="false"> <!-- does not appear in the column chooser even when hidden -->
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
        <DxDataGrid ... >
            <DxColumnChooser
                :enabled="true"
            />
            <DxColumn ...
                :allow-hiding="false" <!-- cannot be hidden -->
            />
            <DxColumn ...
                :show-in-column-chooser="false" <!-- does not appear in the column chooser even when hidden -->
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumnChooser,
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumnChooser,
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        ColumnChooser,
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <ColumnChooser
                        enabled={true}
                    />
                    <Column ...
                        allowHiding={false} {/* cannot be hidden */}
                    />
                    <Column ...
                        showInColumnChooser={false}> {/* does not appear in the column chooser even when hidden */}
                    />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

Call the [showColumnChooser()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/showColumnChooser().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#showColumnChooser') or [hideColumnChooser()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/hideColumnChooser().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#hideColumnChooser') method to control the column chooser programmatically.

---
##### jQuery

    <!--JavaScript-->
    var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.showColumnChooser();
    dataGrid.hideColumnChooser();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        showColumnChooser () {
            this.dataGrid.instance.showColumnChooser();
        };
        hideColumnChooser () {
            this.dataGrid.instance.hideColumnChooser();
        };
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
            :ref="dataGridRefKey">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    const dataGridRefKey = "my-data-grid";

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return() {
                dataGridRefKey
            }
        },
        methods: {
            showColumnChooser() {
                this.dataGrid.showColumnChooser();
            },
            hideColumnChooser() {
                this.dataGrid.hideColumnChooser();
            }
        },
        computed: {
            dataGrid: function() {
                return this.$refs[dataGridRefKey].instance;
            }
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
        constructor(props) {
            super(props);
            this.dataGridRef = React.createRef();

            this.showColumnChooser = this.showColumnChooser.bind(this);
            this.hideColumnChooser = this.hideColumnChooser.bind(this);
        }

        showColumnChooser() {
            this.dataGrid.showColumnChooser();
        }

        hideColumnChooser() {
            this.dataGrid.hideColumnChooser();
        }

        get dataGrid() {
            return this.dataGridRef.current.instance;
        }

        render() {
            return (
                <DataGrid ref={this.dataGridRef}>
                    {/* ... */ }
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#####See Also#####
- [Hide a Column Using the API](/concepts/05%20Widgets/DataGrid/15%20Columns/35%20Hide%20a%20Column%20Using%20the%20API.md '/Documentation/Guide/Widgets/DataGrid/Columns/Hide_a_Column_Using_the_API/')
- [Adaptability](/concepts/05%20Widgets/DataGrid/15%20Columns/50%20Adaptability.md '/Documentation/Guide/Widgets/DataGrid/Columns/Adaptability/')
- [Column Fixing](/concepts/05%20Widgets/DataGrid/15%20Columns/30%20Column%20Fixing.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Fixing/')