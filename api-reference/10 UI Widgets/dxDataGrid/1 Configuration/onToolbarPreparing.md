---
EventForAction: ..\4 Events\toolbarPreparing.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [toolbarPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/toolbarPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#toolbarPreparing') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.toolbarOptions): Object
An object containing <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxToolbar/Configuration/">options of the toolbar</a>.

---
The **toolbarPreparing** event fires before the toolbar is created. This allows you to customize its options. For this purpose, use the object passed to the handling function as a parameter. Among the fields of this object, you can find data related to the toolbar options. 

By default, the widget has the following toolbar items.

- <img src="/Content/images/doc/16_2/DataGrid/icons/columnChooser.png" alt="DataGrid Toolbar Column Chooser Button" style="margin:1px; vertical-align:middle"/> - columnChooserButton    
- <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_add.png" alt="DataGrid Toolbar Add Button" style="margin:1px; vertical-align:middle"/> - addRowButton    
- <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_save.png" alt="DataGrid Toolbar Save Button" style="margin:1px; vertical-align:middle"/> - saveButton   
- <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_revert.png" alt="DataGrid Toolbar Revert Button" style="margin:1px; vertical-align:middle"/> - revertButton   
- <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_export.png" alt="DevExtreme DataGrid HTML5 Toolbar Exporting" style="margin:1px; vertical-align:middle"/> - exportButton     
- <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_applyFilter.png" alt="DataGrid Toolbar Apply Filter Button" style="margin:1px; vertical-align:middle"/> - applyFilterButton     
- [groupPanel](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/090%20Group%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Panel')  
- [searchPanel](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/080%20Search%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel')  

Items availability depends on the **DataGrid** configuration.

<!---->

    <!--JavaScript-->
    $(function() {
        $("#gridContainer").dxDataGrid({
            // . . .
            onToolbarPreparing: function (e) {
                var toolbarItems = e.toolbarOptions.items;
                // Modifies an existing item
                $.each(toolbarItems, function(_, item) {
                    if(item.name === "saveButton") {
                        // Change the item options here
                    }
                }); 

                // Adds a new item
                toolbarItems.push({
                    widget: 'dxButton', 
                    options: { icon: 'user', onClick: function(){ ... } },
                    location: 'after' });
            }
        });
    });

<a href=" https://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-templates-toolbar_customization" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a> 
<a href="https://www.youtube.com/watch?v=oWWL6iILMPM&index=1&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&t=3s" class="button orange small fix-width-155" target="_blank">Watch Video</a>