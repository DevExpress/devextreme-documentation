To change the size of the **Popover**, specify the [height](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#height') and [width](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#width') options.

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <p>Popover content</p>
    </div>

<!---->

    <!--JavaScript-->$(function() {
		$("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            height: 300,
            width: 500
        });
    });

If you need to position the **Popover** against a certain side of the [target element](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#target'), set the [position](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/position.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#position') option.

    <!--JavaScript-->
    $(function() {
		$("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            position: "top" // or "bottom" | "left" | "right"
        });
    });


#####See Also#####
- [Popover - Show and Hide the Popover](/concepts/05%20Widgets/Popover/10%20Show%20and%20Hide%20the%20Popover '/Documentation/Guide/Widgets/Popover/Show_and_Hide_the_Popover/')
- [Popover - Customize the Content](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content.md '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/')
- [Popover Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popover-overview)
- [Popover API Reference](/api-reference/10%20UI%20Widgets/dxPopover '/Documentation/ApiReference/UI_Widgets/dxPopover/')

[tags]popover, overlay, size, height, width, position