---
id: DataSource.reload()
---
---
##### shortDescription
Clears currently loaded **DataSource** items and calls the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method.

##### return: Promise<any>
A Promise that is resolved after loading is completed and rejected after loading failed.
#include ref-promisedistinction

---
The Promise returned from this method is extended with the **operationId** field which you can use to cancel the invoked operation. See [cancel(operationId)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/cancel(operationId).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#canceloperationId') for details.