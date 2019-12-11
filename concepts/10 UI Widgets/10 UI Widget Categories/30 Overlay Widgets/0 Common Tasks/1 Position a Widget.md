<article data-show="Content/Applications/16_1/UIWidgets/OverlaysPositioning/markup.html,
        Content/Applications/16_1/UIWidgets/OverlaysPositioning/script.js,
        Content/Applications/16_1/UIWidgets/OverlaysPositioning/styles.css">

You can position an overlay widget against the required element if your needs dictate so. The positioning options are accessed using the **position** configuration option.

The **position** object may contain the following fields: [my](/api-reference/50%20Common/Object%20Structures/positionConfig/my '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#my'), [at](/api-reference/50%20Common/Object%20Structures/positionConfig/at '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#at'), [of](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of'), [offset](/api-reference/50%20Common/Object%20Structures/positionConfig/offset '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#offset') and [collision](/api-reference/50%20Common/Object%20Structures/positionConfig/collision '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#collision'). Look at the following sentence to see how to use these fields to position the required widget against the target element.

"Place **my** 'left top' corner **at** the 'left' side **of** the '#targetElement'." The italic quoted phrase located after each option name within the sentence represents a value of the appropriate option.

    <!--JavaScript-->
    var overlayOptions = {
        position: {
            my: 'left top',
            at: 'left',
            of: '#targetElement'
        }
    }

For the detailed description of positioning options, refer to the [position object structure description](/api-reference/50%20Common/Object%20Structures/positionConfig '/Documentation/ApiReference/Common/Object_Structures/positionConfig/').
</article>