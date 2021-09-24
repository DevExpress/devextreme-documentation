---
id: dxFilterBuilderField.editorOptions
type: any
---
---
##### shortDescription
Configures the UI component used to edit the field value.

---
Depending on the [dataType](/api-reference/_hidden/dxFilterBuilderField/editorOptions.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#editorOptions'), the FilterBuilder offers a user different UI components for editing: [TextBox](/api-reference/10%20UI%20Components/dxTextBox '/Documentation/ApiReference/UI_Components/dxTextBox/'), [DateBox](/api-reference/10%20UI%20Components/dxDateBox '/Documentation/ApiReference/UI_Components/dxDateBox/'), [Lookup](/api-reference/10%20UI%20Components/dxLookup '/Documentation/ApiReference/UI_Components/dxLookup/'), etc. In the **editorOptions** object, you can specify properties for the UI component.

Because **editorOptions** depend on the **dataType**, they cannot be typed and are not implemented as nested configuration components in Angular, Vue, and React. In these frameworks, specify **editorOptions** with an object. We recommend that you declare the object outside the configuration component in Vue and React to prevent possible issues caused by unnecessary re-rendering.

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-filter-builder ... >
        <dxi-field ...
            [editorOptions]="{ format: 'currency', showClearButton: true }">
        </dxi-field>
    </dx-filter-builder>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFilterBuilder ... >
            <DxField ...
                :editor-options="fieldEditorOptions"
            />
        </DxFilterBuilder>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxFilterBuilder, {
        DxField
    } from 'devextreme-vue/filter-builder';

    export default {
        components: {
            DxFilterBuilder,
            DxField
        },
        data() {
            return {
                fieldEditorOptions: { format: 'currency', showClearButton: true }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import FilterBuilder, {
        Field
    } from 'devextreme-react/filter-builder';

    class App extends React.Component {
        fieldEditorOptions = { format: 'currency', showClearButton: true };

        render() {
            return (
                <FilterBuilder ... >
                    <Field ...
                        editorOptions={this.fieldEditorOptions}
                    />
                </FilterBuilder>
            );
        }
    }
    export default App;

---

[note]

Do not specify the **onValueChanged** property in this object. If you need to add custom logic to the default value change handler, override the handler in the [onEditorPreparing](/api-reference/10%20UI%20Components/dxFilterBuilder/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/#onEditorPreparing') function as follows:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#filterBuilderContainer").dxFilterBuilder({
            // ...
            onEditorPreparing: function(e) {
                if (e.dataField == "requiredDataField") {
                    const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                    e.editorOptions.onValueChanged = function(args) { // Override the default handler
                        // ...
                        // Custom commands go here
                        // ...
                        // If you want to modify the editor value, call the setValue function:
                        // e.setValue(newValue);
                        // Otherwise, call the default handler:
                        defaultValueChangeHandler(args);
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
            if (e.dataField == "requiredDataField") {
                const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                e.editorOptions.onValueChanged = function (args) { // Override the default handler
                    // ...
                    // Custom commands go here
                    // ...
                    // If you want to modify the editor value, call the setValue function:
                    // e.setValue(newValue);
                    // Otherwise, call the default handler:
                    defaultValueChangeHandler(args);
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
            @editor-preparing="overrideOnValueChanged">
        </DxFilterBuilder>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxFilterBuilder from 'devextreme-vue/filter-builder';

    export default {
        components: {
            DxFilterBuilder
        },
        // ...
        methods: {
            overrideOnValueChanged(e) {
                if (e.dataField === 'requiredDataField') {
                    const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                    e.editorOptions.onValueChanged = function (args) { // Override the default handler
                        // ...
                        // Custom commands go here
                        // ...
                        // If you want to modify the editor value, call the setValue function:
                        // e.setValue(newValue);
                        // Otherwise, call the default handler:
                        defaultValueChangeHandler(args);
                    }
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import FilterBuilder from 'devextreme-react/filter-builder';

    class App extends React.Component {
        overrideOnValueChanged(e) {
            if (e.dataField === 'requiredDataField') {
                const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                e.editorOptions.onValueChanged = function (args) { // Override the default handler
                    // ...
                    // Custom commands go here
                    // ...
                    // If you want to modify the editor value, call the setValue function:
                    // e.setValue(newValue);
                    // Otherwise, call the default handler:
                    defaultValueChangeHandler(args);
                }
            }
        }
        render() {
            return (
                <FilterBuilder ...
                    onEditorPreparing={this.overrideOnValueChanged}>
                </FilterBuilder>
            );
        }
    }
    export default App;

---

[/note]