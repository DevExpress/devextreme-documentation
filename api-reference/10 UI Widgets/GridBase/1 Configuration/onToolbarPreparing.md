---
id: GridBase.Options.onToolbarPreparing
type: function(e)
default: null
EventForAction: GridBase.toolbarPreparing
---
---
##### shortDescription
A function that is executed before the toolbar is created.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.toolbarOptions): dxToolbar_Options
The [options of the toolbar](/api-reference/10%20UI%20Widgets/dxToolbar/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/').

---
This function allows you to customize the toolbar. Depending on the configuration, the widget may add the following items to the toolbar:

- <img src="/Content/images/doc/20_2/DataGrid/icons/columnChooser.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/> - *"columnChooserButton"*    
- <img src="/Content/images/doc/20_2/DataGrid/icons/toolbar_add.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Toolbar AddButton" style="margin:1px; vertical-align:middle"/> - *"addRowButton"*    
- <img src="/Content/images/doc/20_2/DataGrid/icons/toolbar_save.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Toolbar SaveButton" style="margin:1px; vertical-align:middle"/> - *"saveButton"*   
- <img src="/Content/images/doc/20_2/DataGrid/icons/toolbar_revert.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Toolbar RevertButton" style="margin:1px; vertical-align:middle"/> - *"revertButton"*   
- <img src="/Content/images/doc/20_2/DataGrid/icons/toolbar_export.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Toolbar Exporting" style="margin:1px; vertical-align:middle"/> - *"exportButton"*     
- <img src="/Content/images/doc/20_2/DataGrid/icons/toolbar_applyFilter.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Toolbar ApplyFilterButton" style="margin:1px; vertical-align:middle"/> - *"applyFilterButton"*     
- [*"groupPanel"*](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/') 
- [*"searchPanel"*](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/searchPanel '{basewidgetpath}/Configuration/searchPanel/')

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


[note]If you use [modules](/concepts/Common/Modularity '/Documentation/Guide/Common/Modularity/') and set a DevExtreme widget as a toolbar item, import this widget's module. You do not have to import the [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') or [TextBox](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Widgets/dxTextBox/') widgets because **DataGrid** imports them automatically. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/ToolbarCustomization/"
} 
