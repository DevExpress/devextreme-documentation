---
id: dxTreeListToolbar
type: Object
---
---
##### shortDescription
Configures toolbar.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/UICustomization/"
}

![DevExtreme TreeList - Toolbar](/images/TreeList/toolbar.png)

The TreeList allows you to customize predefined controls and add custom elements.

**Predefined Controls**

Predefined controls include:

<table>
  <tr>
    <td>Control</td>
    <td>Prerequisites</td>
  </tr>
  <tr>
    <td>**'addRowButton'**</td>
    <td>editing.allowAdding is set to true</td>
  </tr>
  <tr>
    <td>**'applyFilterButton'**</td>
    <td>filterRow.visible is set to true and TreeList applies filters on click</td>
  </tr>
  <tr>
    <td>**'columnChooserButton'**</td>
    <td>columnChooser.enabled is set to true</td>
  </tr>
  <tr>
    <td>**'revertButton'**</td>
    <td>editing.mode is "batch"</td>
  </tr>
  <tr>
    <td>**'saveButton'**</td>
    <td>editing.mode is "batch"</td>
  </tr>
  <tr>
    <td>**'searchPanel'**</td>
    <td>editing.allowAdding is set to true</td>
  </tr>
</table>

- **'addRowButton'** - present if allowAdding is set to **true**.
- **'applyFilterButton'** - present if filterRow.applyFilter == onClick and filterRow.visible: true.
- **'columnChooserButton'** - present if.
- **'revertButton'** - present if.
- **'saveButton'** - present if.
- **'searchPanel'** - present if.

To customize a predefined item, add its object to the toolbar array, specify the [name](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/#name) and other [properties](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/).

**Custom Items**

To add a custom toolbar item, specify its [template](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/toolbar/items/#template) and other settings, if needed.
