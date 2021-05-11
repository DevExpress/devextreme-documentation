---
id: dxDataGrid.Options.onFocusedCellChanging
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the focused cell changes. Applies only to cells in data or group rows.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel focusing a new cell.

##### field(e.cellElement): DxElement
#include common-ref-elementparam with { element: "to-be-focused cell" }

##### field(e.columns): Array<dxDataGridColumn>
The visible columns' properties.

##### field(e.component): dxDataGrid
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.isHighlighted): Boolean
**true** if the cell is highlighted; otherwise **false**, even if the cell's row is highlighted.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.newColumnIndex): Number
The index of the column the cell that should be focused belongs to.

##### field(e.newRowIndex): Number
The index of the row the cell that should be focused belongs to.

##### field(e.prevColumnIndex): Number
The index of the previously focused cell's column.

##### field(e.prevRowIndex): Number
The index of the previously focused cell's row.

##### field(e.rows): Array<dxDataGridRowObject>
The visible rows' properties.

---
In the following code, the **onFocusedCellChanging** function is used to customize keyboard navigation within a row. The cell navigation is looped in a single row because focus moves to the row's first cell after reaching the last cell and vice versa:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onFocusedCellChanging: function (e) {
                if (e.newColumnIndex == e.prevColumnIndex) {
                    e.newColumnIndex = (e.newColumnIndex == 0 ? e.columns.length - 1 : 0)
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        onFocusedCellChanging (e) { 
            if (e.newColumnIndex == e.prevColumnIndex) {
                e.newColumnIndex = (e.newColumnIndex == 0 ? e.columns.length - 1 : 0)
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ...
        (onFocusedCellChanging)="onFocusedCellChanging($event)">
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            @focused-cell-changing="onFocusedCellChanging"
        > 
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        methods: {
            onFocusedCellChanging(e) {
                if (e.newColumnIndex == e.prevColumnIndex) {
                    e.newColumnIndex = (e.newColumnIndex == 0 ? e.columns.length - 1 : 0);
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ...
                    onFocusedCellChanging={this.onFocusedCellChanging}
                >
                </{WidgetName}>
            );
        }

        onFocusedCellChanging(e) { 
            if (e.newColumnIndex == e.prevColumnIndex) {
                e.newColumnIndex = (e.newColumnIndex == 0 ? e.columns.length - 1 : 0);
            }
        }
    }
    export default App;

---

#####See Also#####
- [focusedRowIndex](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowIndex.md '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#focusedRowIndex') | [focusedRowKey](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowKey.md '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#focusedRowKey')
- [focusedColumnIndex](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedColumnIndex.md '/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#focusedColumnIndex')
