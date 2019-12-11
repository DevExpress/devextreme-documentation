---
default: function() {return $(window).width() * 0.8 }, function() { return Math.min($(window).width(), $(window).height()) * 0.4; } (iPad)
type: Number | String | function()
---
---
##### shortDescription
The width of the widget popup element.

##### return: Number|String
The required width of the widget popup element.

---
Note that the option affects the actual popup size only if the **fullScreen** option is set to false. Otherwise, the popup is shown in a full screen mode.