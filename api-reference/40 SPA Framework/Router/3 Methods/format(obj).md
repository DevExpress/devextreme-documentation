---
##### shortDescription
Formats an object to a URI.

##### param(obj): Object
An object whose fields represent routing parameters.

##### return: String
A URI generated from the specified object using the [registered routing rules](/Documentation/17_2/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing).

---
Formatting is performed using the rule registered using the [register](/api-reference/40%20SPA%20Framework/Router/3%20Methods/register(pattern_defaults_constraints).md '/Documentation/ApiReference/SPA_Framework/Router/Methods/#registerpattern_defaults_constraints') method. If several routing rules are registered, they are evaluated in the order of registration. If the specified object fits a rule, the rule is used to generate a URI. Otherwise, the remaining routing rules are evaluated by one another.