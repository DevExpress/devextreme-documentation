---
default: undefined
type: String
---
---
##### shortDescription
Decides on which screens the current **location** settings should be applied to the element.

---
Before applying the current **location** settings, the widget considers the screen's width and applies the **location** settings only if the width matches the specified size qualifier. There are four size qualifiers in all.

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Size Qualifier</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>xs</td>
      <td>Stands for "extra small". Screens with width less than 768 pixels.</td>
    </tr>
    <tr>
      <td>sm</td>
      <td>Stands for "small". Screens with width between 768 and 992 pixels.</td>
    </tr>
    <tr>
      <td>md</td>
      <td>Stands for "medium". Screens with width between 992 and 1200 pixels.</td>
    </tr>
    <tr>
      <td>lg</td>
      <td>Stands for "large". Screens with width more than 1200 pixels.</td>
    </tr>
    </tbody>
  </table>
</div>

The **screen** option accepts one or several size qualifiers separated by a space. For example, the following settings apply to an element on medium and large screens only.

    <!--HTML--><div id="responsiveBoxContainer">
        <div data-options="dxItem: {
            location: {
                screen: "md lg",
                row: 0, col: 0
            }
        }"></div>
    </div>

#####See Also#####
- [screenByWidth](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/screenByWidth.md '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/#screenByWidth')