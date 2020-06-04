---
id: dxResponsiveBox.Options.rows.screen
type: String
default: undefined
---
---
##### shortDescription
Decides on which screens the current row is rendered.

---
Before rendering the row, the widget considers the screen's width. If the width matches the specified size qualifier, the row will be rendered. There are four size qualifiers in all. The **screen** option accepts one or several of them separated by a space.

<table class="dx-table">
    <tr>
        <th>Size Qualifier</th>
        <th>Description</th>
    </tr>
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
</table>

[note] When this option is undefined, the row is rendered on all screens.

#####See Also#####
- [ResponsiveBox - Create the Layout Grid](/concepts/05%20Widgets/ResponsiveBox/10%20Create%20the%20Layout%20Grid.md '/Documentation/Guide/Widgets/ResponsiveBox/Create_the_Layout_Grid/')
- [screenByWidth](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/screenByWidth.md '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/#screenByWidth')