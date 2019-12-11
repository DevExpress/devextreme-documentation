---
##### shortDescription
Creates a new [Guid](/api-reference/30%20Data%20Layer/Guid '/Documentation/ApiReference/Data_Layer/Guid/') instance that holds the specified GUID.

##### param(value): string
A string representation of the GUID.

---
The separators in the **value** argument are optional.

    <!--JavaScript-->var guid = new DevExpress.data.Guid("40810dcc-e08b-10a2-8227-c67c8933c31a");

or 

    <!--JavaScript-->var guid = new DevExpress.data.Guid("40810dcce08b10a28227c67c8933c31a");