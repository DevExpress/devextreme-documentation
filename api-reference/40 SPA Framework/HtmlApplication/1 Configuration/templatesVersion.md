---
default: undefined
type: String
---
---
##### shortDescription
Specifies the current version of application templates.

---
Loading and pre-processing application templates usually takes significant time. A DevExtreme application can cache the resulting markup in the browser's local storage to avoid loading and pre-processing templates at the second and subsequent application startups. To enable caching, specify the current version of the application templates using the **templatesVersion** option.

Increment the templates version each time you change application templates to regenerate the markup according to the new templates.

[note]Disable template caching when debugging your application. In this case, you are not required to increment the template version each time you update templates. Moreover, if you run different applications with template caching enabled on **localhost**, one application can access another application's template cache stored in the browser's local storage, which will cause unexpected results.