If you need to use a custom validation engine for DevExtreme editors, but want to display the validation result using the DevExtreme UI implementation, specify the following options for the validated DevExtreme editors.

- **isValid**  
Specify whether the current editor value is valid against the validation rules that you checked using your custom validation engine.

- **validationError**  
Specify an object that has the **message** field. This field should be a string that defines the error that occurred during validation.