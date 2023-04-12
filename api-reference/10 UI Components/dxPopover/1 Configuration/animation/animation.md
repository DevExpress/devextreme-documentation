---
id: dxPopover.Options.animation
type: ui/popover:dxPopoverAnimation
inheritsType: ui/popover:dxPopoverAnimation
---
---
##### shortDescription
Configures UI component visibility animations. This object contains two fields: [show](/api-reference/10%20UI%20Components/dxPopover/9%20Types/dxPopoverAnimation/show.md '{basewidgetpath}/Configuration/animation/#show'') and [hide](/api-reference/10%20UI%20Components/dxPopover/9%20Types/dxPopoverAnimation/hide.md '{basewidgetpath}/Configuration/animation/#hide').

---
The following code specifies the default value of the object:

    {
        show: {
            type: 'fade',
            from: 0,
            to: 1
        },
        hide: {
            type: 'fade',
            from: 1,
            to: 0
        }
    }

Set this object to `null` or `undefined` to disable animations.