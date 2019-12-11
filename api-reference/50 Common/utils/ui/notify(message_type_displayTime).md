---
module: ui/notify
---
---
##### shortDescription
Creates a toast message.

##### param(message): string
A string value specifying the message text.

##### param(type): string
A string value specifying the message type.

##### param(displayTime): integer
A numeric value specifying the time span during which the message is shown.

---
The type parameter can take on one of the following values: 'info'|'warning'|'error'|'success'.