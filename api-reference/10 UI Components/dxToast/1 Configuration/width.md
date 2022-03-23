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

The {WidgetName} calculates its width relative to one of the elements in the following priority: [position](/api-reference/10%20UI%20Components/dxToast/1%20Configuration/position.md '{basewidgetpath}/Configuration/#position').[of](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/#of') => **window**.