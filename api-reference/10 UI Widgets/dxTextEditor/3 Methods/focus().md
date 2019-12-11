---
##### shortDescription
Sets focus to the input element representing the widget.

---
[note]In the mobile Safari browser, it is impossible to set focus programmatically. You can find more information about this [here](https://stackoverflow.com/questions/6287478/mobile-safari-autofocus-text-field/7332160#7332160). You can, however, accomplish this task using PhoneGap when building a native package. Set the **KeyboardDisplayRequiresUserAction** preference to *false* in the *config.xml* file with Cordova settings.

 <preference name="KeyboardDisplayRequiresUserAction" value="false" />

After that, the **focus()** method will work as follows.