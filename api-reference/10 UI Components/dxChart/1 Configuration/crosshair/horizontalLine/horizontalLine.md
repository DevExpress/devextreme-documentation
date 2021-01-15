---
id: dxChart.Options.crosshair.horizontalLine
type: Object | Boolean
---
---
##### shortDescription
Configures the horizontal crosshair line individually.

---
Crosshair lines can be configured using the following objects.

* **crosshair**.**horizontalLine**       
Configures the horizontal crosshair line only.

* **crosshair**.[verticalLine](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/crosshair/verticalLine '/Documentation/ApiReference/UI_Components/dxChart/Configuration/crosshair/verticalLine/')     
Configures the vertical crosshair line only.

* **crosshair**    
Configures both the crosshair lines.

Properties declared in the **horizontalLine** and **verticalLine** objects override the properties declared in the **crosshair** object.

[note]Instead of an object, you can assign a Boolean value to the **horizontalLine** field. This value will control the visibility of the horizontal crosshair line.