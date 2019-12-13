---
id: GridBase.Options.scrolling
type: Object
---
---
##### shortDescription
Overridden.
A configuration object specifying scrolling options.

---
The **DataGrid** widget supplies a user with an opportunity to scroll grid records. Scrolling can be performed within one page when used in conjunction with the [pager](/concepts/05%20Widgets/DataGrid/35%20Paging/10%20User%20Interaction.md '/Documentation/Guide/Widgets/DataGrid/Paging/#User_Interaction') or throughout the whole data source. In the latter case, data is still loaded by pages but a user moves through them continuously without noticing it. To specify required scrolling behavior, use the [mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/scrolling/mode.md '{basewidgetpath}/Configuration/scrolling/#mode') property of the **scrolling** configuration object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/VirtualScrolling/"
}

#####See Also#####
- [Scrolling](/concepts/05%20Widgets/DataGrid/40%20Scrolling '/Documentation/Guide/Widgets/DataGrid/Scrolling/')