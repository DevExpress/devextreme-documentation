The Gantt component allows users to filter columns by filter row values.

To apply filter criteria to a column, users enter a value in its filter row cell or select it with a specific editor.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering FilterRow](/images/Gantt/Visual_elements/Filter_row.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/FilterRow/"
}

Set the **filterRow**.[visible](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/filterRow/#visible) property to **true** to display the filter row.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#gantt").dxGantt({
            // ...
            filterRow: { visible: true },
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-gantt ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <!--...-->
    </dx-gantt>

    <!--TypeScript-->
    import { DxGanttModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxGanttModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxFilterRow :visible="true" />
            <!--...-->
        </DxGantt>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import {
      DxGantt,
      DxFilterRow,
      // ...
    } from 'devextreme-vue/gantt';

    export default {
      components: {
        DxGantt,
        DxFilterRow,
        // ...
      }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import Gantt, {
      Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, FilterRow,
    } from 'devextreme-react/gantt';

    class App extends React.Component {
        render() {
            return (
                <Gantt ... >
                    <FilterRow visible={true} />
                    <!--...-->
                </Gantt>
            );
        }
    }

---

The filter row contains the magnifier icon in its cells. Users click this icon to select the desired filter operation. Set the [showOperationChooser](/Documentation/21_2/ApiReference/UI_Components/dxGantt/Configuration/filterRow/#showOperationChooser) property to **false** for a column to hide the magnifier icon. 

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering FilterRow](/images/Gantt/Visual_elements/Filter_row_operation_chooser.png)

The component automatically applies an entered or selected filter. To apply the filter by click on the "*Apply Filter*" button, set the **filterRow**.[applyFilter](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/filterRow/#applyFilter) property to "*onClick*".

![DevExtreme HTML5 JavaScript jQuery Knockout Angular Gantt Filtering FilterRow](/images/Gantt/Visual_elements/Filter_row_applyFilter_button.png)

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#gantt").dxGantt({
            // ...
            filterRow: { 
                visible: true,
                applyFilter: "onClick",
            },
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-gantt ... >
        <dxo-filter-row [visible]="true" applyFilter="onClick"></dxo-filter-row>
        <!--...-->
    </dx-gantt>

    <!--TypeScript-->
    import { DxGanttModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxGanttModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxFilterRow :visible="true"
                         applyFilter="onClick" />
            <!--...-->
        </DxGantt>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import {
      DxGantt,
      DxFilterRow,
      // ...
    } from 'devextreme-vue/gantt';

    export default {
      components: {
        DxGantt,
        DxFilterRow,
        // ...
      }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import Gantt, {
      Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, FilterRow,
    } from 'devextreme-react/gantt';

    class App extends React.Component {
        render() {
            return (
                <Gantt ... >
                    <FilterRow visible={true} applyFilter="onClick"/>
                    <!--...-->
                </Gantt>
            );
        }
    }

---

The **Gantt** allows you to set initial filter settings in code. 

Specify a column's [filterValue](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#filterValue) property to apply the filter criteria to the column. Otherwise, to disable a filter row cell for a specific column, set its [allowFiltering](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#allowFiltering) property to **false**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#gantt").dxGantt({
            // ...
            columns: [{
                dataField: 'title',
                caption: 'Subject',
                filterValue: 'Scope'
            }, {
                dataField: 'start',
                caption: 'Start Date',
                allowFiltering: false
            }, { 
            //...
            }],
            filterRow: { 
                visible: true
            },      
          });
    });

##### Angular
    
    <!--HTML-->
    <dx-gantt ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column dataField="title" caption="Subject" filterValue="Scope"></dxi-column>
        <dxi-column dataField="start" caption="Start Date" dataType="date" [allowFiltering]="false"></dxi-column>
        <!--...-->
    </dx-gantt>

    <!--TypeScript-->
    import { DxGanttModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxGanttModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxFilterRow :visible="true" />
            <DxColumn
                data-field="title"
                caption="Subject"
                filterValue="Scope"
            />
            <DxColumn
                data-field="start"
                caption="Start Date"
                :allowFiltering="false"
            />
            <!--...-->
        </DxGantt>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import {
      DxGantt,
      DxFilterRow,
      // ...
    } from 'devextreme-vue/gantt';

    export default {
      components: {
        DxGantt,
        DxFilterRow,
        // ...
      }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import Gantt, {
      Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, FilterRow,
    } from 'devextreme-react/gantt';

    class App extends React.Component {
        render() {
            return (
                <Gantt ... >
                    <FilterRow visible={true} />
                    <Column dataField="title" caption="Subject" filterRow="Scope" />
                    <Column dataField="start" caption="Start Date" allowFiltering={false} />
                    <!--...-->
                </Gantt>
            );
        }
    }

---

The **Gantt** supports a predefined set of filter operations for each data type. 

Underlying [dataType](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#dataType) defines editor types used within filter row cells:

{|
|-
! **dataType**
! **Editor**
|-

| *"string", "number", "object"*
| Text box
|-

| *"boolean"*
| Drop-down list 
|-

| *"date"*
| Date picker
|-

| *"datetime"*
| Date and time picker 
|-
|}

You can specify the necessary filter operations for each column with the [filterOperations](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#filterOperations) property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#gantt").dxGantt({
            // ...
            columns: [{
                dataField: 'title',
                caption: 'Subject',
                filterOperations: ["startswith", "endswith"]
            }, { 
            //...
            }],
            filterRow: { 
                visible: true
            },      
          });
    });

##### Angular
    
    <!--HTML-->
    <dx-gantt ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column dataField="title" caption="Subject" [filterOperations]="['startswith', 'endswith']"></dxi-column>
        <!--...-->
    </dx-gantt>

    <!--TypeScript-->
    import { DxGanttModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxGanttModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxFilterRow :visible="true" />
            <DxColumn
                data-field="title"
                caption="Subject"
                :filter-operations="['startswith', 'endswith']"
            />
            <!--...-->
        </DxGantt>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import {
      DxGantt,
      DxFilterRow,
      // ...
    } from 'devextreme-vue/gantt';

    export default {
      components: {
        DxGantt,
        DxFilterRow,
        // ...
      }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import Gantt, {
      Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, FilterRow,
    } from 'devextreme-react/gantt';

    class App extends React.Component {
        render() {
            return (
                <Gantt ... >
                    <FilterRow visible={true} />
                    <Column dataField="title" caption="Subject" filterOperations={['startswith', 'endswith']} />
                    <Column dataField="start" caption="Start Date" />
                    <!--...-->
                </Gantt>
            );
        }
    }

---

Call the [columnOption](/Documentation/ApiReference/UI_Components/dxGantt/Methods/#columnOptionid_options) method for the corresponding column to change its specified filter settings. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#gantt").dxGantt({
            // ...
            columns: [{
                dataField: 'title',
                caption: 'Subject',
                filterOperations: ['startswith', 'endswith'],
                filterValue: 'Scope'
            }, { 
            //...
            }],
            filterRow: { 
                visible: true
            },      
          });

        $("#gantt").dxGantt("instance").columnOption("Subject", {
            selectedFilterOperation: "contains",
            filterValue: "Analysis"
        }
    });

##### Angular
    
    <!--HTML-->
    <dx-gantt ... >
        <dxi-column dataField="title" caption="Subject" filterValue="Scope" [filterOperations]="['startswith', 'endswith']></dxi-column>
        <!--...-->
    </dx-gantt>

    <dx-button text="Update column options" (onClick)="setNewOptions()"></dx-button>

    <!--TypeScript-->
    import { DxGanttModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxGanttComponent, { static: false }) gantt: DxGanttComponent
        
        setNewOptions() {
            this.gantt.instance.columnOption("Subject", {
                selectedFilterOperation: "contains",
                filterValue: "Analysis"
            });
        }
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxGanttModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxFilterRow :visible="true" />
            <DxColumn
                data-field="title"
                caption="Subject"
                :filter-operations="['startswith', 'endswith']",
                filterValue="Scope"
            />
            <!--...-->
        </DxGantt>
        <DxButton text="Update column options" @click="setNewOptions"/>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import {
      DxGantt,
      DxFilterRow,
      // ...
    } from 'devextreme-vue/gantt';

    export default {
        components: {
            DxGantt,
            DxFilterRow,
            // ...
        }
        methods: {
            saveGanttInstance: function(e) {
                this.GanttInstance = e.component;
            },
            setNewOptions: function() {
                this.GanttInstance.columnOptions("Subject", {
                    selectedFilterOperation: "contains",
                    filterValue: "Analysis"
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import Gantt, {
      Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, FilterRow,
    } from 'devextreme-react/gantt';

    class App extends React.Component {

        constructor(props) {
            super(props);
 
            this.saveGanttInstance = this.saveGanttInstance.bind(this);
            this.setNewOptions = this.setNewOptions.bind(this);
        }

        saveGanttInstance(e) {
            this.ganttInstance = e.component;
        }
 
        setNewOptions() {
            this.ganttInstance.columnOption("Subject", {
                selectedFilterOperation: "contains",
                filterValue: "Analysis"
            });
        }

        render() {
            return (
                <Gantt onInitialized={this.saveGanttInstance} ... >
                    <FilterRow visible={true} />
                    <Column dataField="title" caption="Subject" filterOperations = {['startswith', 'endswith']} />
                    <Column dataField="start" caption="Start Date" />
                    <!--...-->
                </Gantt>
                <Button text="Update column options" onClick={this.setNewOptions} />
            );
        }
    }

---