<article data-show="Content/Applications/16_1/UIWidgets/OverlaysAnimation/markup.html,
        Content/Applications/16_1/UIWidgets/OverlaysAnimation/script.js,
        Content/Applications/16_1/UIWidgets/OverlaysAnimation/styles.css">

An overlay widget enables you to adjust animation effects used when the widget is being shown or hidden. The animation options are accessed using the **animation** configuration option. The animation configuration object includes separate properties that hold animation options used when the widget is being shown and hidden. These properties are called **show** and **hide** respectively. Objects passed to these properties have the same structure, which enables you to specify the following main options.

 - Animation type  
 The animation type is specified using the [type](/api-reference/50%20Common/Object%20Structures/animationConfig/type.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#type') option. The available types are "fade", "pop" and "slide".

 - Initial and target state  
 The widget state at the beginning of animation is specified using the [from](/api-reference/50%20Common/Object%20Structures/animationConfig/from.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#from') option. The [to](/api-reference/50%20Common/Object%20Structures/animationConfig/to.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#to') option specifies the target widget state.

<!---->

    <!--JavaScript-->
    var overlayOptions = {
        animation: {
            show: {
                type: 'pop',
                duration: 1000,
                from: {
                    opacity: 0,
                    scale: 0
                }
                to: {
                    opacity: 1,
                    scale: 1
                }
            }
            hide: {
                type: 'pop',
                duration: 1000,
                from: {
                    opacity: 1,
                    scale: 1
                }
                to: {
                    opacity: 0,
                    scale: 0
                }
            }
        }
    }

For a full list of animation options and their detailed descriptions, refer to the [animation object structure description](/api-reference/50%20Common/Object%20Structures/animationConfig '/Documentation/ApiReference/Common/Object_Structures/animationConfig/').
</article>