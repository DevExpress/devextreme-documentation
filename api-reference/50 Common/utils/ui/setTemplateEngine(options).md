---
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
A function that inserts data into the template returned by the "compile" function and returns the HTML element to be rendered. The template, data and item index are passed as the function's parameters. Note that the item index is defined only for collection widgets, for example, [List](/concepts/05%20Widgets/List/00%20Overview.md '/Documentation/Guide/Widgets/List/Overview/'), [SelectBox](/concepts/05%20Widgets/SelectBox/00%20Overview.md '/Documentation/Guide/Widgets/SelectBox/Overview/'), [Scheduler](/concepts/05%20Widgets/Scheduler/010%20Overview.md '/Documentation/Guide/Widgets/Scheduler/Overview/').

---
If you need to define a custom template for widget items, you can use a custom template engine, which is different from Knockout and AngularJS engines. To use this engine, call the [DevExpress.ui.setTemplateEngine(name)](/api-reference/50%20Common/utils/ui/setTemplateEngine(name).md '/Documentation/ApiReference/Common/Utils/ui/#setTemplateEnginename') method passing the name of one of the supported template engines. If your template engine is not supported, call the **DevExpress.ui.setTemplateEngine(options)** method passing an object with the **compile** and **render** fields that are set to functions preparing a template and inserting data, respectively.