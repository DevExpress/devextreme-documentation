---
id: dxVectorMap.Options.onSelectionChanged
type: function(e)
default: null
EventForAction: dxVectorMap.selectionChanged
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a layer element is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): MapLayerElement
The selected/deselected layer element; described in the [Layer Element](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/') section.

---
To identify whether the selection has been applied or canceled, call the layer element's [selected()](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element/3%20Methods/selected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/Methods/#selected') method.