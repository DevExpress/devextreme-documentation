---
id: dxHtmlEditor.getModule(moduleName)
---
---
##### shortDescription
Gets the instance of a module. 

##### return: Object
A module's instance. 

##### param(moduleName): String
The name of a [registered](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#registercomponents) module. 

---
You can get DevExtreme <a href="https://github.com/DevExpress/devextreme-quill/tree/master/modules" target="_blank">Quill modules</a>, DevExtreme <a href="https://github.com/DevExpress/DevExtreme/tree/20_2/js/ui/html_editor/modules" target="_blank">UI modules</a>, or custom modules.

If you implement the [customizeModules](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/#customizeModules) function, make sure that it does not disable the modules that you want to get.
