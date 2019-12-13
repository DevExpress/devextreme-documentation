---
id: dxLookup.Options.popupWidth
type: Number | String | function()
default: function() {return $(window).width() * 0.8 }, function() { return Math.min($(window).width(), $(window).height()) * 0.4; } (iPad)
---
---
##### shortDescription
Specifies the popup element's width. Applies only if [fullScreen](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/fullScreen.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#fullScreen') is **false**.

##### return: Number | String
The popup element's width.

---
In the Material theme, the default value equals the **Lookup** width plus paddings and borders.

#include uiwidgets-ref-width