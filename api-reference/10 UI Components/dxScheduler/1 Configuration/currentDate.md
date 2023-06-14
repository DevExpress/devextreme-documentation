---
id: dxScheduler.Options.currentDate
type: Date | Number | String
default: new Date()
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the current date.

---

Users can change the current date in the [Date Navigator](/concepts/05%20UI%20Components/Scheduler/055%20Date%20Navigator.md '/Documentation/Guide/UI_Components/Scheduler/Date_Navigator/'):

![Scheduler Date Navigator](/images/UiWidgets/Scheduler_Date_Navigator.png)

To subscribe to changes of the current date, use the [onOptionChanged](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onOptionChanged.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onOptionChanged') handler.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport/"
}
