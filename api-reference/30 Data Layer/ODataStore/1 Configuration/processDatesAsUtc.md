---
id: ODataStore.Options.processDatesAsUtc
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether to ignore specified time zones in *"Date"* and *"DateTimeOffset"* values.

---
When enabled, ODataStore ignores specified time zones and processes date values as UTC (sets the [time zone designator](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) in an ISO 8601 string to "Z"). When disabled (default), the store uses the following time zone offsets to convert dates to UTC:

- Time zones specified in *"Date"* and *"DateTimeOffset"* values.
- The time zone set on a client's machine.