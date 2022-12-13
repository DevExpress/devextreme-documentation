---
id: dxFilterBuilder.Options.onEditorPreparing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before an editor is created.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the creation of the editor.    
Set it to **true** and implement a custom editor.

##### field(e.component): dxFilterBuilder
The UI component's [instance](/api-reference/10%20UI%20Components/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Methods/#instance').

##### field(e.dataField): String
The data field's name.

##### field(e.disabled): Boolean
Indicates whether the editor is disabled.

##### field(e.editorElement): DxElement
#include common-ref-elementparam with { element: "editor" }

##### field(e.editorName): String
Allows you to change the editor. Accepts names of DevExtreme UI components only, for example, *"dxTextBox"*.      
Import a new editor's module when [DevExtreme modules](/concepts/Common/Modularity/01%20Link%20Modules/10%20Use%20Webpack.md '/Documentation/Guide/Common/Modularity/') are used.

##### field(e.editorOptions): Object
Gets and sets the editor configuration.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.filterOperation): String
The applied filter operation.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(e.rtlEnabled): Boolean
Indicates whether the editor uses right-to-left representation.

##### field(e.setValue(newValue)): any
A method you should call to change the field's value after the editor's value changes.

##### field(e.updateValueTimeout): Number
Gets and sets the delay between when a user stops typing the field value and when the change is applied.

##### field(e.value): any
<!-- %field(e.value)% -->

##### field(e.width): Number
The editor's width.

---
The FilterBuilder offers users different editors used to enter a value depending on the field's [dataType](/api-reference/_hidden/dxFilterBuilderField/dataType.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#dataType'): [Calendar](/api-reference/10%20UI%20Components/dxCalendar '/Documentation/ApiReference/UI_Components/dxCalendar/'), [TextBox](/api-reference/10%20UI%20Components/dxTextBox '/Documentation/ApiReference/UI_Components/dxTextBox/'), [SelectBox](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/'), and so on. Use this function to customize those default editors or substitute them for other editors. 

In the following code, the DevExtreme [TextArea](/Documentation/Guide/UI_Components/TextArea/Getting_Started_with_TextArea/) UI component replaces the default editor. Note that the **onValueChanged** function declaration ends with the **setValue(newValue, newText)** method's call. This method updates the value.

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