---
id: dxCalendar.Options.disabledDates
type: Array<Date> | function(data)
default: null
---
---
##### shortDescription
Specifies dates that users cannot select.

##### param(data): Object
Information about the checked date.

##### field(data.component): Object
The UI component's [instance](/api-reference/10%20UI%20Components/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Components/dxCalendar/Methods/#instance').

##### field(data.date): Date
The currently checked date.

##### field(data.view): String
The current view.

##### return: Boolean
**true** if the date should be disabled; otherwise **false**.

---
<!-- %fullDescription% -->

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview/"
}

#####See Also#####
- [Specify the Value Range](/concepts/05%20UI%20Components/Calendar/12%20Specify%20the%20Value%20Range.md '/Documentation/Guide/UI_Components/Calendar/Specify_the_Value_Range/')

<!-- import * from 'api-reference\10 UI Components\dxDateBox\1 Configuration\disabledDates.md' -->