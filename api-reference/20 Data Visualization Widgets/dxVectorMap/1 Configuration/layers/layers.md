---
default: undefined
type: Array | Object
---
---
##### notUsedInTheme

##### shortDescription
Specifies options for **VectorMap** widget layers.

---
The vector map may contain several different layers. Each layer can be of *"area"*, *"line"* or *"marker"* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#type').

The [Z-order](https://en.wikipedia.org/wiki/Z-order) of layers depends on their order in the **layers** array in the following way: the first layer occupies the background, the last layer is brought to the foreground.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Vector_Map/MultipleLayers/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>