When adapting to a small container or screen, the **DataGrid** can hide columns. To enable this feature, set the [columnHidingEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnHidingEnabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnHidingEnabled') to **true**. Columns have hiding priorities - zero-based indexes that determine the order in which they are hidden. These indexes ascend from right to left by default, which means that the rightmost column is always at risk of being hidden. Use the [hidingPriority](/api-reference/_hidden/GridBaseColumn/hidingPriority.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#hidingPriority') property to specify a custom hiding priority and cancel the default priorities.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columnHidingEnabled: true,
            columns: [{
                // ...
                hidingPriority: 2 // a valuable column
            }, {
                // ...
                hidingPriority: 1 // a not-so-valuable column 
            }, {
                // ...
                hidingPriority: 0 // a first-to-hide column
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... 
        [columnHidingEnabled]="true">
        <dxi-column [hidingPriority]="2" ... ></dxi-column> <!-- a valuable column -->
        <dxi-column [hidingPriority]="1" ... ></dxi-column> <!-- a not-so-valuable column -->
        <dxi-column [hidingPriority]="0" ... ></dxi-column> <!-- a first-to-hide column -->
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
        <DxDataGrid ...
            :column-hiding-enabled="true">
            <DxColumn :hiding-priority="2" ... /> <!-- a valuable column -->
            <DxColumn :hiding-priority="1" ... /> <!-- a not-so-valuable column -->
            <DxColumn :hiding-priority="0" ... /> <!-- a first-to-hide column -->
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
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
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ...
                    columnHidingEnabled={true}>
                    <Column defaultHidingPriority={2} ... /> {/* a valuable column */}
                    <Column defaultHidingPriority={1} ... /> {/* a not-so-valuable column */}
                    <Column defaultHidingPriority={0} ... /> {/* a first-to-hide column */}
                </DataGrid>
            );
        }
    }
    export default App;
    
---

[note]

The table layout does not automatically adapt to changes made in the UI component's container at runtime. Therefore, if you enable a user to resize the container, call the [updateDimensions()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/updateDimensions().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#updateDimensions') method after each resizing to render the **DataGrid** in the new size.

---
##### jQuery

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("updateDimensions");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) grid: DxDataGridComponent;
        renderDataGrid () {
            this.grid.instance.updateDimensions();
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
            renderDataGrid() {
                this.dataGrid.updateDimensions();
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

            this.renderDataGrid = this.renderDataGrid.bind(this);
        }

        renderDataGrid() {
            this.dataGrid.updateDimensions();
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

[/note]

Data from hidden columns is still available in adaptive detail rows. A user can expand or collapse these rows by clicking the ellipsis buttons in the adaptive column.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Adaptability](/images/DataGrid/visual_elements/adaptive-column.png)

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GridAdaptabilityOverview/",
    name: "Adaptability"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GridColumnsHidingPriority/",
    name: "Hiding Priority"
}

You can expand or collapse adaptive detail rows programmatically by calling the [expandAdaptiveDetailRow(key)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/expandAdaptiveDetailRow(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#expandAdaptiveDetailRowkey') or [collapseAdaptiveDetailRow()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/collapseAdaptiveDetailRow().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#collapseAdaptiveDetailRow') method. Note that adaptive detail rows cannot be expanded simultaneously, therefore, calling the **expandAdaptiveDetailRow(key)** method collapses the previously expanded row. To check whether a specific row is expanded, call the [isAdaptiveDetailRowExpanded(key)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/isAdaptiveDetailRowExpanded(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#isAdaptiveDetailRowExpandedkey') method.

---
##### jQuery

    <!--JavaScript-->var expandAdaptiveDetailRow = function (key, dataGridInstance) {
        if (!dataGridInstance.isAdaptiveDetailRowExpanded(key)) {
            dataGridInstance.expandAdaptiveDetailRow(key);
        }
    }

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        expandAdaptiveDetailRow (key) {
            if (!this.dataGrid.instance.isAdaptiveDetailRowExpanded(key)) {
                this.dataGrid.instance.expandAdaptiveDetailRow(key);
            }
        }
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
            expandAdaptiveDetailRow(key) {
                if (!this.dataGrid.isAdaptiveDetailRowExpanded(key)) {
                    this.dataGrid.expandAdaptiveDetailRow(key);
                }
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

            this.expandAdaptiveDetailRow = this.expandAdaptiveDetailRow.bind(this);
        }

        expandAdaptiveDetailRow(key) {
            if (!this.dataGrid.isAdaptiveDetailRowExpanded(key)) {
                this.dataGrid.expandAdaptiveDetailRow(key);
            }
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

All adaptive detail rows contain the [DevExtreme Form UI component](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Components/dxForm/'), so you can customize a row by changing the [options of this UI component](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Components/dxForm/Configuration/'). To access them, implement the [onAdaptiveDetailRowPreparing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onAdaptiveDetailRowPreparing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onAdaptiveDetailRowPreparing') event handler. For example, the following code marks the form item whose data field is *"OrderID"* as required:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onAdaptiveDetailRowPreparing: function (e) {
                for (let formItem of e.formOptions.items) {
                    if (formItem.dataField == "OrderID") {
                        formItem.isRequired = true;
                    }
                }
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onAdaptiveDetailRowPreparing (e) {
            for (let formItem of e.formOptions.items) {
                if (formItem.dataField == "OrderID") {
                    formItem.isRequired = true;
                }
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        (onAdaptiveDetailRowPreparing)="onAdaptiveDetailRowPreparing($event)">
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            :@adaptive-detail-row-preparing="onAdaptiveDetailRowPreparing">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            onAdaptiveDetailRowPreparing(e) {
                for (let formItem of e.formOptions.items) {
                    if (formItem.dataField == 'OrderID') {
                        formItem.isRequired = true;
                    }
                }
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

            // Uncomment the line below if the function should be executed in the component's context
            // this.onAdaptiveDetailRowPreparing = this.onAdaptiveDetailRowPreparing.bind(this);
        }

        onAdaptiveDetailRowPreparing(e) {
            for (let formItem of e.formOptions.items) {
                if (formItem.dataField == 'OrderID') {
                    formItem.isRequired = true;
                }
            }
        }

        render() {
            return (
                <DataGrid ... 
                    onAdaptiveDetailRowPreparing={this.onAdaptiveDetailRowPreparing}>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#####See Also#####
- [Column Fixing](/concepts/05%20Widgets/DataGrid/15%20Columns/30%20Column%20Fixing.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Fixing/')
- [Column Chooser](/concepts/05%20Widgets/DataGrid/15%20Columns/60%20Column%20Chooser.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Chooser/')
