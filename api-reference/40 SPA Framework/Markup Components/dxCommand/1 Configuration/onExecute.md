---
default: null
type: function(e) | String | Object
---
---
##### shortDescription
Specifies an action performed when the [execute()](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand/3%20Methods/execute().md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Methods/#execute') method of the command is called.

##### param(e): Object
Information about the event.

##### field(e.component): dxCommand
Returns the command instance.

##### field(e.element): dxElement
The command's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
Assign a function to perform a custom action when the command is executed.

You can assign a URL to which the browser will navigate when the widget is clicked. The URL can be presented as a string or an object, both conforming to the [navigation routing](/Documentation/17_2/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing) registered in the application. In addition, you can specify navigation parameters. For this purpose, specify command options with the same names as the fields of the **options** object passed as the second parameter to the [HtmlApplication.navigate(uri, options)](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/navigate(uri_options).md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options') method. For details on using commands for navigation, refer to the [Navigate to a View](/Documentation/17_2/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_to_a_View) topic.