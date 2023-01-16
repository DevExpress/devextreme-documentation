---
id: GridBase.Options.onToolbarPreparing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the toolbar is created.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.toolbarOptions): dxToolbar_Options
The [properties of the toolbar](/api-reference/10%20UI%20Components/dxToolbar/1%20Configuration '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/').

---
This function allows you to customize the toolbar. Depending on the configuration, the UI component may add the following items to the toolbar:

- <img src="/images/DataGrid/icons/columnChooser.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/> - *"columnChooserButton"*    
- <img src="/images/DataGrid/icons/toolbar_add.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar AddButton" style="margin:1px; vertical-align:middle"/> - *"addRowButton"*    
- <img src="/images/DataGrid/icons/toolbar_save.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar SaveButton" style="margin:1px; vertical-align:middle"/> - *"saveButton"*   
- <img src="/images/DataGrid/icons/toolbar_revert.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar RevertButton" style="margin:1px; vertical-align:middle"/> - *"revertButton"*   
- <img src="/images/DataGrid/icons/toolbar_export.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar Exporting" style="margin:1px; vertical-align:middle"/> - *"exportButton"*     
- <img src="/images/DataGrid/icons/toolbar_applyFilter.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar ApplyFilterButton" style="margin:1px; vertical-align:middle"/> - *"applyFilterButton"*     
- [*"groupPanel"*](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/groupPanel '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/groupPanel/') 
- [*"searchPanel"*](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/searchPanel '{basewidgetpath}/Configuration/searchPanel/')

The following code shows how to use this function to customize the toolbar:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onToolbarPreparing: function (e) {
                let toolbarItems = e.toolbarOptions.items;
                
                // Modifies an existing item
                toolbarItems.forEach(function(item) {                    
                    if (item.name === "saveButton") {
                        item.options = {
                            icon: "custom-save-icon",
                            onClick: function(e) {
                                // Implement custom save logic here
                            }
                        }
                    }
                });

                // Adds a new item
                toolbarItems.push({
                    widget: "dxButton", 
                    options: { icon: "user", onClick: function() { ... } },
                    location: "after"
                });
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onToolbarPreparing (e) { 
            let toolbarItems = e.toolbarOptions.items;
            // Modifies an existing item
            toolbarItems.forEach(function(item) {
                if (item.name === "saveButton") {
                    item.options = {
                        icon: "custom-save-icon",
                        onClick: function(e) {
                            // Implement custom save logic here
                        }
                    }
                }
            });
            
            // Adds a new item
            toolbarItems.push({
                widget: "dxButton", 
                options: { icon: "user", onClick: function () { ... } },
                location: "after"
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxButtonModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        (onToolbarPreparing)="onToolbarPreparing($event)">
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @toolbar-preparing="onToolbarPreparing"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            onToolbarPreparing(e) {
                let toolbarItems = e.toolbarOptions.items;
                // Modifies an existing item
                toolbarItems.forEach(function(item) {
                    if (item.name === "saveButton") {
                        item.options = {
                            icon: "custom-save-icon",
                            onClick: function(e) {
                                // Implement custom save logic here
                            }
                        }
                    }
                });

                // Adds a new item
                toolbarItems.push({
                    widget: 'dxButton',
                    options: {
                        icon: 'user',
                        onClick: function() {
                            // ...
                        }
                    },
                    location: 'after'
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ...
                    onToolbarPreparing={this.onToolbarPreparing}
                />
            );
        }

        onToolbarPreparing(e) {
            let toolbarItems = e.toolbarOptions.items;
            // Modifies an existing item
            toolbarItems.forEach(function(item) {
                if (item.name === "saveButton") {
                    item.options = {
                        icon: "custom-save-icon",
                        onClick: function(e) {
                            // Implement custom save logic here
                        }
                    }
                }
            });

            // Adds a new item
            toolbarItems.push({
                widget: 'dxButton',
                options: {
                    icon: 'user',
                    onClick: function() {
                        // ...
                    }
                },
                location: 'after'
            });
        }
    }
    export default App;

---


[note]If you use [modules](/concepts/Common/Modularity/01%20Link%20Modules/10%20Use%20Webpack.md '/Documentation/Guide/Common/Modularity/') and set a DevExtreme UI component as a toolbar item, import this UI component's module. You do not have to import the [Button](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/') or [TextBox](/api-reference/10%20UI%20Components/dxTextBox '/Documentation/ApiReference/UI_Components/dxTextBox/') UI components because DataGrid imports them automatically. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/ToolbarCustomization/"
} 
