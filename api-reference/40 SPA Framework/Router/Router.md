---
module: framework/router
type: object
---
---
##### shortDescription
An object responsible for routing.

---
The DevExtreme SPA framework comes with an integrated navigation system that allows you to navigate to views easily - by specifying the view name along with the associated parameters. To encode navigation information to a URI and then decode it from the URL fragments, routing rules must be defined in the application. The Router object allows you to register routing rules to be used for navigation. Use the Router's [register()](/api-reference/40%20SPA%20Framework/Router/3%20Methods/register(pattern_defaults_constraints).md '/Documentation/ApiReference/SPA_Framework/Router/Methods/#registerpattern_defaults_constraints') method to add a routing rule.

To parse a URI or format an object to a URI, use the Router's [parse(uri)](/api-reference/40%20SPA%20Framework/Router/3%20Methods/parse(uri).md '/Documentation/ApiReference/SPA_Framework/Router/Methods/#parseuri') and [format(obj)](/api-reference/40%20SPA%20Framework/Router/3%20Methods/format(obj).md '/Documentation/ApiReference/SPA_Framework/Router/Methods/#formatobj') methods respectively.

To learn more about routing rules, refer to the [Declare a Routing](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/1%20Declare%20a%20Routing.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing') topic.