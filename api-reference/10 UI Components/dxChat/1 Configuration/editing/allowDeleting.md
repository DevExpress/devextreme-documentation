---
id: dxChat.Options.editing.allowDeleting
type: Boolean | function(options)
default: false
---
---
##### shortDescription
Specifies whether a user can delete messages. Called for each message when defined as a function.

##### param(options): Object
Information about the current message.

##### field(options.component): dxChat
Chat's instance.

##### field(options.message): Message
Message data.

##### return: Boolean
`true` if the message can be deleted; otherwise `false`.

---
If `false`, no messages can be deleted. If `true`, only the current user can delete their messages.