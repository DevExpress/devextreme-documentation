---
id: dxToast.Options.height
type: Number | String | function()
default: 'auto'
---
---
##### return: Number | String
The UI component's height.

---

This property accepts a value of one of the following types:

- **Number**  
The height in pixels.

- **String**  
A CSS-accepted measurement of height. For example, `"55px"`, `"20vh"`, `"auto"`, `"inherit"`.

- **Function** (deprecated since v21.2)         
Refer to the [W0017](/api-reference/50%20Common/utils/zz%20Errors%20and%20Warnings/W0017.md '/Documentation/ApiReference/Common/Utils/Errors_and_Warnings/#W0017') warning description for information on how you can migrate to viewport units.

The {WidgetName} calculates its height relative to one of the elements in the following priority: [position](/api-reference/10%20UI%20Components/dxToast/1%20Configuration/position.md '{basewidgetpath}/Configuration/#position').[of](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/#of') => **window**.