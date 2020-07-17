---
id: dxFilterBuilderField.editorOptions
type: Object
---
---
##### shortDescription
Configures the widget used to edit the field value.

---
Depending on the [dataType](/api-reference/_hidden/dxFilterBuilderField/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/#editorOptions'), the **FilterBuilder** offers a user different widgets for editing: [TextBox](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Widgets/dxTextBox/'), [DateBox](/api-reference/10%20UI%20Widgets/dxDateBox '/Documentation/ApiReference/UI_Widgets/dxDateBox/'), [Lookup](/api-reference/10%20UI%20Widgets/dxLookup '/Documentation/ApiReference/UI_Widgets/dxLookup/'), etc. In the **editorOptions** object, you can specify options for the widget.

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
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFilterBuilderModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFilterBuilderModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

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
    import 'devextreme/dist/css/dx.common.css';
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

    import 'devextreme/dist/css/dx.common.css';
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

Do not specify the **onValueChanged** option in this object. If you need to add custom logic to the default value change handler, override the handler in the [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#onEditorPreparing') function as follows:

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
    
---

[/note]