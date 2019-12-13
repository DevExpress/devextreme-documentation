---
id: ODataStore.Options.version
acceptValues: 2 | 3 | 4
type: Number
default: 2
---
---
##### shortDescription
Specifies the OData version.

---
If the version is 2, the **ODataContext** uses the "MERGE" method to send requests; otherwise, it uses "PATCH". Set the **method** field of the [beforeSend](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/beforeSend.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#beforeSend') function's parameter to override this behavior.