---
id: dxContextMenu.Options.position
type: positionConfig
default: { my: 'top left', at: 'top left' }
---
---
##### shortDescription
An object defining UI component [positioning properties](/api-reference/50%20Common/Object%20Structures/positionConfig '/Documentation/ApiReference/Common/Object_Structures/positionConfig/').

---
[note]By default, the context menu is positioned against the cursor, but if you set the **position** property, the UI component will be positioned against the [target](/api-reference/10%20UI%20Components/dxContextMenu/1%20Configuration/target.md '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/#target') element. Note also that the **position**.[of](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of') property is always ignored in favor of the **target** property.