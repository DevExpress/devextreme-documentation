---
id: dxPopover.Options.position
acceptValues: 'bottom' | 'left' | 'right' | 'top'
type: String | positionConfig
default: 'bottom'
---
---
##### shortDescription
An object defining UI component [positioning properties](/api-reference/50%20Common/Object%20Structures/positionConfig '/Documentation/ApiReference/Common/Object_Structures/positionConfig/').

---
You can use the **position**.[of](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of') property and the Popover's [target](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/target.md '/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#target') property to specify the element against which the UI component will be positioned. If you set both these properties, **position**.**of** takes precedence.

Besides the position configuration object, the property can take on the following string values, which are shortcuts for the corresponding position configuration.

- "top" - places the popover over the target element
- "bottom" - places the popover under the target element
- "left" - places the popover to the left of the target element
- "right" - places the popover to the right of the target element