---
default: 'include'
acceptValues: 'exclude' | 'include'
type: String
---
---
##### shortDescription
Specifies whether a user can change the current filter by including (selecting) or excluding (clearing the selection) [values](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/filterValues.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterValues'). Applies only if [allowFiltering](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowFiltering.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowFiltering') is **true**.

---
This option accepts the following values:

- *"include"*   
Values in the popup window are unselected initially. The user can change the filter by selecting (including) these values.
- *"exclude"*   
All values in the popup window are selected initially. The user can change the filter by unselecting (excluding) specific values.

A user can also change the **filterType** using the UI. Selecting all values changes the **filterType** to *"exclude"*; clearing the selection using the *"Select All"* checkbox changes it to *"include"*.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `FilterType` enum. This enum accepts the following values: `Include` and `Exclude`.