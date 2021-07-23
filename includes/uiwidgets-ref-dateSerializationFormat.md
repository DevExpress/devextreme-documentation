Specify this property in the following cases:

- The [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') is empty or not set at design time. The **dateSerializationFormat** is needed, because the {WidgetName} cannot detect it automatically without a data source.

- You use the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">createStore</a> method from the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data#devextreme-aspnet-data" target="_blank">DevExtreme.AspNet.Data</a> extension and remote date-time values are specified in UTC. DevExtreme.AspNet.Data requires the **dateSerializationFormat** to correctly serialize these values.

Use one of the following values to specify the **dateSerializationFormat** property:

- `"yyyy-MM-dd"` - local date  

- `"yyyy-MM-ddTHH:mm:ss"` - local date and time  

- `"yyyy-MM-ddTHH:mm:ssZ"` - UTC date and time  

- `"yyyy-MM-ddTHH:mm:ssx"` - date and time with a timezone

This property applies only if the **forceIsoDateParsing** field is set to **true** in the [global configuration object](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig').
