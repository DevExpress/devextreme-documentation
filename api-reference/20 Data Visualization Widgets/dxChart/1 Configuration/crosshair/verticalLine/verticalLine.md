---
id: dxChart.Options.crosshair.verticalLine
type: Object | Boolean
---
---
##### shortDescription
Configures the vertical crosshair line individually.

---
Crosshair lines can be configured using the following objects.

* **crosshair**.[horizontalLine](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/crosshair/horizontalLine '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/crosshair/horizontalLine/')       
Configures the horizontal crosshair line only.

* **crosshair**.**verticalLine**     
Configures the vertical crosshair line only.

* **crosshair**    
Configures both the crosshair lines.

Options declared in the **horizontalLine** and **verticalLine** objects override the options declared in the **crosshair** object.

[note]Instead of an object, you can assign a Boolean value to the **verticalLine** field. This value will control the visibility of the vertical crosshair line.