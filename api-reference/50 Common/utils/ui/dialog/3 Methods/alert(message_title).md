---
module: ui/dialog
export: alert
---
---
##### shortDescription
Creates an alert dialog message containing a single "OK" button.

##### param(message): String
The dialog's message.

##### param(title): String
The dialog's title.

##### return: Promise<void>
A Promise that is resolved with the dialog result data when the dialog is closed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
The "alert" dialog is a notification dialog consisting of an alert message and a single button that closes the dialog.

Pay attention to the recommendations given for using modality in the [Modal Contexts](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/Modal.html#//apple_ref/doc/uid/TP40006556-CH64-SW1) article. In certain scenarios it may be better to display a [modal view](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView/1%20Configuration/modal.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#modal') instead.