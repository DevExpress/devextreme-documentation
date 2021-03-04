---
id: dxDiagram.export()
---
---
##### shortDescription
Exports the diagram data to a JSON object.

##### return: String
The diagram data in JSON format.

---
The **export** method allows you to save information about a diagram's layout, appearance, and the diagram's shape positions. 

The component saves the diagram's data in its own text format. The resulting JSON object contains measurements in twips, regardless of the [units](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units) or [viewUnits](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#viewUnits) property values. Do not modify this JSON object because modified data can load incorrectly.

Use the [import](/api-reference/10%20UI%20Widgets/dxDiagram/3%20Methods/import(data_updateExistingItemsOnly).md '/Documentation/ApiReference/UI_Components/dxDiagram/Methods/#importdata_updateExistingItemsOnly') method to load this data on demand.


