This template can be used instead of [editorType](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType') and [editorOptions](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions')  to configure a custom editor. It gives you the advantage of using nested configuration components. When you configure a custom editor in the template, consider the following specificities:

- Use two-way binding to bind the custom editor to a [formData](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#formData') field.

- If you use validation, define validation rules in the editor, not in the form item.

- Use the same [validationGroup](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#validationGroup') as the Form to ensure the custom editor is validated simultaneously with other form editors.

The code below configures the [DateBox](/api-reference/10%20UI%20Components/dxDateBox '/Documentation/ApiReference/UI_Components/dxDateBox/') UI component in the template. The UI component is bound to the `BirthDate` field of  **formData** and has a validation group and two validation rules: