---
dep: 
type: function(e) | String | Object
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### deprecated
#include spa-deprecated-note

##### shortDescription
Custom [Knockout](https://knockoutjs.com/documentation/introduction.html) binding that links an HTML element with a specific action.

##### param(e): Object
Information about the event.

##### field(e.element): jQuery
The DOM element involved in this binding.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

---
Use **dxAction** binding to execute a custom action when clicking a bound HTML element. The action can be defined in one of the following ways.

- Function  
    This function is performed when clicking a bound HTML element.

- String  
    The target URL to be navigated to.

- Object  
    The fields of this object represent parameters for the URL to be navigated to.

Generally, the **dxAction** binding is analogous to the [dxclick](/api-reference/10%20UI%20Widgets/UI%20Events/dxclick.md '/Documentation/ApiReference/UI_Widgets/UI_Events/#dxclick') event supplied with the DexExtreme UI Events library. However, there two distinctions.

 - The **dxAction** binding allows you to navigate to a URL by assigning that URL (a string or an object) as a binding value. For details, refer to the [Navigate to a View](/Documentation/17_2/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_to_a_View) topic.
 
 - When you assign a function to dxAction binding, you can use the function's parameters to access the DOM element involved in this binding, the model that is available for binding against the element and the jQueryEvent that caused the action execution.