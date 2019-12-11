---
default: 'Value is invalid'
type: string
---
---
##### shortDescription
Specifies the message that is shown for end-users if the current rule is broken.

---
You do not have to specify this field. In this instance, a default message will be shown. To include the name of the validated editor into the default validation message as a subject, set the [name](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#name') field of the **dxValidator** object.

If you assign an empty string to the **message** field, the message will not be shown.