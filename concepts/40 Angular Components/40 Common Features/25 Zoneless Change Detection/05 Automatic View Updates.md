Angular updates the view without additional code when you use the following patterns:

- Event bindings in templates, such as `(onSelectionChanged)`
- Two-way bindings to signals or class fields, including bindings in nested components (such as `[(pageIndex)]` in `dxo-data-grid-paging`)
- Output subscriptions in code, such as `onSelectionChanged.subscribe()`
- Event handlers attached using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#oneventName_eventHandler') method, including **optionChanged** handlers for properties that support two-way binding
- Template expressions that read component properties, such as `grid.selectedRowKeys`
- A [formData](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#formData') object that users edit in the Form
- [Custom template](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates') content that reads signals or contains event bindings
