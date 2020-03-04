This function allows you to customize the toolbar. Depending on the configuration, the widget may add the following items to the toolbar:

- <img src="/Content/images/doc/19_2/DataGrid/icons/columnChooser.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/> - *"columnChooserButton"*    
- <img src="/Content/images/doc/19_2/DataGrid/icons/toolbar_add.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Toolbar AddButton" style="margin:1px; vertical-align:middle"/> - *"addRowButton"*    
- <img src="/Content/images/doc/19_2/DataGrid/icons/toolbar_save.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Toolbar SaveButton" style="margin:1px; vertical-align:middle"/> - *"saveButton"*   
- <img src="/Content/images/doc/19_2/DataGrid/icons/toolbar_revert.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Toolbar RevertButton" style="margin:1px; vertical-align:middle"/> - *"revertButton"*   
- <img src="/Content/images/doc/19_2/DataGrid/icons/toolbar_export.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Toolbar Exporting" style="margin:1px; vertical-align:middle"/> - *"exportButton"*     
- <img src="/Content/images/doc/19_2/DataGrid/icons/toolbar_applyFilter.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Toolbar ApplyFilterButton" style="margin:1px; vertical-align:middle"/> - *"applyFilterButton"*     
- [*"searchPanel"*](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/searchPanel '{basewidgetpath}/Configuration/searchPanel/')

The following code shows how you can customize the toolbar using this function.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            onToolbarPreparing: function (e) {
                var toolbarItems = e.toolbarOptions.items;
                // Modifies an existing item
                toolbarItems.forEach(function(item) {
                    if (item.name === "saveButton") {
                        // Change the item options here
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
            var toolbarItems = e.toolbarOptions.items;
            // Modifies an existing item
            toolbarItems.forEach(function(item) {
                if (item.name === "saveButton") {
                    // Change the item options here
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
    
---