---
id: dxPopover.Options.position
acceptValues: 'bottom' | 'left' | 'right' | 'top'
type: String | positionConfig
default: 'bottom'
---
---
##### shortDescription
An object defining widget [positioning options](/api-reference/50%20Common/Object%20Structures/positionConfig '/Documentation/ApiReference/Common/Object_Structures/positionConfig/').

---
Besides the position configuration object, the option can take on the following string values, which are shortcuts for the corresponding position configuration.

- "top" - places the popover over the target element
- "bottom" - places the popover under the target element
- "left" - places the popover to the left of the target element
- "right" - places the popover to the right of the target element

You can use the [position](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#position).[of](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of') and the [target](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#target) options to specify the element against which the **Popover** will be positioned. If both **target** and **position**.**of** are specified, the latter will take precedence. However, if the **of** field of the **position** object is not specified, the **target** option will be used to define the **Popover**'s position.