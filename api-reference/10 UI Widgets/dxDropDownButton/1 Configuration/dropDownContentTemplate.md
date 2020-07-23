---
id: dxDropDownButton.Options.dropDownContentTemplate
type: template
default: 'content'
---
---
##### shortDescription
Specifies custom content for the drop-down field.

##### param(data): Array<String, Number, Object> | DataSource
The array passed to the [items](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/items/') option or a **DataSource** instance created using the [dataSource](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#dataSource') configuration.

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "drop-down field" }

##### return: String | Element | jQuery
A template name or container.

---
The drop-down field contains the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI) widget. Implement this template to replace the widget with custom content. The following restrictions apply when the template is specified:

- [itemTemplate](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#itemTemplate') is ignored;
- [onItemClick](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#onItemClick') and [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#onSelectionChanged') are never executed;
- [selectedItemKey](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/selectedItemKey.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#selectedItemKey') should be updated manually.

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')