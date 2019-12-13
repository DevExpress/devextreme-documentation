---
id: dxContextMenu.Options.position
type: positionConfig
default: { my: 'top left', at: 'top left' }
---
---
##### shortDescription
An object defining widget [positioning options](/api-reference/50%20Common/Object%20Structures/positionConfig '/Documentation/ApiReference/Common/Object_Structures/positionConfig/').

---
[note]By default, the context menu is positioned against the cursor, but if you set the **position** option, the widget will be positioned against the [target](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#target') element. Note also that the **position**.[of](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of') option is always ignored in favor of the **target** option.