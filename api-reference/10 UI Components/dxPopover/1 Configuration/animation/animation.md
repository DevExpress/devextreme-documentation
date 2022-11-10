---
id: dxPopover.Options.animation
type: Object
---
---
##### shortDescription
Configures UI component visibility animations. This object contains two fields: [show]({basewidgetpath}/Configuration/animation/#show') and [hide]({basewidgetpath}/Configuration/animation/#hide).

---
The following code specifies a default value of the object:

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

Set this object to `null` or `undefined` to disable animation.