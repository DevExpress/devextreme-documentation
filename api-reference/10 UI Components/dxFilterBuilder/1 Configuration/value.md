---
id: dxFilterBuilder.Options.value
type: Filter expression
default: null
firedEvents: valueChanged
---
---
##### shortDescription
Allows you to specify a filter.

---
[note] This property may contain filter operations that the **DataSource** does not support. Use the [getFilterExpression](/api-reference/10%20UI%20Components/dxFilterBuilder/3%20Methods/getFilterExpression().md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Methods/#getFilterExpression') method to get the **DataSource**-compatible filter expression. If you need to filter dates, you should convert date strings into JavaScript [Date](https://www.w3schools.com/js/js_dates.asp) objects. Filter doesn't support dates specified as strings.

#####See Also#####
- [Data Layer - Filtering](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering')