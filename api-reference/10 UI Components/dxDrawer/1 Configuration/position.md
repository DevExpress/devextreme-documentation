---
id: dxDrawer.Options.position
acceptValues: 'left' | 'right' | 'top' | 'bottom' | 'before' | 'after'
type: String
default: 'left'
---
---
##### shortDescription
Specifies the drawer's position in relation to the view.

---
Use *"before"* and *"after"* if the **Drawer** should be positioned differently in right-to-left and regular representations. The following table shows the dependency between the [rtlEnabled](/api-reference/50%20Common/Object%20Structures/globalConfig/rtlEnabled.md '/Documentation/ApiReference/Common/Object_Structures/globalConfig/#rtlEnabled') value and *"before"* and *"after"* positions:

<table class="dx-table">
 <tr>
    <th></th>
    <th>"before"</th>
    <th>"after"</th>
 </tr>
 <tr>
    <td>rtlEnabled: false</td>
    <td>left side of the view</td>
    <td>right side of the view</td>
 </tr>
 <tr>
    <td>rtlEnabled: true</td>
    <td>right side of the view</td>
    <td>left side of the view</td>
 </tr>
</table>


#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Drawer/TopOrBottomPosition/",
    name: "Top or Bottom Position"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Drawer/LeftOrRightPosition/",
    name: "Left or Right Position"
}

#include common-ref-enum with {
    enum: "`DrawerPosition`",
    values: "`Left`, `Right`, `Top`, `Bottom`, `Before`, and `After`"
}