---
module: ui/notify
export: default
---
---
##### shortDescription
Creates a toast message.

##### param(options): Object
The **Toast** [configuration](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/').

##### param(type): String|undefined
The message's type: "info", "warning", "error" or "success".

##### param(displayTime): Number|undefined
The time interval in milliseconds for which the message is displayed.

---
#####See Also#####
- [notify(message, type, displayTime)](/api-reference/50%20Common/utils/ui/notify(message_type_displayTime).md '/Documentation/ApiReference/Common/utils/ui/#notifymessage_type_displayTime')