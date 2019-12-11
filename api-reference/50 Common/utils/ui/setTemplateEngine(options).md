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
A function that inserts data into the template returned by the "compile" function and returns the HTML element to be rendered. The data and template are passed as the function's parameters.

---
If you need to define a custom template for widget items, you can use a custom template engine, which is different from Knockout and AngularJS engines. To use this engine, call the [DevExpress.ui.setTemplateEngine(name)](/api-reference/50%20Common/utils/ui/setTemplateEngine(name).md '/Documentation/ApiReference/Common/Utils/ui/#setTemplateEnginename') method passing the name of one of the supported template engines. If your template engine is not supported, call the **DevExpress.ui.setTemplateEngine(options)** method passing an object with the **compile** and **render** fields that are set to functions preparing a template and inserting data, respectively.