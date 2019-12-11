---
default: function() {return $(window).width() * 0.8 }
type: number | string | function
---
---
##### custom_default_for_iPad
function() { return Math.min($(window).width(), $(window).height()) * 0.4; }

##### shortDescription
The width of the widget popup element.

##### return: number|string
The required width of the widget popup element.

---
Note that the option affects the actual popup size only if the **fullScreen** option is set to false. Otherwise, the popup is shown in a full screen mode.