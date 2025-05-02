---
id: Editing.allowUpdating
type: Boolean | function(options)
default: false
---
---
##### shortDescription
Specifies whether a user can update messages. It is called for each message when defined as a function.

##### param(options): Object
Information about the current message.

##### field(options.component): dxChat
Chat's instance.

##### field(options.message): Message
Message data.

##### return: Boolean
`true` if the message can be updated; otherwise `false`.

---
If you set this property to `true`, a user can edit only their messages.