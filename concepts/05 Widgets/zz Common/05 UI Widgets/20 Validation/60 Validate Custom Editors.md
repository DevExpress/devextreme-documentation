There can be scenarios when you cannot associate the **Validator** widget with an editor, because this editor is not a DevExtreme editor or a validated value is a concatenation of several DevExtreme editor values. In this instance, create the **Validator** widget and specify an adapter for it using the [adapter](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/adapter '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#adapter') configuration option. An adapter is required to "tell" the **Validator** what and when to validate, and how to apply the validation result.

By default, when you do not specify the **adapter** option, a default adapter is used. The default adapter does the following.

 - Specifies the current value of the associated editor as the **getValue** function's return value.
 - Fires the **validationRequestsCallbacks** passed to the validator when the event specified by the editor's **valueChangeEvent** is raised.
 - Sets the editor's **isValid** and **validationError** options to the values provided by the validator's validation result.
 - Sets the editor's value to *undefined*.
 - Focuses the validated editor.
