---
id: positionConfig.boundary
type: String | Element | jQuery | Window
---
---
##### shortDescription
A boundary element in which the overlay element must be positioned.

---
The boundary element limits possible positions for the overlay element. The default boundary element is <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window">Window</a>. If actual boundaries should be narrower or wider than the boundary element, set the [boundaryOffset](/api-reference/50%20Common/Object%20Structures/positionConfig/boundaryOffset '/Documentation/ApiReference/Common/Object_Structures/positionConfig/boundaryOffset/'). When a specified position exceeds the boundaries, a [collision](/api-reference/50%20Common/Object%20Structures/positionConfig/collision '/Documentation/ApiReference/Common/Object_Structures/positionConfig/collision/') occurs.

For information on accepted value types, refer to the [of](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of') option description.