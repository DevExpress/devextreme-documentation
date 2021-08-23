---
id: dxDataGridToolbarItem
type: Object
---
---
##### shortDescription
Configures toolbar items.

---

Toolbar allows you to configure predefined controls, add DevExtreme and custom components, and reorder these elements:

##### Predefined Controls
Predefined controls include:

<table class="dx-table">
  <tr>
    <th>Control Name</th>
    <th>Image</th>
    <th>Prerequisites</th>
  </tr>
  <tr>
    <td><i>addRowButton</i></td>
    <td><img src="/images/DataGrid/icons/toolbar_add.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar AddButton" style="margin:1px; vertical-align:middle"/></td>
    <td><a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/">editing</a>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowAdding">allowAdding</a> is set to <b>true</b></td>
  </tr>
  <tr>
    <td><i>applyFilterButton</i></td>
    <td><img src="/images/DataGrid/icons/toolbar_applyFilter.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar ApplyFilterButton" style="margin:1px; vertical-align:middle"/></td>
    <td>filterRow.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/filterRow/#visible">visible</a> is set to <b>true</b> and filterRow.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/filterRow/#applyFilter">applyFilter</a> is set to <i>"onClick"</i></td>
  </tr>
  <tr>
    <td><i>columnChooserButton</i></td>
    <td><img src="/images/DataGrid/icons/columnChooser.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/></td>
    <td>columnChooser.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnChooser/#enabled">enabled</a> is set to <b>true</b></td>
  </tr>
  <tr>
    <td><i>exportButton</i></td>
    <td><img src="/images/DataGrid/icons/toolbar_export.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/></td>
    <td>The <a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/">export</a> feature is configured.</td>
  </tr>
  <tr>
    <td><i>groupPanel</i></td>
    <td><img src="/images/DataGrid/icons/toolbar_groupPanel.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/></td>
    <td> <a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/groupPanel/">groupPanel</a>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnChooser/#enabled">visible</a> is set to <b>true</b> or <i>"auto"</i></td>
  </tr>
  <tr>
    <td><i>revertButton</i></td>
    <td><img src="/images/DataGrid/icons/toolbar_revert.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar RevertButton" style="margin:1px; vertical-align:middle"/></td>
    <td><a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/">editing</a>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode">mode</a> is set to <i>"batch"</i></td>
  </tr>
  <tr>
    <td><i>saveButton</i></td>
    <td><img src="/images/DataGrid/icons/toolbar_save.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar SaveButton" style="margin:1px; vertical-align:middle"/></td>
    <td><a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/">editing</a>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode">mode</a> is set to <i>"batch"</i> and <a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/">editing</a>.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowUpdating">allowUpdating</a> is set to <b>true</b></td>
  </tr>
  <tr>
    <td><i>searchPanel</i></td>
    <td><img src="/images/DataGrid/icons/toolbar_searchPanel.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid Toolbar searchPanel" style="margin:1px; vertical-align:middle"/></td>
    <td>searchPanel.<a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/searchPanel/#visible">visible</a> is set to <b>true</b></td>
  </tr>
</table>

If you need to customize a predefined item, add an object to the **toolbar**.[items[]](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/) array. This object must contain the item's [name](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/#name) and [properties](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/) that you want to customize. If an item does not need customization, include its name in the **toolbar**.**items[]** array.

[important] The DataGrid does not display controls missing from the **items[]** array. Ensure that this array includes controls for all enabled features.

##### DevExtreme Components
Add an object to the **toolbar**.[items[]](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/) array, specify one of the available [widgets](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/#widget), its specific [settings](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/#options) and toolbar item's [properties](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/).

##### Custom Controls
Add an object to the **toolbar**.[items[]](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/) array, specify the [template](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/#template) and toolbar item's [properties](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/).