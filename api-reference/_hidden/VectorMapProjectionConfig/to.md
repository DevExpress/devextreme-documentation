---
id: VectorMapProjectionConfig.to
type: function(coordinates)
---
---
##### shortDescription
Converts coordinates from [lon, lat] to [x, y].

##### param(coordinates): Array<Number>
Two coordinates that represent a point in the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource') coordinate system.

##### return: Array<Number>
Two coordinates that represent the same point in the widget coordinate system.    
Each coordinate should be in the range from -1 to 1.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/CustomProjection/"
}