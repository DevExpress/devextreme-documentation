---
dep: ..\..\layers\label\label.md
type: Object
---
---
##### shortDescription
Configures area labels.

---
An area label is a text that accompanies a [map area](/concepts/05%20Widgets/VectorMap/10%20Visual%20Elements/10%20Areas.md '/Documentation/Guide/Widgets/VectorMap/Visual_Elements/#Areas'). Usually, an area label displays the name of a certain geographical object, such as a country, a continent, etc.

Texts for area labels are provided by one of the fields of the **attributes** object. This object must be declared in the map [data source](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/mapData.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#mapData'), while the required field must be assigned to the [dataField](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/label/dataField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/label/#dataField') option of the **label** object.

If you have provided data for area labels, enable them on your map by assigning **true** to the [enabled](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/label/enabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/label/#enabled') option of the **label** object.

In addition, you can change the appearance of area labels using the **label**.[font](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/areaSettings/label/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/label/font/') object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapareawithlabelandtwolegend/"
}