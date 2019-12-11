---
default: 'instantly'
acceptValues: 'instantly' | 'useButtons'
type: String
---
---
##### shortDescription
Specifies the way an end-user applies the selected value.

---
The option accepts the following values.

- 'useButtons'  
 Enables an end-user to apply the selected value or cancel the selection using the Apply and Cancel buttons respectively.

- 'instantly'  
 Applies the selected value immediately after a user clicks the required value in the drop-down menu. To cancel the selection, click outside the drop-down menu.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `EditorApplyValueMode` enum. This enum accepts the following values: `Instantly` and `UseButtons`.