---
id: dxVectorMap.Options.layers
type: Array<Object> | Object
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Specifies options for **VectorMap** widget layers.

---
The vector map may contain several different layers. Each layer can be of *"area"*, *"line"* or *"marker"* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#type').

The <a href="https://en.wikipedia.org/wiki/Z-order" target="_blank">Z-order</a> of layers depends on their order in the **layers** array in the following way: the first layer occupies the background, the last layer is brought to the foreground.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Vector_Map/MultipleLayers/"
}