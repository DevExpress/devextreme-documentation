---
module: ui/dialog
export: alert
---
---
##### shortDescription
Creates an alert dialog message containing a single "OK" button.

##### param(message): string
A string value representing the dialog message.

##### param(title): string
A string value representing the dialog title.

##### return: Promise
A JQuery Deferred object whose resolve field contains the dialog result data.

---
The "alert" dialog is a notification dialog consisting of an alert message and a single button that closes the dialog.

Pay attention to the recommendations given for using modality in the [Modal Contexts](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/Modal.html#//apple_ref/doc/uid/TP40006556-CH64-SW1) article. In certain scenarios it may be better to display a [modal view](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView/1%20Configuration/modal.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#modal') instead.