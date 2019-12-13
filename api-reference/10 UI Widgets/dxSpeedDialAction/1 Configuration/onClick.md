---
id: dxSpeedDialAction.Options.onClick
type: function(e)
EventForAction: dxSpeedDialAction.click
---
---
##### shortDescription
A function that is executed when the FAB or speed dial action button is clicked or tapped.

##### param(e): Object
Information about the event that caused the function execution.

##### field(e.actionElement): dxElement
A DOM element that contains the rendered FAB or speed dial action. It is an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="http://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
A DOM element in which the widget is initialized. It is an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="http://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

##### field(e.event): event
#include common-ref-eventparam

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FloatingActionButton/Overview/jQuery/MaterialBlueLight/"
}