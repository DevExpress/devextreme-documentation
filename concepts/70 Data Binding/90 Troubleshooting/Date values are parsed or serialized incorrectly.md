**Issue**: Date values have an unexpected format when they are displayed in the component or sent to the server.

**Solution**:     
Different browsers parse date strings differently. To compensate for this inconsistency, DevExtreme components use an internal parser. The latter only supports date strings that comply with the <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a> standard, that is - strings that have the following formats:

- `"yyyy-MM-dd"` - parsed as a local date  

- `"yyyy-MM-ddTHH:mm:ss"` - parsed as local date and time  

- `"yyyy-MM-ddTHH:mm:ssZ"` - parsed as UTC date and time  

- `"yyyy-MM-ddTHH:mm:ssx"` - parsed as date and time with a timezone

Date strings in other formats are passed to the Date constructor. There are times when this approach produces different results. Refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse" target="_blank">Date.parse()</a> article for more information. We encourage you to use the ISO 8601 formats to guarantee the absence of possible issues.

If your date strings conform to ISO 8601, DevExtreme components can automatically detect their format and use it for date serialization. However, the detection does not work if the data source is empty. In this instance, set the **dateSerializationFormat** property to specify which ISO 8601 format should be used. This property is supported by all components that allow users to edit date values:

- [DataGrid](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dateSerializationFormat.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dateSerializationFormat')
- [TreeList](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dateSerializationFormat.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dateSerializationFormat')
- [Scheduler](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/dateSerializationFormat.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dateSerializationFormat')
- [Calendar](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/dateSerializationFormat.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#dateSerializationFormat')
- [DateBox](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/dateSerializationFormat.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#dateSerializationFormat')
