---
default: null
type: function() | String | Object
---
---
##### shortDescription
Specifies an action performed when the [execute()](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand/3%20Methods/execute().md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Methods/#execute') method of the command is called.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Returns the command instance.

##### field(e.element): jQuery
Returns an HTML element representing the command.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
Assign a function to perform a custom action when the command is executed.

You can assign a URL to which the browser will navigate when the widget is clicked. The URL can be presented as a string or an object, both conforming to the [navigation routing](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/1%20Declare%20a%20Routing.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing') registered in the application. In addition, you can specify navigation parameters. For this purpose, specify command options with the same names as the fields of the **options** object passed as the second parameter to the [HtmlApplication.navigate(uri, options)](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/navigate(uri_options).md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options') method. For details on using commands for navigation, refer to the [Navigate to a View](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/2%20Navigate%20to%20a%20View.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_to_a_View') topic.