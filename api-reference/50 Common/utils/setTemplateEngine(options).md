---
id: setTemplateEngine(options)
module: common
export: setTemplateEngine
---
---
##### shortDescription
Sets custom functions that compile and render templates.

##### param(templateEngineOptions): Object
An object that contains the functions.

##### field(templateEngineOptions.compile): function()
A function that parses the passed HTML markup and returns a template.

##### field(templateEngineOptions.render): function()
A function that inserts data into the template returned from the **compile** function and returns HTML markup to be rendered.

---
