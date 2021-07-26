This function allows you to customize the toolbar. Depending on the configuration, the UI component may add the following items to the toolbar:

- <img src="/images/DataGrid/icons/columnChooser.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/> - *"columnChooserButton"*    
- <img src="/images/DataGrid/icons/toolbar_add.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar AddButton" style="margin:1px; vertical-align:middle"/> - *"addRowButton"*    
- <img src="/images/DataGrid/icons/toolbar_save.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar SaveButton" style="margin:1px; vertical-align:middle"/> - *"saveButton"*   
- <img src="/images/DataGrid/icons/toolbar_revert.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar RevertButton" style="margin:1px; vertical-align:middle"/> - *"revertButton"*   
- <img src="/images/DataGrid/icons/toolbar_applyFilter.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar ApplyFilterButton" style="margin:1px; vertical-align:middle"/> - *"applyFilterButton"*     
- [*"searchPanel"*](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/searchPanel '{basewidgetpath}/Configuration/searchPanel/')

The following code shows how to use this function to customize the toolbar:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
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
    import { DxTreeListModule, DxButtonModule } from "devextreme-angular";
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
            DxTreeListModule,
            DxButtonModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ...
        (onToolbarPreparing)="onToolbarPreparing($event)">
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...
            @toolbar-preparing="onToolbarPreparing"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeList } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
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

    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';

    class App extends React.Component {
        render() {
            return (
                <TreeList ...
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

[note]If you use [modules](/concepts/Common/Modularity '/Documentation/Guide/Common/Modularity/') and set a DevExtreme UI component as a toolbar item, import this UI component's module. You do not have to import the [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Components/dxButton/') or [TextBox](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Components/dxTextBox/') UI components because TreeList imports them automatically. 
