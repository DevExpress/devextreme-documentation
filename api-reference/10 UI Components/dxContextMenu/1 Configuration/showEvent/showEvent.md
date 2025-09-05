---
id: dxContextMenu.Options.showEvent
type: Object | String
default: 'dxcontextmenu'
---
---
##### shortDescription
Specifies properties used to display the UI component.

---
If you assign only a string that specifies event names on which the UI component is shown, the UI component will not apply a delay.

    <!--JavaScript-->
    showEvent: "mouseenter"

Assign `""` (an empty string) to **showEvent** if you want to display the component only through code (for instance, by calling the [show()](/api-reference/10%20UI%20Components/dxContextMenu/3%20Methods/show().md '/Documentation/ApiReference/UI_Components/dxContextMenu/Methods/#show') method).
