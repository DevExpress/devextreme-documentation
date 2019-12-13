---
id: dxOverlay.Options.animation
type: Object
default: { show: { type: 'pop', duration: 300, from: { scale: 0.55 } }, hide: { type: 'pop', duration: 300, to: { opacity: 0, scale: 0.55 }, from: { opacity: 1, scale: 1 } } }, { show: { type: 'fade', duration: 400 }, hide: { type: 'fade', duration: 400, to: { opacity: 0 }, from: { opacity: 1 } }} (Android_below_version_4.2)
---
---
##### shortDescription
Configures widget visibility animations. This object contains two fields: [show](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/animation/show.md '{basewidgetpath}/Configuration/animation/#show') and [hide](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/animation/hide.md '{basewidgetpath}/Configuration/animation/#hide').

---
Set this object to **null** or **undefined** to disable animation.