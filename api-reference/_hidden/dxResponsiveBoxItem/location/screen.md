---
id: dxResponsiveBoxItem.location.screen
type: String | undefined
default: undefined
---
---
##### shortDescription
Decides on which screens the current **location** settings should be applied to the element.

---
Before applying the current **location** settings, the UI component considers the screen's width and applies the **location** settings only if the width matches the specified size qualifier. There are four size qualifiers in all.

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

The **screen** property accepts one or several size qualifiers separated by a space. For example, the following settings apply to an element on medium and large screens only.

    <!--HTML--><div id="responsiveBoxContainer">
        <div data-options="dxItem: {
            location: {
                screen: "md lg",
                row: 0, col: 0
            }
        }"></div>
    </div>

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ResponsiveBox/Overview/"
}

#####See Also#####
- [Arrange Layout Elements](/concepts/05%20UI%20Components/ResponsiveBox/15%20Arrange%20Layout%20Elements.md '/Documentation/Guide/UI_Components/ResponsiveBox/Arrange_Layout_Elements/')
- [screenByWidth](/api-reference/10%20UI%20Components/dxResponsiveBox/1%20Configuration/screenByWidth.md '/Documentation/ApiReference/UI_Components/dxResponsiveBox/Configuration/#screenByWidth')