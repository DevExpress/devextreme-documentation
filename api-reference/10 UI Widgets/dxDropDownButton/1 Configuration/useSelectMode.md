---
id: dxDropDownButton.Options.useSelectMode
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the widget stores the selected drop-down menu item.

---
When you set this option to **true**, the following applies:

- The [selectedItemKey](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/selectedItemKey.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#selectedItemKey') and [selectedItem](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/selectedItem.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#selectedItem') options can be used.

- The [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#onSelectionChanged') function can be executed.

- The button's text and icon are taken from the [selected item](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/selectedItemKey.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#selectedItemKey'). If you use the [dropDownContentTemplate](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/dropDownContentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#dropDownContentTemplate'), you should update the **selectedItemKey** and the button's appearance.