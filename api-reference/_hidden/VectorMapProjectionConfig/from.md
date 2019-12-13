---
id: VectorMapProjectionConfig.from
type: function(coordinates)
---
---
##### shortDescription
Converts coordinates from [x, y] to [lon, lat].

##### param(coordinates): Array<Number>
Two coordinates that represent a point in the widget coordinate system.    
Each coordinate ranges from -1 to 1.

##### return: Array<Number>
Two coordinates that represent the same point in the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource') coordinate system.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/CustomProjection/"
}