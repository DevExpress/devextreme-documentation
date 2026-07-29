Unsaved changes are lost when a user cancels the appointment edit form. To prevent data loss, you can save the current form state to `localStorage` when the form closes without saving, and restore the draft the next time the user opens the same appointment.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_2/UIWidgets/Guides/SchedulerPreserveChanges/index.html, /Content/Applications/25_2/UIWidgets/Guides/SchedulerPreserveChanges/index.js, /Content/Applications/25_2/UIWidgets/Guides/SchedulerPreserveChanges/index.css" style="border: none !important;"></div>

You can find the complete code example in the following GitHub repository:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-scheduler-unsaved-draft"
}

Handle the `onAppointmentFormOpening` event, check if there is a draft for the current appointment in `localStorage`, and if so, restore it.