---
id: dxDataGridColumnButton.visible
type: Boolean | function(options)
default: true
---
---
##### shortDescription
Specifies the button's visibility.

##### param(options): Object
Information about the row and column that contain the button.

##### field(options.column): dxDataGridColumn
The column's properties.

##### field(options.component): dxDataGrid
The UI component's instance.

##### field(options.row): dxDataGridRowObject
The row's properties.

##### return: Boolean
**true** if the button should be visible; otherwise, **false**.

---
Use the function to show or hide the button for specific rows. For example, the UI component lists online orders and allows users to edit them. The **Cancel** button should allow users to cancel their orders. However, completed orders should not be canceled. The **visible** function in this case may look as follows:

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                type: "buttons",
                buttons: [{
                    text: "Cancel",
                    visible: function (e) {
                        return !e.row.isEditing && !e.row.data.isCompleted;
                    }
                }]
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column type="buttons">
            <dxi-button
                text="Cancel"
                [visible]="isCancelButtonVisible">
            </dxi-button>
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        isCancelButtonVisible (e) {
            return !e.row.isEditing && !e.row.data.isCompleted;
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn type="buttons">
                <DxButton
                    text="Cancel"
                    :visible="isCancelButtonVisible"
                />
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn,
        DxButton
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxButton
        },
        // ...
        methods: {
            isCancelButtonVisible (e) {
                return !e.row.isEditing && !e.row.data.isCompleted;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column,
        Button
    } from 'devextreme-react/{widget-name}';

    function isCancelButtonVisible (e) {
        return !e.row.isEditing && !e.row.data.isCompleted;
    }

    export default function App() {
        return (
            <{WidgetName} ... >
                <Column type="buttons">
                    <Button
                        text="Cancel"
                        visible={isCancelButtonVisible}
                    />
                </Column>
            </{WidgetName}>
        );
    }
    
---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CommandColumnCustomization/"
}