---
id: dxPopup.Options.dragEnabled
type: Boolean
default: false, true (desktop)
---
---
##### shortDescription
Specifies whether or not to allow a user to drag the popup window.

---
A user can drag the popup window by the title. Therefore, this property makes sense if the [showTitle](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/showTitle.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#showTitle') property is set to true. 

You can set the [restorePosition](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/restorePosition.md '{basewidgetpath}/Configuration/#restorePosition') property to **false** if you want to display the {WidgetName} at the same position to which users dragged it.

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