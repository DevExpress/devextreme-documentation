---
id: GridBaseColumn.showEditorAlways
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the column displays its values using editors.

---
A column cell has normal and editing states. In a normal state, the cell value is text. In the editing state, the cell contains an editor that indicates the cell value and allows a user to edit it. In certain cases, a viewer reads the cell value easier if it is indicated by an editor even in the normal state. For example, boolean values are more comprehensible when they are indicated by check boxes. To display editors in cells permanently, set the **showEditorAlways** property to **true**.

[note]

This property has the following peculiarities.

- The default value of this property depends on the column's [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'). For boolean columns, it is **true**; for columns of other types - **false**.
- If you use templates, setting this property to **true** means that the column will always use [editCellTemplate](/api-reference/_hidden/dxTreeListColumn/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate') instead of [cellTemplate](/api-reference/_hidden/dxTreeListColumn/cellTemplate.md '{basewidgetpath}/Configuration/columns/#cellTemplate').

- The **cellInfo.setValue** function does not work when the **showEditorAlways** property value is **true** but you do not switch the component to edit mode.

[/note]

The following example illustrates how this property works for the Boolean and Date data types:

![DevExtreme DataGrid TreeList - showEditorAlways](/images/DataGrid/showEditorAlways.png)

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [
                { 
                    dataField: "BirthDate", 
                    dataType: 'date'
                },
                { 
                    dataField: "OrderDate", 
                    dataType: 'date',
                    showEditorAlways: true
                },
                //...
                { 
                    dataField: "CheckedState", 
                    dataType: 'boolean',
                    showEditorAlways: false
                },
                { 
                    dataField: "AvailabilityState", 
                    dataType: 'boolean'
                },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column dataField="BirthDate" dataType="date"></dxi-column>
        <dxi-column dataField="OrderDate" dataType="date" showEditorAlways="true"></dxi-column>
        <dxi-column dataField="CheckedState" dataType="boolean" showEditorAlways="false"></dxi-column>
        <dxi-column dataField="AvailabilityState" dataType="boolean" ></dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
            <DxColumn
                data-field="BirthDate"
                data-type="date"
            />
            <DxColumn
                data-field="OrderDate"
                data-type="date"
                :show-editor-always="true"
            />
            <DxColumn
                data-field="CheckedState"
                data-type="boolean"
                :show-editor-always="false"
            />
            <DxColumn
                data-field="AvailabilityState"
                data-type="boolean"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column
    } from 'devextreme-react/{widget-name}';

    export default function App() {
        return (
            <{WidgetName} ... >
                <Column
                    dataField="BirthDate"
                    dataType="date"
                />
                <Column
                    dataField="OrderDate"
                    dataType="date"
                    showEditorAlways={true}
                />
                <Column
                    dataField="CheckedState"
                    dataType="boolean"
                    showEditorAlways={false}
                />
                <Column
                    dataField="AvailabilityState"
                    dataType="boolean"
                />
            </{WidgetName}>
        );
    }
    
---


#####See Also#####
- **columns[]**.[editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '{basewidgetpath}/Configuration/columns/#editorOptions')