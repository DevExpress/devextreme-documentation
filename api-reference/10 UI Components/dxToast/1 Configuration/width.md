---
id: dxToast.Options.width
type: Number | String | function()
default: function() {return $(window).width() * 0.8 }, 'auto' (Android), function() { return $(window).width(); } (phones_on_Android)
---
---
##### return: Number | String
<!-- %return% -->

---

<!-- %fullDescription% -->

<!-- import * from 'api-reference\10 UI Components\DOMComponent\1 Configuration\width.md' -->

The {WidgetName} calculates its width relative to one of the elements in the following priority: [position]({basewidgetpath}/Configuration/#position).[of](/Documentation/ApiReference/Common/Object_Structures/PositionConfig/#of) => **window**.