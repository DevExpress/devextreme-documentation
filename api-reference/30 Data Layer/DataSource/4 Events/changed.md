---
id: DataSource.changed
type: eventType
---
---
##### shortDescription
Raised after data is loaded.

##### param(e): Object
Information about changes.      
Appears only when the **push(changes)** method is called and the [reshapeOnPush](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/reshapeOnPush.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#reshapeOnPush') option is **false**.

##### field(e.changes): Array<any>
The received changes.

---
Main article: [onChanged](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/onChanged.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#onChanged')