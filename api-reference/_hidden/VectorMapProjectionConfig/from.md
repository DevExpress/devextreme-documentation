---
id: VectorMapProjectionConfig.from
type: function(coordinates)
---
---
##### shortDescription
Converts coordinates from [x, y] to [lon, lat].

##### param(coordinates): Array<Number>
Two coordinates that represent a point in the UI component coordinate system.    
Each coordinate ranges from -1 to 1.

##### return: Array<Number>
Two coordinates that represent the same point in the [dataSource](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#dataSource') coordinate system.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/CustomProjection/"
}