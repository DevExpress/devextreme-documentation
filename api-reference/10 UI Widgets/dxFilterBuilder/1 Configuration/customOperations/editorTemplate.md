---
type: template
---
---
##### shortDescription
Specifies a custom template for the widget used to edit the field value.

##### param(conditionInfo): Object
Information about a **FilterBuilder** field.

##### field(conditionInfo.value): String | Number | Date
The editor's value.

##### field(conditionInfo.field): dxFilterBuilderField
The field's configuration.

##### field(conditionInfo.setValue): function()
A method that you should call to change the field value after the editor value changes.

##### param(container): dxElement
The editor's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### return: String|Node|jQuery
A template name or container.

---
#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')