### Automatic format detection

When DevExtreme initializes a component, and the component's data source includes a date string, DevExtreme checks if the date string belongs to one of the following <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a> formats:

- `"yyyy-MM-dd"` - local date  

- `"yyyy-MM-ddTHH:mm:ss"` - local date and time  

- `"yyyy-MM-ddTHH:mm:ssZ"` - UTC date and time  

- `"yyyy-MM-ddTHH:mm:ssx"` - date and time with a timezone

DevExtreme guarantees correct serialization of such data.

### Non-standard date strings

If the format of your Date string is different, DevExtreme uses the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse" target="_blank">Date.parse()</a> method to extract the timestamp. Due to the differences in browser engines, this method can yield different results in different browsers. For example:

    Date.parse("04 11 1991");
    // 671338800000 in Chrome and Firefox (Thu Nov 04 1991 00:00:00 GMT+0000);
    // NaN in Safari

Use ISO 8601 date strings to ensure that DevExtreme handles your data with consistency.

### Set the format manually

If the component's initial data source is empty, you have to manually specify the expected data string format. Otherwise, DevExtreme cannot handle user-specified date strings.

Specify an ISO 8601 format with the **dateSerializationFormat** property. This property is compatible with all DevExtreme components that allow users to input date values:

- [DataGrid](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dateSerializationFormat.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dateSerializationFormat')
- [TreeList](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dateSerializationFormat.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dateSerializationFormat')
- [Scheduler](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/dateSerializationFormat.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dateSerializationFormat')
- [Calendar](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/dateSerializationFormat.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#dateSerializationFormat')
- [DateBox](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/dateSerializationFormat.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#dateSerializationFormat')

[important] The format of the date string in your component's data source does not determine the date's final display format.

DevExtreme **does not maintain** the format of the original date string when it converts a timestamp into human-readable form.

The **dateSerializationFormat** property *does not* determine how DevExtreme displays your date.

The [Value Formatting](/concepts/Common/Value%20Formatting '/Documentation/Guide/Common/Value_Formatting/') guide explains how to change the way DevExtreme displays time and date data.