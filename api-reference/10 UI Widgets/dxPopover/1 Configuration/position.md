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
You can use the **position**.[of](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of') option and the **Popover**'s [target](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#target') option to specify the element against which the widget will be positioned. If you set both these options, **position**.**of** takes precedence.

Besides the position configuration object, the option can take on the following string values, which are shortcuts for the corresponding position configuration.

- "top" - places the popover over the target element
- "bottom" - places the popover under the target element
- "left" - places the popover to the left of the target element
- "right" - places the popover to the right of the target element