---
id: dxScheduler.Options.onSelectionEnd
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed when a user finishes selecting a date-time range.

##### param(e): ui/scheduler:SelectionEndEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.selectedCellData): Array<any>
An object array that identifies selected cells. Each array element contains the following properties: `startDate`, `endDate`, `allDay`, and `groups`.

---
This event fires after the user finishes a drag-and-drop selection operation. Handle the event to respond to a completed cell range selection (for example, to open the appointment popup pre-filled with the selected time range).

The handler receives a [selectedCellData](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/selectedCellData.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#selectedCellData')  array. Each item identifies a selected cell with the following properties: `startDate`, `endDate`, `allDay`, and `groups`. To create an appointment for the selected range, create an `appointmentData` object with the first cell’s `startDate` and the last cell’s `endDate`, then pass this object to [showAppointmentPopup](/api-reference/10%20UI%20Components/dxScheduler/3%20Methods/showAppointmentPopup(appointmentData_createNewAppointment_currentAppointmentData).md '/Documentation/ApiReference/UI_Components/dxScheduler/Methods/#showAppointmentPopupappointmentData_createNewAppointment_currentAppointmentData').

[note]

- The event does not fire when users click on a cell that is already selected.
- The event fires independently for each Scheduler instance on the page.
- Keyboard-based range selection (Shift+Arrow) does not trigger this event.

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CreateFromSelection/"
}
