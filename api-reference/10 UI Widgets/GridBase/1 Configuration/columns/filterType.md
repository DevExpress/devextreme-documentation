---
default: 'include'
acceptValues: 'exclude' | 'include'
type: String
---
---
##### shortDescription
Specifies whether a user changes the current filter by including (selecting) or excluding (clearing the selection of) values. Applies only if [headerFilter](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/headerFilter '{basewidgetpath}/Configuration/headerFilter/').**visible** and [allowHeaderFiltering](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/allowHeaderFiltering.md '{basewidgetpath}/Configuration/columns/#allowHeaderFiltering') are **true**.

---
This option accepts the following values.

- **include**       
Values in the header filter are unselected initially, and the user changes the filter by selecting, that is, including the values.
- **exclude**       
All values in the header filter are selected initially, and the user changes the filter by clearing the selection of certain values, that is, by excluding them.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `FilterType` enum. This enum accepts the following values: `Include` and `Exclude`.

#####See Also#####
- [Filtering API](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/5%20API '/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#API')
- **columns[]**.[filterValues](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/filterValues.md '{basewidgetpath}/Configuration/columns/#filterValues')