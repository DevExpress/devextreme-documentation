---
id: dxFileManager.Options.toolbar
type: dxFileManagerToolbar
inheritsType: dxFileManagerToolbar
---
---
##### shortDescription
Configures toolbar settings.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/UICustomization/"
}

![DevExtreme File Manager - Toolbar](/images/FileManager/toolbar.png)

The FileManager UI component allows you to add default and custom toolbar items.

**Predefined Items**

Predefined toolbar items include:

- **'showNavPane'** - Shows or hides the navigation panel.  
- **'create'** - Creates a new directory.
- **'upload'** - Uploads a file.
- **'refresh'** - Refreshes the file manager content and shows the progress panel.
- **'download'** - Downloads a file.
- **'move'** - Moves files and directories.
- **'copy'** - Copies files and directories.
- **'rename'** - Renames files and directories.
- **'delete'** - Deletes files and directories.
- **'switchView'** - Switches between the 'Details' and 'Thumbnails' file system representation modes.
- **'clearSelection'** - Clears selection from files and directories in the Item View area.

To add a predefined item to the toolbar, specify its [name](/api-reference/_hidden/dxFileManagerToolbarItem/name.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/items/#name') and optional settings ('visible', 'location', 'locateInMenu', 'text', 'icon', 'disabled') and add the item to one of the following collections:

- [items](/api-reference/_hidden/dxFileManagerToolbar/items '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/items/') - Displays toolbar items when no file system item is selected.

- [fileSelectionItems](/api-reference/_hidden/dxFileManagerToolbar/fileSelectionItems '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/fileSelectionItems/') - Displays toolbar items when one or more file system items are selected.

[note] Note that optional settings for predefined toolbar items should be specified at the same level as the item's **name** property.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            toolbar: {
                items: [
                    // Specifies a predefined item's name and optional settings
                    {
                        name: "create",
                        text: "Create a directory",
                        icon: "newfolder"
                    },
                    // Specifies a predefined item's name only
                    "switchView", "separator"
                    //...
                ]
                fileSelectionItems: [
                    "copy", "rename"
                    //...
                ]
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager>
        <dxo-toolbar>
            <!-- Specifies a predefined item's name and optional settings -->
            <dxi-item name="create" text="Create a directory" icon="newfolder"></dxi-item>
            <!-- Specifies a predefined item's name only -->
            <dxi-item name="switchView"></dxi-item>
            <dxi-item name="separator"></dxi-item>
            <!-- Specifies items that are visible when users select files -->
            <dxi-file-selection-item name="copy"></dxi-file-selection-item>
            <dxi-file-selection-item name="rename"></dxi-file-selection-item>
        </dxo-toolbar>
    </dx-file-manager>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager>
            <DxToolbar>
                <!-- Specifies a predefined item's name and optional settings -->
                <DxItem name="create" text="Create a directory" icon="newfolder" />
                <!-- Specifies a predefined item's name only -->
                <DxItem name="switchView"/>
                <DxItem name="separator"/>
                <!-- Specifies items that are visible when users select files -->
                <DxFileSelectionItem name="copy"/>
                <DxFileSelectionItem name="rename"/>
            </DxToolbar>        
        </DxFileManager>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';    
        
        import {
            DxFileManager,
            DxToolbar,
            DxItem,
            DxFileSelectionItem
        } from 'devextreme-vue/file-manager';

        export default {
            components: {
                DxFileManager,
                DxToolbar,
                DxItem,
                DxFileSelectionItem
            },
            data() {
                return {
                    //...
                };
            }            
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';

    import FileManager, { Toolbar, Item, FileSelectionItem } from 'devextreme-react/file-manager';
    
    class App extends React.Component {
        render() {
            return (
                <FileManager>
                    <Toolbar>
                        {/* Specifies a predefined item's name and optional settings */}
                        <Item name="create" text="Create a directory" icon="newfolder" />
                        {/* Specifies a predefined item's name only */}
                        <Item name="switchView" />
                        <Item name="separator" />
                        {/* Specifies items that are visible when users select files */}
                        <FileSelectionItem name="copy" />
                        <FileSelectionItem name="rename" />
                    </Toolbar>
                </FileManager>
            );
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Toolbar(toolbar => {
            toolbar.Items(items => {
                // Specifies a predefined item's name and optional settings
                items.Add().Name(FileManagerToolbarItem.Create).Text("Create a directory").Icon("newfolder");
                // Specifies a predefined item's name only
                items.Add().Name(FileManagerToolbarItem.SwitchView);
                items.Add().Name(FileManagerToolbarItem.Create);
            });
            // Specifies items that are visible when users select files 
            toolbar.FileSelectionItems(items => {
                items.Add().Name(FileManagerToolbarItem.Copy);
                items.Add().Name(FileManagerToolbarItem.Rename);
            });
        })
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Toolbar(toolbar => {
            toolbar.Items(items => {
                // Specifies a predefined item's name and optional settings
                items.Add().Name(FileManagerToolbarItem.Create).Text("Create a directory").Icon("newfolder");
                // Specifies a predefined item's name only
                items.Add().Name(FileManagerToolbarItem.SwitchView);
                items.Add().Name(FileManagerToolbarItem.Create);
            });
            // Specifies items that are visible when users select files 
            toolbar.FileSelectionItems(items => {
                items.Add().Name(FileManagerToolbarItem.Copy);
                items.Add().Name(FileManagerToolbarItem.Rename);
            });
        })
    )

---

**Custom Items**

To add a custom toolbar item, specify its [text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/items/#text') and optional settings (for example, a file extension for the toolbar item that creates a new file) and add the item to one of the following collections:

- [items](/api-reference/_hidden/dxFileManagerToolbar/items '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/items/') - Displays toolbar items when no file system item is selected.

- [fileSelectionItems](/api-reference/_hidden/dxFileManagerToolbar/fileSelectionItems '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/fileSelectionItems/') - Displays toolbar items when one or more file system items are selected.

The [widget](/api-reference/_hidden/dxFileManagerToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/items/#widget') property allows you to specify a UI component for a custom toolbar item ([dxButton](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/') is the default UI component). Use the [toolbarItemClick](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/toolbarItemClick.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#toolbarItemClick') event to handle clicks on custom toolbar items.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            toolbar: {
                items: [
                    // Specifies a custom item as a dxMenu UI component
                    {
                        widget: "dxMenu",
                        options: {
                            items: [
                                {
                                    text: "Create new file",
                                    icon: "plus",
                                    items: [
                                        {
                                            text: "Text Document",
                                            extension: ".txt"
                                        },
                                        {
                                            text: "RTF Document",
                                            extension: ".rtf"
                                        },
                                        {
                                            text: "Spreadsheet",
                                            extension: ".xls"
                                        }]
                                }
                            ],
                        }
                }]
            },
            onToolbarItemClick: onItemClick
        });
    });
    function onItemClick(args) {
        // ...
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager>
        <dxo-toolbar>
            <dxi-item widget="dxMenu" [options]="fileMenuOptions"></dxi-item>
        </dxo-toolbar>
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Service } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [Service]
    })

    export class AppComponent {
        constructor(service: Service) {
            this.fileMenuOptions = {
                items: [
                    {
                        text: "Create new file",
                        icon: "plus",
                        items: [
                            {
                                text: "Text Document",
                                options: {
                                    extension: ".txt",
                                }
                            },
                            {
                                text: "RTF Document",
                                options: {
                                    extension: ".rtf",
                                }
                            },
                            {
                                text: "Spreadsheet",
                                options: {
                                    extension: ".xls",
                                }
                            }
                        ]
                    }
                ],
                onItemClick: () => {
                    // ...
                }
            };
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager>
            <DxToolbar>
                <DxItem
                    widget="dxMenu"
                    :options="fileMenuOptions"
                />
            </DxToolbar>        
        </DxFileManager>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';    
        
        import {
            DxFileManager,
            DxToolbar,
            DxItem
        } from 'devextreme-vue/file-manager';

        export default {
            components: {
                DxFileManager,
                DxToolbar,
                DxItem
            },
            data() {
                return {
                    fileMenuOptions: {
                        items: [
                            {
                                text: "Create new file",
                                icon: "plus",
                                items: [
                                    {
                                        text: "Text Document",
                                        options: {
                                            extension: ".txt",
                                        }
                                    },
                                    {
                                        text: "RTF Document",
                                        options: {
                                            extension: ".rtf",
                                        }
                                    },
                                    {
                                        text: "Spreadsheet",
                                        options: {
                                            extension: ".xls",
                                        }
                                    }
                                ]
                            }
                        ],
                    onItemClick: this.onItemClick
                };
            },
            methods:{
                onItemClick() {
                    // ...
                }
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import FileManager, { Toolbar, Item } from 'devextreme-react/file-manager';    

    const App = () => {
        const fileMenuOptions = {
            items: [
                {
                    text: 'Create new file',
                    icon: 'plus',
                    items: [
                        {
                            text: 'Text Document',
                            extension: '.txt'
                        },
                        {
                            text: 'RTF Document',
                            extension: '.rtf'
                        },
                        {
                            text: 'Spreadsheet',
                            extension: '.xls'
                        }
                    ]
                }
            ],
            onItemClick: 'onItemClick'
        };

        const onItemClick = (e) => {
            // ...
        };        

        return (
            <FileManager>
                <Toolbar>
                    <Item widget="dxMenu" options={this.fileMenuOptions} />
                </Toolbar>
            </FileManager>
        );
    };

    export default App;
##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Toolbar(toolbar => {
            toolbar.Items(items => {
                items.Add()
                    .Widget(widget => widget.Menu()
                        .Items(menuItems => {
                            menuItems.Add()
                                .Text("Create new file")
                                .Icon("plus")
                                .Items(subItems => {
                                    subItems.Add()
                                        .Text("Text Document")
                                        .Option("extension", ".txt");
                                    subItems.Add()
                                        .Text("RTF Document")
                                        .Option("extension", ".rtf");
                                    subItems.Add()
                                        .Text("Spreadsheet")
                                        .Option("extension", ".xls");
                                });
                        })
                        .OnItemClick("onItemClick")
                    );
            })
        })
    )

    <!--JavaScript-->
    <script type="text/javascript">
        function onItemClick() {
            // ...
        }
    </script>    

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Toolbar(toolbar => {
            toolbar.Items(items => {
                items.Add()
                    .Widget(widget => widget.Menu()
                        .Items(menuItems => {
                            menuItems.Add()
                                .Text("Create new file")
                                .Icon("plus")
                                .Items(subItems => {
                                    subItems.Add()
                                        .Text("Text Document")
                                        .Option("extension", ".txt");
                                    subItems.Add()
                                        .Text("RTF Document")
                                        .Option("extension", ".rtf");
                                    subItems.Add()
                                        .Text("Spreadsheet")
                                        .Option("extension", ".xls");
                                });
                        })
                        .OnItemClick("onItemClick")
                    );
            })
        })
    )

    <!--JavaScript-->
    <script type="text/javascript">
        function onItemClick() {
            // ...
        }
    </script>    

---
