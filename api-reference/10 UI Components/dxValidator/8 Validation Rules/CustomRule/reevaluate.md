---
id: CustomRule.reevaluate
type: Boolean
default: false
---
---
##### shortDescription
Indicates whether the rule should be always checked for the target value or only when the target value changes.

---
If you set this property to `false`, the rule is checked only when you change an editor's value. If you enter a value and validate the editor's value twice, a validation callback is executed only once.

If you set this property to `true`, the rule is checked every time an editor is validated. If you enter a value and validate the editor's value twice, a validation callback is executed twice.