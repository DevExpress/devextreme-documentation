---
id: dxSpeedDialAction.Options.onContentReady
type: function(e)
default: null
---
---
##### param(e): Object
Information about the event that caused the function execution.

##### field(e.actionElement): dxElement
A DOM element that contains the rendered FAB or speed dial action. It is an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="http://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
A DOM element in which the UI component is initialized. It is an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="http://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

##### field(e.model): Object
Model data. Available only when using Knockout.

---
