---
id: GridBaseColumn.showEditorAlways
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the column displays its values in editors.

---

Set the **showEditorAlways** property to **true** to display a column cell value in an editor when a user does not edit data. For example, you can use this functionality to display Boolean data as check boxes instead of the "true/false" strings.

Behavior of the editor in a cell depends on the component's edit mode:

- The **editing**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode') property is set to *"cell"* or *"batch"*. Users can edit values directly in their cells without switching the component to edit mode.

- The **editing**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode') property is set to *"row"*, *"form"* or *"popup"*. Relevant only for Boolean values. The component displays Boolean values in read-only check boxes. Users should click the Edit button to change cell values.

[note]

This property has the following specifics:

- The default value of this property depends on the column's [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'). For Boolean columns, the default value is **true**; for columns of other types - **false**.

- The [editCellTemplate](/api-reference/_hidden/dxTreeListColumn/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate') has higher priority over the [cellTemplate](/api-reference/_hidden/dxTreeListColumn/cellTemplate.md '{basewidgetpath}/Configuration/columns/#cellTemplate') if the **showEditorAlways** property value is **true**. Relevant for all data types except Boolean.

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