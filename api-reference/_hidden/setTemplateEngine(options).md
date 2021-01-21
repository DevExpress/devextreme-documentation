---
id: ui.setTemplateEngine(options)
module: ui/set_template_engine
export: default
---
---
##### shortDescription
Sets a custom template engine defined via custom compile and render functions.

##### param(templateEngineOptions): Object
An object providing functions for parsing and rendering templates.

##### field(templateEngineOptions.compile): function()
A function that parses the passed HTML or DOM element and returns a template.

##### field(templateEngineOptions.render): function()
A function that inserts data into the template returned by the "compile" function and returns the HTML element to be rendered. The template, data and item index are passed as the function's parameters. Note that the item index is defined only for collection UI components, for example, [List](/concepts/05%20Widgets/List/00%20Overview.md '/Documentation/Guide/UI_Components/List/Overview/'), [SelectBox](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/'), [Scheduler](/concepts/05%20Widgets/Scheduler/010%20Overview.md '/Documentation/Guide/UI_Components/Scheduler/Overview/').

---
