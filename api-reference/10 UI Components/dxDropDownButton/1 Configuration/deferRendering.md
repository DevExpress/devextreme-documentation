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

If you set the `deferRendering` property to **true**, wrap the required content in the Angular named [template](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Templates).

##### Vue

If you set the `deferRendering` property to **true**, wrap the required content in the Vue named [template](/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Templates).

---