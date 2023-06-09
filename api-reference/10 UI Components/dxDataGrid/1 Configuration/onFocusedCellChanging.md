---
id: dxDataGrid.Options.onFocusedCellChanging
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the focused cell changes. Applies only to cells in data or group rows.

##### param(e): FocusedCellChangingEvent
Information about the event that caused the function's execution.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/CustomizeKeyboardNavigation/"
}

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
