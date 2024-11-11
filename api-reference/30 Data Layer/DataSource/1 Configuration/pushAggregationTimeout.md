---
id: DataSource.Options.pushAggregationTimeout
type: Number | undefined
default: undefined
---
---
##### shortDescription
Specifies the period (in milliseconds) when changes are aggregated before pushing them to the **DataSource**.

---
When this property is **undefined**, the aggregation period is calculated automatically based on the rendering speed's measurements.

#####See Also#####
- **push(changes)** in: [ArrayStore](/api-reference/30%20Data%20Layer/Store/3%20Methods/push(changes).md '/Documentation/ApiReference/Data_Layer/ArrayStore/Methods/#pushchanges') | [CustomStore](/api-reference/30%20Data%20Layer/Store/3%20Methods/push(changes).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#pushchanges') | [LocalStore](/api-reference/30%20Data%20Layer/Store/3%20Methods/push(changes).md '/Documentation/ApiReference/Data_Layer/LocalStore/Methods/#pushchanges') | [ODataStore](/api-reference/30%20Data%20Layer/Store/3%20Methods/push(changes).md '/Documentation/ApiReference/Data_Layer/ODataStore/Methods/#pushchanges')
- [reshapeOnPush](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/reshapeOnPush.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#reshapeOnPush')