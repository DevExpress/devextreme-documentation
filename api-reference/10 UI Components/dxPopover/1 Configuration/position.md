---
id: dxPopover.Options.position
acceptValues: 'bottom' | 'left' | 'right' | 'top'
type: String | PositionConfig
default: { my: 'top center', at: 'bottom center', collision: 'fit flip' }
---
---
##### shortDescription
An object defining UI component [positioning properties](/api-reference/50%20Common/Object%20Structures/PositionConfig '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/').

---
You can use the **position**.[of](/api-reference/50%20Common/Object%20Structures/PositionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/#of') property and the Popover's [target](/api-reference/10%20UI%20Components/dxPopover/1%20Configuration/target.md '/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#target') property to specify the element against which the UI component will be positioned. If you set both these properties, **position**.**of** takes precedence.

Besides the position configuration object, the property can take on the following string values, which are shortcuts for the corresponding position configuration.

- "top" - places the popover over the target element
- "bottom" - places the popover under the target element
- "left" - places the popover to the left of the target element
- "right" - places the popover to the right of the target element