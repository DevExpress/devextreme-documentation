---
id: ODataContext.Options.processDatesAsUtc
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether requests and attached components ignore time zones when treating date-time field values.

---
This option specifies how to treat values in *"Date"* and *"DateTimeOffset"* [field types](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/fieldTypes.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#fieldTypes'). 

If the option is `true`, stores in the ODataContext ignore specified time zones and processes date values as UTC (set the [time zone designator](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) in an ISO 8601 string to "Z"). 

If the option is `false` (default), stores use the following time zone offsets to convert dates to UTC:

- Time zones specified in *"Date"* and *"DateTimeOffset"* values.
- The time zone set on a client's machine.