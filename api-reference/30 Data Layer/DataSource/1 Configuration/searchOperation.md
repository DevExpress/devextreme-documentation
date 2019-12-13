---
id: DataSource.Options.searchOperation
type: String
default: 'contains'
---
---
##### shortDescription
Specifies the comparison operation used in searching. The following values are accepted: *"="*, *"<>"*, *">"*, *">="*, *"<"*, *"<="*, *"startswith"*, *"endswith"*, *"contains"*, *"notcontains"*.

---
You can use this option with [searchExpr](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr') and [searchValue](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchValue.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchValue') to specify a simple filter. Use the [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') option for more complex filtering conditions. Filters are combined if you specify them in both ways.

In an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, specify this option using the `FilterOperations` enum that accepts the following values: `Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith` and `Between`.

#####See Also#####
- [Data Layer - Search Api](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/2%20Search%20Api.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Search_Api')