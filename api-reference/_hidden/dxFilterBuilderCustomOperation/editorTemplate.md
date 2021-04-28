---
id: dxFilterBuilderCustomOperation.editorTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for the UI component used to edit the field value.

##### param(conditionInfo): Object
Information about a FilterBuilder field.

##### field(conditionInfo.field): dxFilterBuilderField
The field's configuration.

##### field(conditionInfo.setValue): function()
A method you should call to change the field value after the editor value changes.

##### field(conditionInfo.value): String | Number | Date
The editor's value.

##### param(container): DxElement
#include common-ref-elementparam with { element: "editor" }

##### return: String | Element | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/Customization/"
}

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')