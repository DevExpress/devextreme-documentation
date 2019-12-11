---
##### shortDescription
Creates global navigation commands.

##### param(navigationConfig): Array<Object>
An array of dxCommand configuration objects defining commands for the global navigation.

---
Use this method to create navigation commands dynamically. The created commands are [mapped](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/commandMapping.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#commandMapping') to the "global-navigation" [command container](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommandContainer '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommandContainer/'). You can access them via the application's [navigation](/api-reference/40%20SPA%20Framework/HtmlApplication/2%20Fields/navigation.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Fields/#navigation') field. To display these navigation commands within the navigation controls used in the application's layouts, call the [renderNavigation](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/renderNavigation().md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#renderNavigation') method.