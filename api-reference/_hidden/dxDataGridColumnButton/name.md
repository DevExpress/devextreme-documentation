---
id: dxDataGridColumnButton.name
acceptValues: 'cancel' | 'delete' | 'edit' | 'save' | 'undelete'
type: String
---
---
##### shortDescription
The name used to identify a built-in button.

---
To configure a built-in button, assign its name to this property. The other properties in the object configure the button. For example, the following code adds a custom CSS class to the **Save** button:

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                type: "buttons",
                buttons: [{
                    name: "save",
                    cssClass: "my-class"
                }]
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column type="buttons">
            <dxi-button
                name="save"
                cssClass="my-class">
            </dxi-button>
        </dxi-column>
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
            <DxColumn type="buttons">
                <DxButton
                    name="save"
                    css-class="my-class"
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

    export default function App() {
        return (
            <{WidgetName} ... >
                <Column type="buttons">
                    <Button
                        name="save"
                        cssClass="my-class"
                    />
                </Column>
            </{WidgetName}>
        );
    }
    
---