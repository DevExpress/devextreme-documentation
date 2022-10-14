---
id: dxCalendar.Options.weekNumberRule
acceptValues: 'auto' | 'firstDay' | 'fullWeek' | 'firstFourDays'
type: String
default: 'auto'
---
---
##### shortDescription
Specifies a [week number](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#showWeekNumbers) calculation rule. 

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview/"
}

This property can take on one of the following values:

- `firstDay`    
The first week of the year is the week that contains January 1. 

- `firstFourDays`    
The first week of the year is the week that starts on one of the first four week days: Monday, Tuesday, Wednesday, or Thursday. This rule is specified by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. If the first week of the year begins on a Friday, Saturday, or Sunday, this week is counted as the last week of the previous year.
 
- `fullWeek`
The first week of the year is the week that begins with a day that matches the [firstDayOfWeek](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#firstDayOfWeek) option value.
 
- `auto` (default)    
The week calculation rule depends on the locale. If a week starts on Monday, the `firstFourDays` rule is applied. Otherwise, the `firstDay` rule is in effect.