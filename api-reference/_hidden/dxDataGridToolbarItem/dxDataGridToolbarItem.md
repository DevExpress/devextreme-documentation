---
id: dxDataGridToolbarItem
inherits: dxToolbarItem
module: ui/data_grid
export: ToolbarItem
---
---
##### shortDescription
Configures toolbar items.

---
#include grids-toolbar with {
    datagrid_unique_toolbar_items: '
    <tr>
      <td><i>exportButton</i></td>
      <td><img src="/images/DataGrid/icons/toolbar_export.png" alt="DevExtreme JavaScript jQuery Angular UI component DataGrid Toolbar ExportButton" style="margin:1px; vertical-align:middle"/></td>
      <td>The <a href="{basewidgetpath}/Configuration/export/">export</a> feature is configured.</td>
    </tr>
    <tr>
      <td><i>groupPanel</i></td>
      <td><img src="/images/DataGrid/icons/toolbar_groupPanel.png" alt="DevExtreme JavaScript jQuery Angular UI component DataGrid Toolbar GroupPanel" style="margin:1px; vertical-align:middle"/></td>
      <td> <a href="{basewidgetpath}/Configuration/groupPanel/">groupPanel</a>.<a href="{basewidgetpath}/Configuration/columnChooser/#enabled">visible</a> is set to <b>true</b> or <i>"auto"</i></td>
    </tr>'
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ToolbarCustomization/"
}