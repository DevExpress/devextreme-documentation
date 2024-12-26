---
id: dxHtmlEditor.getModule(moduleName)
---
---
##### shortDescription
Gets the instance of a module.

##### return: Object
A module's instance.

##### param(moduleName): String
The name of a [registered](/api-reference/10%20UI%20Components/dxHtmlEditor/3%20Methods/register(components).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#registercomponents') module.

---
You can get DevExtreme <a href="https://github.com/DevExpress/devextreme-quill/tree/master/modules" target="_blank">Quill modules</a>, DevExtreme <a href="https://github.com/DevExpress/DevExtreme/tree/25_1/packages/devextreme/js/__internal/ui/html_editor/modules" target="_blank">UI modules</a>, or custom modules.

If you implement the [customizeModules](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/customizeModules.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#customizeModules') function, make sure that it does not disable the modules that you want to get.
