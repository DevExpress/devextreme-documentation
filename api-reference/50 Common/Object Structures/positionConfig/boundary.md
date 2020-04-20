---
id: positionConfig.boundary
type: String | Node | jQuery | Window
---
---
##### shortDescription
A boundary element in which the overlay element must be positioned.

---
The boundary element limits possible positions for the overlay element. The default boundary element is <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window">Window</a>. If actual boundaries should be narrower or wider than the boundary element, set the [boundaryOffset](/Documentation/ApiReference/Common/Object_Structures/positionConfig/boundaryOffset/). When a specified position exceeds the boundaries, a [collision](/Documentation/ApiReference/Common/Object_Structures/positionConfig/collision/) occurs.

For information on accepted value types, refer to the [of](/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of) option description.