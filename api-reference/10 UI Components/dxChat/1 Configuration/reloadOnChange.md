---
id: dxChat.Options.reloadOnChange
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to perform [data reloading](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload) after a message is entered into the Chat. This property is in effect only if a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object is used.

---
If this property is enabled (default), DataSource reloads after a message is added into the store. Disable **reloadOnChange** and handle CRUD operations independently for more control over Chat behavior.