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

---
This event fires after the user releases the pointer button following a drag across one or more scheduler cells. Use it to respond to a completed cell range selection (for example, to open the appointment popup pre-filled with the selected time range).

The handler receives a `selectedCellData` array whose items contain `startDate`, `endDate`, `allDay`, and `groups` properties describing each cell in the selection. To create an appointment that spans the selected range, pass the first cell's `startDate` and the last cell's `endDate` to [showAppointmentPopup](/Documentation/ApiReference/UI_Components/dxScheduler/Methods/#showAppointmentPopupappointmentData_createNewAppointment_currentAppointmentData).

[note]

- The event does not fire when the user clicks on a cell that is already selected.
- The event fires independently for each Scheduler instance on the page.
- Keyboard-based range selection (Shift+Arrow) does not trigger this event.

[/note]