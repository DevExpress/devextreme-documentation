---
id: RemoteOperations
module: ui/card_view
export: RemoteOperations
type: Object
generateTypeLink: 
---
---
##### shortDescription
Notifies CardView of the server's data processing operations.

---
Server-side data processing improves the UI component's performance on large datasets. When the server does not implement particular operations (and/or the corresponding **remoteOperations** fields are `false`) they are executed on the client. Note that the UI component may send queries to the server while executing a client-side operation.

[note] Paging, filtering, and sorting are performed on the server for the [ODataStore](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/40%20OData.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/'), but you can change them to the client side by setting the corresponding **remoteOperations** fields to `false`. Other operations are always client-side.