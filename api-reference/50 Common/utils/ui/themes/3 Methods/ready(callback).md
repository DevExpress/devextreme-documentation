---
##### shortDescription
Specifies a function to be executed after the theme is loaded.

##### param(callback): function()
The function.

---
[note]The specified callback is executed only once. Call **ready** before each [current(themeName)](/api-reference/50%20Common/utils/ui/themes/3%20Methods/current(themeName).md '/Documentation/ApiReference/Common/utils/ui/themes/Methods/#currentthemeName') call to execute the callback each time the theme changes.