---
id: dxVectorMap.Options.layers.maxSize
type: Number
default: 50
---
---
##### shortDescription
Specifies the pixel-measured diameter of the marker that represents the biggest value. Setting this option makes sense only if the [layer type](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#type') is *"marker"*.

---
When you use bubble markers on your map, their sizes depend on their values. The biggest value will be represented by the largest bubble. Similarly, the smallest value will be represented by the smallest bubble. Bubbles that represent values in between will have sizes proportional to the represented values. To specify the sizes of the largest and smallest bubbles, use the **maxSize** and **minSize** properties of the **layers** object.