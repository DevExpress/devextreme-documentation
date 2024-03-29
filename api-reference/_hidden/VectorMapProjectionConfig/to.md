---
id: VectorMapProjectionConfig.to
type: function(coordinates)
---
---
##### shortDescription
Converts coordinates from [lon, lat] to [x, y].

##### param(coordinates): Array<Number>
Two coordinates that represent a point in the [dataSource](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#dataSource') coordinate system.

##### return: Array<Number>
Two coordinates that represent the same point in the UI component coordinate system.    
Each coordinate should be in the range from -1 to 1.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/CustomProjection/"
}