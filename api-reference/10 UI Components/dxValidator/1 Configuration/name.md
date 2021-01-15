---
id: dxValidator.Options.name
type: String
---
---
##### shortDescription
Specifies the editor name to be used in the validation default messages.

---
All predefined rules have a default message displayed when the rules are not satisfied by the validated editor values. If you specify the **name** option of the associated **dxValidator** object, the option value will be used as an object in the default message. For instance, the "Value is invalid" message will be transformed to "Login is invalid", if you set "Login" for the **name** option.