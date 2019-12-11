---
type: function(e) | string | object
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
Custom [Knockout](https://knockoutjs.com/documentation/introduction.html) binding that links an HTML element with a specific action.

##### param(e): object
Provides function parameters.

##### field(e.element): jQuery
The DOM element involved in this binding.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused the action execution.

---
Use **dxAction** binding to execute a custom action when clicking a bound HTML element. The action can be defined in one of the following ways.

- Function  
	This function is performed when clicking a bound HTML element.

- String  
	The target URL to be navigated to.

- Object  
	The fields of this object represent parameters for the URL to be navigated to.

Generally, the **dxAction** binding is analogous to the [dxclick](/api-reference/10%20UI%20Widgets/UI%20Events/dxclick.md '/Documentation/ApiReference/UI_Widgets/UI_Events/#dxclick') event supplied with the DexExtreme UI Events library. However, there two distinctions.

 - The **dxAction** binding allows you to navigate to a URL by assigning that URL (a string or an object) as a binding value. For details, refer to the [Navigate to a View](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/2%20Navigate%20to%20a%20View.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_to_a_View') topic.
 
 - When you assign a function to dxAction binding, you can use the function's parameters to access the DOM element involved in this binding, the model that is available for binding against the element and the jQueryEvent that caused the action execution.