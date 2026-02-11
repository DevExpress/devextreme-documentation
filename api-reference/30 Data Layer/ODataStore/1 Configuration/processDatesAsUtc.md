---
id: ODataStore.Options.processDatesAsUtc
type: Boolean
default: false
---
---
##### shortDescription
Configures whether to ignore specified time zones for *"Date"* and *"DateTimeOffset"* [field types](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#fieldTypes) (in requests and attached components).

---
This option specifies how to treat values in *"Date"* and *"DateTimeOffset"* [field types](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#fieldTypes). 

If the option is `true`, ODataStore ignores specified time zones and processes date values as UTC (sets the [time zone designator](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) in an ISO 8601 string to "Z"). 

If the option is `false` (default), the store uses the following time zone offsets to convert dates to UTC:

- Time zones specified in *"Date"* and *"DateTimeOffset"* values.
- The time zone set on a client's machine.