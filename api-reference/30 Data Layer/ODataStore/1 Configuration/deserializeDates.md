---
id: ODataStore.Options.deserializeDates
type: Boolean
---
---
##### shortDescription
Specifies whether the store serializes/parses date-time values.

---
ODataStore can parse date-time values in <a href="https://www.w3.org/TR/NOTE-datetime" target="_blank">ISO8601 format</a> (for example, `"2016-07-13T16:05:00.000Z"`) or <a href="https://weblogs.asp.net/bleroy/dates-and-json" target="_blank">Microsoft format</a> (for instance, `"/Date(1198908717056)/"`). In the first case, the store ignores the timezone modifier (usually `Z`) when parsing the value. In the second case, the store adds the time-zone offset to the value according to the client's time-zone.

[note]

Disabling deserialization may cause filtering issues in widgets bound to the **ODataStore**. When deserialization is disabled in the store, date-time strings are converted to Date objects at the widget level. When filtering, the widget reverts an entered date-time value to a string based on the [dateSerializationFormat](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dateSerializationFormat.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dateSerializationFormat') option's value and passes the string to the **ODataStore** for further processing. OData does not support strings which cause filtering to fail.

To prevent these issues, the store's **deserializeDates** option should be set to **true** or set the widget's **dateSerializationFormat** option to **null**.

[/note]