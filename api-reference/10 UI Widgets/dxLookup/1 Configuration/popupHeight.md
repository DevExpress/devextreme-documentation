---
default: function() { return $(window).height() * 0.8 }, 'auto' (android_below_version_4, desktop, iPad)
type: Number | String | function()
---
---
##### shortDescription
The height of the widget popup element.

##### return: Number|String
The required height of the widget popup element.

---
Note that the option affects the actual popup size only if the **fullScreen** option is set to false. Otherwise, the popup is shown in a full screen mode.