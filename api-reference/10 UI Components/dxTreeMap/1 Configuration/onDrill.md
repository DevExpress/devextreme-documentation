---
id: dxTreeMap.Options.onDrill
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a user drills up or down.

##### param(e): Object
Information about the event.

##### field(e.component): dxTreeMap
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeMapNode
The [Node](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/') object.

---
Although not provided out-of-the-box, the drill down capability is easy to implement using the API methods. Learn how to do this from the [drillDown()](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/drillDown().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#drillDown') method description.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/DrillDown/"
}