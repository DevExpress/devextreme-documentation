---
id: dxChat.Options.editing.allowDeleting
type: Boolean | function(options)
default: false
---
---
##### shortDescription
Specifies whether a user can delete messages. It is called for each message when defined as a function.

##### param(options): Object
Information about the current message.

##### field(options.component): dxChat
Chat's instance.

##### field(options.message): Message
Message data.

##### return: Boolean
`true` if the message can be deleted; otherwise `false`.

---
If set to `false`, no messages can be deleted. If set to `true`, only current user can delete their messages.