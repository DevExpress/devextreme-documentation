---
uid: ui/toast:dxToastAnimation
isType: 
module: ui/toast
export: dxToastAnimation
generateTypeLink: 
---
---
##### shortDescription
<!-- Description goes here -->

---
<!--
The following code shows default values of the object depending on the device type:

    &lt;!-- tab: Desktop, iOS --&gt;{
        show: {
            type: 'fade',
            duration: 400,
            from: 0,
            to: 1
        },
        hide: {
            type: 'fade',
            duration: 400,
            from: 1,
            to: 0
        }
    }

    &lt;!-- tab: Android --&gt;{
        show: {
            type: 'slide',
            duration: 200,
            from: {
                position: {
                    my: 'top',
                    at: 'bottom',
                    of: window
                }
            }
        },
        hide: {
            type: 'slide',
            duration: 200,
            to: {
                position: {
                    my: 'top',
                    at: 'bottom',
                    of: window
                }
            }
        }
    }

Set the **animation** object to `null` or `undefined` to disable animations.
-->