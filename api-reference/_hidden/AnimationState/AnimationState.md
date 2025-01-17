---
id: AnimationState
type: Object
module: common/core/animation
export: AnimationState
---
---
##### shortDescription
Describes an animation state.

---
The values that this property accepts depend on the specified [animation type](/api-reference/50%20Common/Object%20Structures/animationConfig/type.md '/Documentation/ApiReference/Common/Object_Structures/AnimationConfig/#type'). The following list illustrates the dependency:

- *"fade"*        
Supported properties: [opacity]({currentpath}/#opacity)     

        <!-- tab: JavaScript -->
        {
            type: "fade",
            from: 0,
            to: 1,
            // ===== or =====
            from: { opacity: 0 },
            to: { opacity: 1 }
        }

- *"pop"*     
Supported properties: [opacity]({currentpath}/#opacity), [scale]({currentpath}/#scale)

        <!-- tab: JavaScript -->
        {
            type: "pop",
            from: { opacity: 0, scale: 0 },
            to: { opacity: 1, scale: 1 }
        }


- *"slide"*       
Supported properties: [opacity]({currentpath}/#opacity), [position]({currentpath}/#position), [top]({currentpath}/#top), [left]({currentpath}/#left)

        <!-- tab: JavaScript -->
        {
            type: "slide",
            from: { opacity: 0, top: 100 },
            to: {
                opacity: 1,
                position: {
                    my: "top",
                    at: "bottom",
                    of: "#targetElement"
                }
            }
        }

- *"сss"*     
Supported properties: none (use custom CSS classes)     
To apply more than one classes, separate them by comma.

        <!-- tab: JavaScript -->
        {
            type: "css",
            from: "transparent",
            to: "opaque, font-large"
        }

        <!-- tab: CSS -->
        .transparent {
            opacity: 0;
        }
        .opaque {
            opacity: 1;
        }
        .font-large {
            font-size: 24pt
        }