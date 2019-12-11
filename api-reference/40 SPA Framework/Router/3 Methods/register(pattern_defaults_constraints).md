---
##### shortDescription
Adds a routing rule to the list of registered rules.

##### param(pattern): String
Specifies the parameters a URL must contain in order to be processed by the rule.

##### param(defaults): Object
An object whose field names correspond to the pattern parameters. These fields are set to the parameters' default values.

##### param(constraints): Object
An object whose field names correspond to the pattern parameters. These fields are set to the parameters' constraint expressions.

---
Use this method to register a routing rule in an application. Call this method after instantiating the [HtmlApplication](/api-reference/40%20SPA%20Framework/HtmlApplication '/Documentation/ApiReference/SPA_Framework/HtmlApplication/') object.

For details of possible variants of rule patterns, defaults and constraints, refer to the [Declare a Routing](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/1%20Declare%20a%20Routing.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing') topic.