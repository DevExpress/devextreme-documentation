---
id: dxTreeList.Options.toolbar
type: dxTreeListToolbar
default: undefined
inheritsType: dxTreeListToolbar
---
---
##### shortDescription
Configures toolbar.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/UICustomization/"
}

![DevExtreme TreeList - Toolbar](/images/TreeList/toolbar.png)

The TreeList allows you to customize predefined items and add custom elements.

**Predefined Items**

Predefined items include:

<table class="dx-table">
  <tr>
    <th>Picture</th>
    <th>Item</th>
    <th>Prerequisites</th>
  </tr>
  <tr>
    <td><img src="/images/DataGrid/icons/toolbar_add.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar AddButton" style="margin:1px; vertical-align:middle"/></td>
    <td><i>addRowButton</i></td>
    <td>editing.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowAdding">allowAdding</a> is set to <b>true</b></td>
  </tr>
  <tr>
    <td><img src="/images/DataGrid/icons/toolbar_applyFilter.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar ApplyFilterButton" style="margin:1px; vertical-align:middle"/></td>
    <td><i>applyFilterButton</i></td>
    <td>filterRow.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/#visible">visible</a> is set to <b>true</b> and filterRow.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/#applyFilter">applyFilter</a> is set to <i>"onClick"</i></td>
  </tr>
  <tr>
    <td><img src="/images/DataGrid/icons/columnChooser.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/></td>
    <td><i>columnChooserButton</i></td>
    <td>columnChooser.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#enabled">enabled</a> is set to <b>true</b></td>
  </tr>
  <tr>
    <td><img src="/images/DataGrid/icons/toolbar_revert.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar RevertButton" style="margin:1px; vertical-align:middle"/></td>
    <td><i>revertButton</i></td>
    <td>editing.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode">mode</a> is set to <i>"batch"</i></td>
  </tr>
  <tr>
    <td><img src="/images/DataGrid/icons/toolbar_save.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList Toolbar SaveButton" style="margin:1px; vertical-align:middle"/></td>
    <td><i>saveButton</i></td>
    <td>editing.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode">mode</a> is set to <i>"batch"</i></td>
  </tr>
  <tr>
    <td>SP</td>
    <td><i>searchPanel</i></td>
    <td>searchPanel.<a href="/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/searchPanel/#visible">visible</a> is set to <b>true</b></td>
  </tr>
</table>

To add a predefined item, add its string to the toolbar array. If you need to customize an item, add an object instead and specify the [name](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/#name) and other [properties](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/).

**Custom Items**
Custom items can display any html code.  To add such an item, specify its [template](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/#template) and other properties. To embed a DevExtreme component, specify the widget and options properties instead.
