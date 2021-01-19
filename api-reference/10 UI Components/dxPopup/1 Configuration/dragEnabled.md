---
id: dxPopup.Options.dragEnabled
type: Boolean
default: false, true (desktop)
---
---
##### shortDescription
Specifies whether or not to allow a user to drag the popup window.

---
A user can drag the popup window by the title. Therefore, this option makes sense if the [showTitle](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/showTitle.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showTitle') option is set to true.

[note]Dragging is possible only if the "height: 100%" style setting is applied to the **html** element and "min-height: 100%" - to the **body** element.

    <!--HTML-->
    <html style="height: 100%;">
        <head>
        . . .
        </head>
        <body style="min-height: 100%;">
        . . .
        </body>
    </html>