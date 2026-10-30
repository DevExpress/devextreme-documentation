Angular updates the view without additional code when you use the following patterns:

- Event bindings in templates, such as `(onSelectionChanged)`
- Two-way bindings to signals or class fields, including bindings in nested components (such as `[(pageIndex)]` in `dxo-data-grid-paging`)
- Output subscriptions in code, such as `onSelectionChanged.subscribe()`
- Event handlers attached using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#oneventName_eventHandler) method, including **optionChanged** handlers
- Template expressions that read component properties, such as `grid.selectedRowKeys`
- A [formData](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#formData) object that users edit in the Form
- [Custom template](/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates) content that reads signals or contains event bindings
