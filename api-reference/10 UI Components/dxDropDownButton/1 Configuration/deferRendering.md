---
id: dxDropDownButton.Options.deferRendering
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to wait until the drop-down menu is opened the first time to render its content.
Specifies whether to render the view's content when it is displayed. If **false**, the content is rendered immediately.

---
If this property is **false**, the content is rendered once the UI component is initialized.

---
##### Angular

If you set the `deferRendering` property to **true**, wrap the content in the Angular named [template](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax/37%20Templates '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Templates').

##### Vue

If you set the `deferRendering` property to **true**, wrap the content in the Vue named [template](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax/37%20Templates.md '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Templates').

---