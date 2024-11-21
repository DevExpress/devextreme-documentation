---
id: dxChat.Options.reloadOnChange
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to perform [data reloading](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload) after a message is entered into the Chat. This property is in effect only if you use a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object as a Chat data source.

---
If this property is enabled (default), DataSource reloads with each new message. Disable **reloadOnChange** and handle CRUD operations independently for more control over Chat behavior.