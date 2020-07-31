---
id: dxTreeList.Options.onEditorPreparing
type: function(e)
default: null
EventForAction: dxTreeList.editorPreparing
---
---
##### shortDescription
A function used to customize or replace [default editors](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#editorOptions'). Not executed for cells with an [editCellTemplate](/api-reference/_hidden/dxTreeListColumn/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#editCellTemplate').

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
<!-- %field(e.cancel)% -->

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.dataField): String
The name of the field that provides data for the column the editor belongs to.

##### field(e.disabled): Boolean
Indicates whether the editor is disabled.

##### field(e.editorElement): dxElement
#include common-ref-elementparam with { element: "editor" }

##### field(e.editorName): String
<!-- %field(e.editorName)% -->

##### field(e.editorOptions): Object
<!-- %field(e.editorOptions)% -->

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.parentType): String
The editor's location. One of *"dataRow"*, *"filterRow"*, *"headerRow"* or *"searchPanel"*.

##### field(e.readOnly): Boolean
Indicates whether the editor is read-only.

##### field(e.row): dxTreeListRowObject
The [properties](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/') of the row the editor belongs to.

##### field(e.rtlEnabled): Boolean
Indicates whether the editor uses right-to-left representation.

##### field(e.setValue(newValue, newText)): any
<!-- %field(e.setValue(newValue, newText))% -->

##### field(e.updateValueTimeout): Number
Gets and sets the delay between the moment a user stops typing a filter value and the change is applied. Available if the **parentType** is *"filterRow"* or *"searchPanel"*.

##### field(e.value): any
<!-- %field(e.value)% -->

##### field(e.width): Number
The editor's width; equals **null** for all editors except for those whose **parentType** equals *"searchPanel"*.

---
Use this function to:

- Override the default editor's **onValueChanged** handler. For other default editor customizations, use [editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#editorOptions').

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#treeListContainer").dxTreeList({
                // ...
                onEditorPreparing: function(e) {
                    if (e.dataField === "requiredDataField" && e.parentType === "dataRow") {
                        var standardHandler = e.editorOptions.onValueChanged;
                        e.editorOptions.onValueChanged = function(e) { // Overrides the standard handler
                            // ...
                            // Custom commands go here
                            // ...
                            standardHandler(e); // Calls the standard handler to save the edited value
                        }
                    }
                }
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-tree-list ...
            (onEditorPreparing)="overrideOnValueChanged($event)">
        </dx-tree-list>

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            overrideOnValueChanged(e) {
                if (e.dataField === 'requiredDataField' && e.parentType === 'dataRow') {
                    let standardHandler = e.editorOptions.onValueChanged;
                    e.editorOptions.onValueChanged = function (e) { // Overrides the standard handler
                        // ...
                        // Custom commands go here
                        // ...
                        standardHandler(e); // Calls the standard handler to save the edited value
                    }
                }
            }
        }

        <!-- tab: app.module.ts -->
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';

        import { DxTreeListModule } from 'devextreme-angular';

        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                DxTreeListModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
        export class AppModule { }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxTreeList ...
                @editor-preparing="overrideOnValueChanged">
            </DxTreeList>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import DxTreeList from 'devextreme-vue/data-grid';

        export default {
            components: {
                DxTreeList
            },
            // ...
            methods: {
                overrideOnValueChanged(e) {
                    if (e.dataField === 'requiredDataField' && e.parentType === 'dataRow') {
                        let standardHandler = e.editorOptions.onValueChanged;
                        e.editorOptions.onValueChanged = function (e) { // Overrides the standard handler
                            // ...
                            // Custom commands go here
                            // ...
                            standardHandler(e); // Calls the standard handler to save the edited value
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

        import TreeList from 'devextreme-react/data-grid';

        class App extends React.Component {
            overrideOnValueChanged(e) {
                if (e.dataField === 'requiredDataField' && e.parentType === 'dataRow') {
                    let standardHandler = e.editorOptions.onValueChanged;
                    e.editorOptions.onValueChanged = function (e) { // Overrides the standard handler
                        // ...
                        // Custom commands go here
                        // ...
                        standardHandler(e); // Calls the standard handler to save the edited value
                    }
                }
            }
            render() {
                return (
                    <TreeList ...
                        onEditorPreparing={this.overrideOnValueChanged}>
                    </TreeList>
                );
            }
        }
        export default App;

    ##### ASP.NET MVC Controls

        <!-- tab: Razor C# -->
        @(Html.DevExtreme().TreeList()
            // ...
            .OnEditorPreparing("overrideOnValueChanged")
        )

        <script type="text/javascript">
            function overrideOnValueChanged(e) {
                if (e.dataField === "requiredDataField" && e.parentType === "dataRow") {
                    var standardHandler = e.editorOptions.onValueChanged;
                    e.editorOptions.onValueChanged = function(e) { // Overrides the standard handler
                        // ...
                        // Custom commands go here
                        // ...
                        standardHandler(e); // Calls the standard handler to save the edited value
                    }
                }
            }
        </script>

    ---

- Replace the default editor. The old editor's configuration applies to the replacement editor. If you want to define the configuration from scratch, use an [editCellTemplate](/api-reference/_hidden/dxTreeListColumn/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#editCellTemplate').
    
    In the following code, the replacement editor is the DevExtreme [TextArea](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TextArea/Overview) widget:

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#treeListContainer").dxTreeList({
                // ...
                onEditorPreparing: function(e) {
                    if (e.dataField === "description" && e.parentType === "dataRow") {
                        e.editorName = "dxTextArea";
                    }
                }
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-tree-list ...
            (onEditorPreparing)="replaceEditor($event)">
        </dx-tree-list>

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';
        import 'devextreme/ui/text_area';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            replaceEditor(e) { 
                if (e.dataField === 'description' && e.parentType === 'dataRow') {
                    e.editorName = 'dxTextArea';
                }
            }
        }

        <!-- tab: app.module.ts -->
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { AppComponent } from './app.component';

        import { DxTreeListModule } from 'devextreme-angular';

        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                DxTreeListModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
        export class AppModule { }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxTreeList ...
                @editor-preparing="replaceEditor">
            </DxTreeList>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import DxTreeList from 'devextreme-vue/data-grid';
        import 'devextreme/ui/text_area';

        export default {
            components: {
                DxTreeList
            },
            // ...
            methods: {
                replaceEditor(e) { 
                    if (e.dataField === 'description' && e.parentType === 'dataRow') {
                        e.editorName = 'dxTextArea';
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

        import TreeList from 'devextreme-react/data-grid';
        import 'devextreme/ui/text_area';

        class App extends React.Component {
            replaceEditor(e) { 
                if (e.dataField === 'description' && e.parentType === 'dataRow') {
                    e.editorName = 'dxTextArea';
                }
            }
            render() {
                return (
                    <TreeList ...
                        onEditorPreparing={this.replaceEditor}>
                    </TreeList>
                );
            }
        }
        export default App;

    ##### ASP.NET MVC Controls

        <!-- tab: Razor C# -->
        @(Html.DevExtreme().TreeList()
            // ...
            .OnEditorPreparing("replaceEditor")
        )

        <script type="text/javascript">
            function replaceEditor(e) {
                if (e.dataField === "description" && e.parentType === "dataRow") {
                    e.editorName = "dxTextArea";
                }
            }
        </script>

    ---

- Customize editors used in the [search panel](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/searchPanel/'), [filter row](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/filterRow/'), and [selection column](/concepts/05%20Widgets/TreeList/10%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Command_Columns/').        
Use the **parentType** function parameter to check if the editor being customized belongs to one of these UI elements.

- [Dynamically change editor options in the editing state](/concepts/05%20Widgets/DataGrid/99%20How%20To/Dynamically%20Change%20Editor%20Options%20in%20the%20Editing%20State.md '/Documentation/Guide/Widgets/DataGrid/How_To/Dynamically_Change_Editor_Options_in_the_Editing_State/').

- Implement other customization cases.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CommandColumnCustomization/"
}

#####See Also#####
- **columns[]**.[showEditorAlways](/api-reference/_hidden/GridBaseColumn/showEditorAlways.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#showEditorAlways')