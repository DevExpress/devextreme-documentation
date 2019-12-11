---
##### shortDescription
Decodes the specified URI to an object using the [registered routing rules](/Documentation/17_2/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing).

##### param(uri): String
The URI to be parsed.

##### return: Object
An object whose fields represent routing parameters. The field values are set to the parameter values extracted from the specified URI.

---
Parsing is performed using the rule registered using the [register](/api-reference/40%20SPA%20Framework/Router/3%20Methods/register(pattern_defaults_constraints).md '/Documentation/ApiReference/SPA_Framework/Router/Methods/#registerpattern_defaults_constraints') method. If several routing rules are registered, they are evaluated in the order of registration. If the specified URI fits a rule, the rule is used to process the URL. Otherwise, the remaining routing rules are evaluated one by another.