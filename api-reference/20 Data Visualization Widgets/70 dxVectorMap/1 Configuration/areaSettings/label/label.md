---
dep: ..\..\layers\label\label.md
type: object
---
---
##### deprecated
Use the **layers** | **label** option instead.

##### shortDescription
Configures area labels.

---
An area label is a text that accompanies a [map area](/concepts/20%20Data%20Visualization/35%20VectorMap/10%20Map%20Elements/10%20Areas.md '/Documentation/Guide/Data_Visualization/VectorMap/Map_Elements/#Areas'). Usually, an area label displays the name of a certain geographical object, such as a country, a continent, etc.

Texts for area labels are provided by one of the fields of the **attributes** object. This object must be declared in the map [data source](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/mapData.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#mapData'), while the required field must be assigned to the [dataField](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/areaSettings/label/dataField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/label/#dataField') option of the **label** object.

If you have provided data for area labels, enable them on your map by assigning *true* to the [enabled](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/areaSettings/label/enabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/label/#enabled') option of the **label** object.

In addition, you can change the appearance of area labels using the **label** | [font](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/areaSettings/label/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/areaSettings/label/font/') object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapareawithlabelandtwolegend/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>