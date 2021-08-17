---
id: dxTreeList.Options.toolbar
type: dxTreeListToolbar
default: undefined
inheritsType: dxTreeListToolbar
---
---
##### shortDescription
Configures the toolbar.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/ToolbarCustomization/"
}

![DevExtreme TreeList - Toolbar](/images/treelist/toolbar.png)

Toolbar allows you to configure predefined controls, add DevExtreme and custom components, and reorder these elements:

- **Predefined Controls**             
Predefined controls include:

<table class="dx-table">
  <tr>
    <th>Control Name</th>
    <th>Image</th>
    <th>Prerequisites</th>
  </tr>
  <tr>
    <td><i>addRowButton</i></td>
    <td><img src="/images/TreeList/icons/toolbar_add.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar AddButton" style="margin:1px; vertical-align:middle"/></td>
    <td><a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/">editing</a>.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowAdding">allowAdding</a> is set to <b>true</b></td>
  </tr>
  <tr>
    <td><i>applyFilterButton</i></td>
    <td><img src="/images/TreeList/icons/toolbar_applyFilter.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar ApplyFilterButton" style="margin:1px; vertical-align:middle"/></td>
    <td>filterRow.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/#visible">visible</a> is set to <b>true</b> and filterRow.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/#applyFilter">applyFilter</a> is set to <i>"onClick"</i></td>
  </tr>
  <tr>
    <td><i>columnChooserButton</i></td>
    <td><img src="/images/TreeList/icons/columnChooser.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/></td>
    <td>columnChooser.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#enabled">enabled</a> is set to <b>true</b></td>
  </tr>
  <tr>
    <td><i>revertButton</i></td>
    <td><img src="/images/TreeList/icons/toolbar_revert.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar RevertButton" style="margin:1px; vertical-align:middle"/></td>
    <td><a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/">editing</a>.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode">mode</a> is set to <i>"batch"</i></td>
  </tr>
  <tr>
    <td><i>saveButton</i></td>
    <td><img src="/images/TreeList/icons/toolbar_save.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar SaveButton" style="margin:1px; vertical-align:middle"/></td>
    <td><a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/">editing</a>.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode">mode</a> is set to <i>"batch"</i> and <a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/">editing</a>.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowUpdating">allowUpdating</a> is set to <b>true</b></td>
  </tr>
  <tr>
    <td><i>searchPanel</i></td>
    <td><img src="/images/TreeList/icons/toolbar_searchPanel.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar searchPanel" style="margin:1px; vertical-align:middle"/></td>
    <td>searchPanel.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/searchPanel/#visible">visible</a> is set to <b>true</b></td>
  </tr>
</table>

If you need to customize a predefined item, add an object to the **toolbar**.[items[]](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/) array. This object must contain the item's [name](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/#name) and [properties](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/) that you want to customize. If an item does not need customization, include its name in the **toolbar**.**items[]** array.

[important] The TreeList does not display controls missing from the **items[]** array. Ensure that this array includes controls for all enabled features.

- **DevExtreme Components**          
Add an object to the **toolbar**.[items[]](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/) array, specify one of the available [widgets](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/#widget), its specific [settings](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/#options) and toolbar item's [properties](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/).

- **Custom Controls**             
Add an object to the **toolbar**.[items[]](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/) array, specify the [template](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/#template) and toolbar item's [properties](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/).
