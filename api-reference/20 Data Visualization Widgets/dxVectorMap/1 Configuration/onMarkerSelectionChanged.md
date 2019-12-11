---
dep: onSelectionChanged.md
EventForAction: ..\4 Events\markerSelectionChanged.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A function that is executed when an [marker](/concepts/05%20Widgets/VectorMap/10%20Visual%20Elements/20%20Markers.md '/Documentation/Guide/Widgets/VectorMap/Visual_Elements/#Markers') is selected or the selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): markerObjects
The selected/deselected marker; described in the [Marker](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Marker '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/') section.

---
To identify whether the selection has been applied or canceled, call the marker's [selected()](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Marker/3%20Methods/selected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/Methods/#selected') method.