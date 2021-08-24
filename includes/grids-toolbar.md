Predefined controls appear on the toolbar depending on whether a specific DataGrid feature is enabled. The following table illustrates the dependency:

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
    <td><img src="/images/DataGrid/icons/toolbar_add.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar AddButton" style="margin:1px; vertical-align:middle"/></td>
    <td><a href="https://js.devexpress.com/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/editing/">editing</a>.<a href="https://js.devexpress.com/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/editing/#allowAdding">allowAdding</a> is set to <b>true</b></td>
  </tr>
  <tr>
    <td><i>applyFilterButton</i></td>
    <td><img src="/images/DataGrid/icons/toolbar_applyFilter.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar ApplyFilterButton" style="margin:1px; vertical-align:middle"/></td>
    <td>filterRow.<a href="https://js.devexpress.com/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/filterRow/#visible">visible</a> is set to <b>true</b> and filterRow.<a href="https://js.devexpress.com/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/filterRow/#applyFilter">applyFilter</a> is set to <i>"onClick"</i></td>
  </tr>
  <tr>
    <td><i>columnChooserButton</i></td>
    <td><img src="/images/DataGrid/icons/columnChooser.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/></td>
    <td>columnChooser.<a href="https://js.devexpress.com/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/columnChooser/#enabled">enabled</a> is set to <b>true</b></td>
  </tr>
  <tr>
    <td><i>revertButton</i></td>
    <td><img src="/images/DataGrid/icons/toolbar_revert.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar RevertButton" style="margin:1px; vertical-align:middle"/></td>
    <td><a href="https://js.devexpress.com/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/editing/">editing</a>.<a href="https://js.devexpress.com/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/editing/#mode">mode</a> is set to <i>"batch"</i></td>
  </tr>
  <tr>
    <td><i>saveButton</i></td>
    <td><img src="/images/DataGrid/icons/toolbar_save.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar SaveButton" style="margin:1px; vertical-align:middle"/></td>
    <td><a href="https://js.devexpress.com/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/editing/">editing</a>.<a href="https://js.devexpress.com/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/editing/#mode">mode</a> is set to <i>"batch"</i> and <a href="https://js.devexpress.com/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/editing/">editing</a>.<a href="https://js.devexpress.com/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/editing/#allowUpdating">allowUpdating</a> is set to <b>true</b></td>
  </tr>
  <tr>
    <td><i>searchPanel</i></td>
    <td><img src="/images/DataGrid/icons/toolbar_searchPanel.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar searchPanel" style="margin:1px; vertical-align:middle"/></td>
    <td>searchPanel.<a href="https://js.devexpress.com/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/searchPanel/#visible">visible</a> is set to <b>true</b></td>
  </tr>
  ${{datagrid_unique_toolbar_items}}
</table>

If you need to customize a predefined item, add an object to the **toolbar**.[items[]](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/) array. This object must contain the item's [name](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/#name) and [properties](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/) that you want to customize. If an item does not need customization, include its name in the **toolbar**.**items[]** array.

[important] The {WidgetName} does not display controls missing from the **items[]** array. Ensure that this array includes controls for all enabled features.

##### DevExtreme Components
Add an object to the **toolbar**.[items[]](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/) array, specify one of the available [widgets](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/#widget), its specific [settings](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/#options) and toolbar item's [properties](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/).

##### Custom Controls
Add an object to the **toolbar**.[items[]](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/) array, specify the [template](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/#template) and toolbar item's [properties](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/).
