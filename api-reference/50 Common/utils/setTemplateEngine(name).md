---
id: setTemplateEngine(name)
module: core/set_template_engine
export: default
---
---
##### shortDescription
Sets a supported template engine to use when using jQuery.

##### param(templateEngineName): String
One of *<a href="http://underscorejs.org/" target="_blank">"underscore"</a>*, *<a href="https://github.com/BorisMoore/jsrender" target="_blank">"jsrender"</a>*, *<a href="http://mustache.github.io/" target="_blank">"mustache"</a>*, *<a href="http://twitter.github.io/hogan.js/" target="_blank">"hogan"</a>*, *<a href="http://handlebarsjs.com/" target="_blank">"handlebars"</a>*, and *<a href="http://olado.github.io/doT/index.html" target="_blank">"doT"</a>*.

---
Instead of a supported template engine, you can use the [DevExpress.setTemplateEngine(options)](/api-reference/50%20Common/utils/setTemplateEngine(options).md '/Documentation/ApiReference/Common/utils/#setTemplateEngineoptions') method to define custom functions that compile and render templates.