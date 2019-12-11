---
default: {}
type: number | string | object
---
---
##### shortDescription
Specifies the initial animation state.

---
The option can take on the following values, depending on the animation type.

- **fade**  
 The **from** option takes on a numeric value from 0 to 1, which specifies the initial element opacity.

        <!--JavaScript-->
        from: 0.1

- **pop**  
 The option can take on an object containing the **scale** and **opacity** properties, which specify the initial element scale and opacity, respectively. Each property can take on a numeric value of 0 to 1.
    
        <!--JavaScript-->
        from: {
            scale: 0.2,
            opacity: 0
        }

- **slide**  
 The option takes on an object containing the **opacity** property and properties specifying the element position (**top**, **left**, **bottom**, and **right**).

        <!--JavaScript-->
        from: {
            opacity: 0.5,
            top: -100
        }

- **css**  
 The option takes on a string specifying the CSS class or several CSS classes delimited by comma that you want to apply at the animation start.

        <!--JavaScript-->from: 'fade-out'

	<!--...-->

		<!--CSS-->.fade-out { opacity: 1; }

You can specify the initial or target element position relative to the current element position. For this purpose use the **+=** or **-=** operators.

    <!--JavaScript-->
    from: {
        top: "-=300",
    }
    to: {
        top: "+=200",
    }