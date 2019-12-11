---
default: 'custom'
acceptValues: 'fade' | 'fadeIn' | 'fadeOut' | 'pop' | 'slide' | 'slideIn' | 'slideOut' | 'css'
type: string
---
---
##### shortDescription
A string value specifying the animation type.

---
The value of the option affects the widget's initial and target states, which are specified using the [from](/api-reference/50%20Common/Object%20Structures/animationConfig/from.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#from') and [to](/api-reference/50%20Common/Object%20Structures/animationConfig/to.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#to') options. 

The type options can take on the following values.

- "fade"  
 Animates element opacity.

- "fadeIn"  
 Animates element opacity from 0 to 1.

- "fadeOut"  
 Animates element opacity from 1 to 0.

- "pop"  
 Animates element scale.

- "slide"  
 Animates element position.

- "slideIn"  
 Moves the element from outside the screen to the target position.

- "slideOut"  
 Moves the element from the initial position to outside the screen.

- "css"  
	Applies the CSS style(s) specified by the [from](/api-reference/50%20Common/Object%20Structures/animationConfig/from.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#from') option and then applies the style(s) specified by the [to](/api-reference/50%20Common/Object%20Structures/animationConfig/from.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#from') option. The class that is applied at the animation end is appended to the class applied at the animation start. This allows not to duplicate the CSS properties that are common for the animation start and end.

	Here is an example of css animation:

		<!--JavaScript-->DX.fx.animate(element, { type: 'css', from: 'fade-out', to: 'fade-out-active', duration: 1000 });

	<!--...-->

		<!--CSS-->.fade-out { opacity: 1; }
		.fade-out-active { opacity: 0; }

If the **type** option is set to "slideIn" or "slideOut", specify the sliding direction using the **direction** option.