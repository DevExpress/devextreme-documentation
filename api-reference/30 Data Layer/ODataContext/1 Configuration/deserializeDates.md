---
type: Boolean
---
---
##### shortDescription
Specifies whether or not dates in a response are deserialized.

---
The underlying [ODataStore](/api-reference/30%20Data%20Layer/ODataStore 'Documentation/ApiReference/Data_Layer/ODataStore') can deserialize dates represented in the [ISO8601 format](https://www.w3.org/TR/NOTE-datetime) (e.g "2016-07-13T16:05:00.000Z") or [format used by Microsoft](https://weblogs.asp.net/bleroy/dates-and-json) (e.g., "/Date(1198908717056)/"). In the second case, the ODataStore adds the time-zone offset corresponding to the client time-zone. In the first case, the ODataStore parses the date string without taking a timezone modifier (for example "Z") into account.