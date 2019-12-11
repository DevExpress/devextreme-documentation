All DevExtreme widgets that operate with data collections have the `DataSource()` method. Unlike other control methods, `DataSource()` do not have a direct counterpart in the DevExtreme JavaScript API, although its purpose resembles that of the **Stores** in the [DevExtreme Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/'). The `DataSource()` method configures data access for a widget. The following topics describe in details how to use this method for accessing data from different sources.

Besides `DataSource()`, data-bound widgets (except **PivotGrid**) have the `DataSourceOptions()` method. It exposes a builder that configures initial sorting, filtering, grouping, and other data shaping operations. The builder's methods do have JavaScript API counterparts, which are described in [this section](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/').

#####See Also#####
- [ASP.NET MVC Controls - Fundamentals](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals')

[tags]asp.net mvc controls, bind data, static collections, webapi, web api, json, odata
