---
id: LoadOptions.group
type: Object
---
---
##### shortDescription
A group expression.

---
Defines grouping levels to be applied to the data. This object can have the following fields:

* **selector**: <span style="font-size:smaller">String</span>     
The field name to group by.
* **desc**: <span style="font-size:smaller">Boolean</span>     
Defines the selector field's descending sort order.
* **isExpanded**: <span style="font-size:smaller">Boolean</span>
Defines whether to return the group's data objects. This field always returns **true** for all groups except for the last one. The **isExpanded** field can be **true** or **false** for the last group if the **remoteOperations.paging** is disabled.
* **groupInterval**: <span style="font-size:smaller">Number or String</span>     
A numeric value groups data in ranges of the given length. A string value applies only to dates and can be *"year"*, *"quarter"*, *"month"*, *"day"*, *"dayOfWeek"*, *"hour"*, *"minute"* and *"second"*.
