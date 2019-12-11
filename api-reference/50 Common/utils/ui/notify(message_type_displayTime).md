---
module: ui/notify
export: default
---
---
##### shortDescription
Creates a toast message.

##### param(message): String
A string value specifying the message text.

##### param(type): String
A string value specifying the message type.

##### param(displayTime): Number
A numeric value specifying the time span during which the message is shown.

---
The type parameter can take on one of the following values: 'info'|'warning'|'error'|'success'.