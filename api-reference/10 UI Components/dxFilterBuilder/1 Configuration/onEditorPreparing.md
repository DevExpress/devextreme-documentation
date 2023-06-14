---
id: dxFilterBuilder.Options.onEditorPreparing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before an editor is created.

##### param(e): EditorPreparingEvent
Information about the event.

---
The FilterBuilder offers users different editors used to enter a value depending on the field's [dataType](/api-reference/_hidden/dxFilterBuilderField/dataType.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#dataType'): [Calendar](/api-reference/10%20UI%20Components/dxCalendar '/Documentation/ApiReference/UI_Components/dxCalendar/'), [TextBox](/api-reference/10%20UI%20Components/dxTextBox '/Documentation/ApiReference/UI_Components/dxTextBox/'), [SelectBox](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/'), and so on. Use this function to customize those default editors or substitute them for other editors. 

In the following code, the DevExtreme [TextArea](/concepts/05%20UI%20Components/TextArea/00%20Getting%20Started%20with%20TextArea '/Documentation/Guide/UI_Components/TextArea/Getting_Started_with_TextArea/') UI component replaces the default editor. Note that the **onValueChanged** function declaration ends with the **setValue(newValue, newText)** method's call. This method updates the value.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#filterBuilder").dxFilterBuilder({
            // ...
            onEditorPreparing: function (e) {
                if (e.dataField == "description") {
                    e.editorName = "dxTextArea"; 
                    e.editorOptions.showClearButton = true;
                    e.editorOptions.onValueChanged = function(event) {
                        const value = event.value;
                        e.setValue(value.toLowerCase()); 
                    }
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onEditorPreparing (e) { 
            if (e.dataField == "description") {
                e.editorName = "dxTextArea"; 
                e.editorOptions.showClearButton = true;
                e.editorOptions.onValueChanged = (event) => {
                    const value = event.value;
                    e.setValue(value.toLowerCase()); 
                }
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-filter-builder ...
        (onEditorPreparing)="onEditorPreparing($event)">
    </dx-filter-builder>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFilterBuilder ...
            @editor-preparing="onEditorPreparing">
        </DxFilterBuilder>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxFilterBuilder from 'devextreme-vue/filter-builder';

    export default {
        components: {
            DxFilterBuilder
        },
        // ...
        methods: {
            onEditorPreparing (e) { 
                if (e.dataField == "description") {
                    e.editorName = "dxTextArea"; 
                    e.editorOptions.showClearButton = true;
                    e.editorOptions.onValueChanged = (event) => {
                        const value = event.value;
                        e.setValue(value.toLowerCase()); 
                    }
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import FilterBuilder from 'devextreme-react/filter-builder';

    class App extends React.Component {
        onEditorPreparing (e) { 
            if (e.dataField == "description") {
                e.editorName = "dxTextArea"; 
                e.editorOptions.showClearButton = true;
                e.editorOptions.onValueChanged = (event) => {
                    const value = event.value;
                    e.setValue(value.toLowerCase()); 
                }
            }
        }
        render() {
            return (
                <FilterBuilder ...
                    onEditorPreparing={this.onEditorPreparing}>
                </FilterBuilder>
            );
        }
    }
    export default App;
    
---


[note]You cannot execute this function for fields that use the [editorTemplate](/api-reference/_hidden/dxFilterBuilderField/editorTemplate.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#editorTemplate').

<!-- import * from 'api-reference\10 UI Components\dxDataGrid\1 Configuration\onEditorPreparing.md' -->