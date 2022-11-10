---
id: dxToast.Options.animation
type: Object
---
The following code shows default values of the object depending on a device type:

    <!-- tab: Desktop, iOS -->{
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

    <!-- tab: Android -->{
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

Set the **animation** object to `null` or `undefined` to disable animation.