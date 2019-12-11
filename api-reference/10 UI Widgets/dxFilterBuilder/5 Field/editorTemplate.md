---
type: template
---
---
##### shortDescription
Specifies the editor's custom template.

##### param(conditionInfo): Object
The condition's settings.

##### field(conditionInfo.value): String|Number|Date
The condition's data field value.

##### field(conditionInfo.filterOperation): String
The condition's operation.

##### field(conditionInfo.field): dxFilterBuilderField
The condition's configuration.

##### field(conditionInfo.setValue): function()
A method that you should call to change the field value after the editor's value is changed.

##### param(container): dxElement
The editor's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### return: String|Node|jQuery
A template name or container.

---
#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')