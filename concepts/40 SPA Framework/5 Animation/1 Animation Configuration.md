In DevExtreme, animations are defined by their configuration objects.

	<!--JavaScript-->{
		type: 'css',
		from: 'fade-out',
		to: 'fade-out-active',
		duration: 1000
	}

	<!--CSS-->.fade-out { opacity: 1; }
	.fade-out-active { opacity: 0; }

As you can see, you can define animation using css styles. However, there are several other useful animation [types](/api-reference/50%20Common/Object%20Structures/animationConfig/type.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#type'). In the following example, a slide animation is defined.

	<!--JavaScript-->{
		type: "slide",
		from: { 
			opacity: 0.5,
			top: -100
		},
		to: { 
			opacity: 1,
			top: 0	
		},
		duration: 2000
	}

All the configuration options that can be used to define an animation are listed in the [animationConfig](/api-reference/50%20Common/Object%20Structures/animationConfig '/Documentation/ApiReference/Common/Object_Structures/animationConfig/') object defined in the Reference section.