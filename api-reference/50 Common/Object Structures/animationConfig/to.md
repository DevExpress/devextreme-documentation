---
id: AnimationConfig.to
type: AnimationState
default: {}
inheritsType: AnimationState
---
---
##### shortDescription
Specifies a final animation state.

---
The values that this property accepts depend on the specified [animation type](/api-reference/50%20Common/Object%20Structures/animationConfig/type.md '/Documentation/ApiReference/Common/Object_Structures/AnimationConfig/#type'). The following list illustrates the dependency:

- **fade**  
 **to** accepts a number from 0 to 1 and specifies the UI component's opacity. 0 makes the UI component completely transparent; 1 makes it opaque.

        <!--JavaScript-->
        to: 1

- **pop**  
 **to** accepts an object with the **opacity** and **scale** fields; each takes a value from 0 to 1.     
Opacity is specified the same way as in the **fade** animation type. A scale of 0 hides the UI component; a scale of 1 displays the UI component in its default size. 
    
        <!--JavaScript-->
        to: {
            scale: 1,
            opacity: 1
        }

- **slide**  
 **to** accepts an object with the **opacity** field and fields that configure the UI component's position.         
Opacity is specified the same way as in the **fade** animation type. The UI component's position can be set using the **position** field that accepts the [position configuration object](/api-reference/50%20Common/Object%20Structures/positionConfig '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/'). This approach covers all cases. You can also use the **top** and **left** fields, which are shortcuts for positioning the UI component relative to its parent element or shifting the UI component from its default position.

        <!--JavaScript-->
        to: { 
            opacity: 1, 
            top: 10 // places the UI component 10px below the parent element
            /* top: "+=10" // shifts the UI component 10px below its default position */
        }
        ==== or ====
        to: {
            opacity: 1,
            position: { my: 'top', at: 'bottom', of: "#targetElement" } // places the top of the UI component at the bottom of the "targetElement"
        }

- **css**  
 **to** accepts a string specifying a CSS class or several CSS classes separated by a comma.

        <!--JavaScript-->
        to: "fade-out-active-text, fade-out-active-visibility"

        <!--CSS-->
        .fade-out-active-visibility { opacity: 1; }
        .fade-out-active-text { font-size: 15pt; }
