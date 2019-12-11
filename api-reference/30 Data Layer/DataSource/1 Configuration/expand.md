---
type: Array | String
---
---
##### shortDescription
An array of the strings that represent the names of the navigation properties to be loaded simultaneously with the OData store's entity.

---
This option is specific to the data sources that use a [data store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') of the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') type.

To learn more on this option, refer to the [Associations](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData/4%20Associations.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Associations') topic.

In an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option in the `OData()` data source:

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSource(ds => ds.OData()
            .Expand("PropertyName1", "PropertyName2")
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().WidgetName() _
        .DataSource(Function(ds)
            Return ds.OData() _
                     .Expand("PropertyName1", "PropertyName2")
        End Function)
    )