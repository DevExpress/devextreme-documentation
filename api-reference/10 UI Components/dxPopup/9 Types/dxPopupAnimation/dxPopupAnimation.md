---
uid: ui/popup:dxPopupAnimation
isType: 
---
---
##### shortDescription
<!-- Description goes here -->

---
<!--
The following code shows default values of the object depending on the device type:

    &lt;!-- tab: Desktop --&gt;{
        show: {
            type: 'pop',
            duration: 300,
            from: {
                scale: 0.55
            }
        },
        hide: {
            type: 'pop',
            duration: 300,
            to: {
                opacity: 0,
                scale: 0.55
            },
            from: {
                opacity: 1,
                scale: 1
            }
        }
    }

    &lt;!-- tab: iOS --&gt;{
        show: {
            type: 'slide',
            duration: 400,
            from: {
                position: {
                    my: 'top',
                    at: 'bottom'
                }
            },
            to: {
                position: {
                    my: 'center',
                    at: 'center'
                }   
            }
        },
        hide: {
            type: 'slide',
            duration: 400,
            from: {
                opacity: 1,
                position: {
                    my: 'center',
                    at: 'center'
                }
            },
            to: {
                opacity: 1,
                position: {
                    my: 'top',
                    at: 'bottom'
                }
            }
        }
    }

    &lt;!-- tab: Android --&gt;{
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

    &lt;!-- tab: Android FullScreen --&gt;{
        show: {
            type: 'slide',
            duration: 300,
            from: {
                top: '30%',
                opacity: 0
            },
            to: {
                top: 0,
                opacity: 1
            }
        },
        hide: {
            type: 'slide',
            duration: 300,
            from: {
                top: 0,
                opacity: 1
            },
            to: {
                top: '30%',
                opacity: 0
            }
        }
    }

Use the [position](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/position.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#position') property to specify the position in which the UI component is shown and from which it is hidden.

Set the **animation** object to `null` or `undefined` to disable animations.
-->