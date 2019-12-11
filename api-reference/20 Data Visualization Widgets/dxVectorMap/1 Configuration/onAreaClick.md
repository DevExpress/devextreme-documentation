---
dep: onClick.md
EventForAction: ..\4 Events\areaClick.md
type: function(e) | String
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [areaClick](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/4%20Events/areaClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#areaClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance').

##### field(e.element): Object
The widget's container.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event.

##### field(e.target): areaObjects
The clicked area.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked area. An object that represents this area has fields and methods documented in the [Area](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Area '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/') class description.

Alternatively, you can navigate to a specific URL when the **areaClick** event fires. For this purpose, assign this URL to the **onAreaClick** option.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapcolorscustomization/"
}