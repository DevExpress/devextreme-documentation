---
default: 2
acceptValues: 2 | 3 | 4
type: number
---
---
##### shortDescription
Specifies the version of the OData protocol used to interact with the data service.

---
[note]If the version option holds 2, ODataContext uses the "MERGE" method to send requests. Otherwise, it uses the "PATCH" method. To override this behavior, use the [beforeSend](/api-reference/30%20Data%20Layer/ODataContext/1%20Configuration/beforeSend.md '/Documentation/ApiReference/Data_Layer/ODataContext/Configuration/#beforeSend') option.