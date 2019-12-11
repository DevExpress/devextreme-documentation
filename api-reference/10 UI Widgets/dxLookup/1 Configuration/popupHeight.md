---
default: function() { return $(window).height() * 0.8 }
type: Number | String | function()
---
---
##### custom_default_for_android_below_version_4
'auto'

##### custom_default_for_desktop
'auto'

##### custom_default_for_iPad
'auto'

##### shortDescription
The height of the widget popup element.

##### return: Number|String
The required height of the widget popup element.

---
Note that the option affects the actual popup size only if the **fullScreen** option is set to false. Otherwise, the popup is shown in a full screen mode.