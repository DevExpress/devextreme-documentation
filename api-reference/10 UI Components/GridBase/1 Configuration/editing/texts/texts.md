---
id: GridBase.Options.editing.texts
type: Object
---
---
##### shortDescription
Contains properties that specify texts for editing-related UI elements.

---
The following code shows the **editing**.**texts** declaration syntax:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            editing: {
                // ...
                texts: {
                    deleteRow: "Remove"
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-editing ... >
            <dxo-texts
                deleteRow="Remove">
            </dxo-texts>
        </dxo-editing>
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxEditing ... >
                <DxTexts
                    delete-row="Remove"
                />
            </DxEditing>
        </Dx{WidgetName}> 
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxEditing,
        DxTexts
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxEditing,
            DxTexts
        },
        data() {
            // ...
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Editing,
        Texts
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ... >
                    <Editing>
                        <Texts
                            deleteRow="Remove"
                        />
                    </Editing>
                </{WidgetName}>
            );
        }
    }
    export default App;

---