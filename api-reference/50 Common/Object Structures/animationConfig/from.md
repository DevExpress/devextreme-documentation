---
id: animationConfig.from
type: Number | String | any
default: {}
---
---
##### shortDescription
Specifies the initial animation state.

---
The values that this property accepts depend on the specified [animation type](/api-reference/50%20Common/Object%20Structures/animationConfig/type.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#type'). The following list illustrates the dependency:

- **fade**  
 **from** accepts a number from 0 to 1 and specifies the UI component's opacity. 0 makes the UI component completely transparent; 1 makes it opaque.

        <!--JavaScript-->
        from: 0.1

- **pop**  
 **from** accepts an object with the **opacity** and **scale** fields; each takes a value from 0 to 1.     
Opacity is specified the same way as in the **fade** animation type. A scale of 0 hides the UI component; a scale of 1 displays the UI component in its default size. 
    
        <!--JavaScript-->
        from: {
            scale: 0.2,
            opacity: 0
        }

- **slide**  
 **from** accepts an object with the **opacity** field and fields that configure the UI component's position.         
Opacity is specified the same way as in the **fade** animation type. The UI component's position can be set using the **position** field that accepts the [position configuration object](/api-reference/50%20Common/Object%20Structures/positionConfig '/Documentation/ApiReference/Common/Object_Structures/positionConfig/'). This approach covers all cases. You can also use the **top** and **left** fields, which are shortcuts for positioning the UI component relative to its parent element or shifting the UI component from its default position.

        <!--JavaScript-->
        from: { 
            opacity: 0.5, 
            top: 100 // places the UI component 100px below the parent element
            /* top: "+=100" // shifts the UI component 100px below its default position */
        }
        ==== or ====
        from: {
            opacity: 0.5,
            position: { my: 'top', at: 'top', of: "#targetElement" } // places the top of the UI component at the top of the "targetElement"
        }

- **css**  
 **from** accepts a string specifying a CSS class or several CSS classes separated by a comma.

        <!--JavaScript-->
        from: "fade-out-text, fade-out-visibility"

        <!--CSS-->
        .fade-out-visibility { opacity: 0; }
        .fade-out-text { font-size: 5pt; }
