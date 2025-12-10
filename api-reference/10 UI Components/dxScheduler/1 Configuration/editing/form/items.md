---
id: dxScheduler.Options.editing.form.items
type: Array<dxFormSimpleItem, dxFormGroupItem, dxFormTabbedItem, dxFormEmptyItem, dxFormButtonItem>
default: []
---
---
##### shortDescription
Configures items within the appointment edit form.

---
The following predefined items are available in the appointment edit form:

    editing.form.items
    ├─ mainGroup
    |  ├─ subjectGroup
    |  │  ├─ subjectIcon
    |  │  └─ subjectEditor
    |  ├─ dateGroup
    |  │  ├─ dateIcon
    |  |  └─ dateOptionsGroup
    |  │     ├─ allDayEditor
    |  │     ├─ startDateGroup
    |  │     │  ├─ startDateTimeGroup
    |  │     │  │  ├─ startDateEditor
    |  │     │  │  └─ startTimeEditor
    |  │     │  └─ startDateTimezoneEditor
    |  │     └─ endDateGroup
    |  │        ├─ endDateTimeGroup
    |  │        │  ├─ endDateEditor
    |  │        │  └─ endTimeEditor
    |  │        └─ endDateTimezoneEditor
    |  ├─ repeatGroup
    |  │  ├─ repeatIcon
    |  │  └─ repeatEditor
    |  ├─ resourcesGroup
    |  │  └─ ...
    |  └─ descriptionGroup
    |     ├─ descriptionIcon
    |     └─ descriptionEditor
    └─ recurrenceGroup
       ├─ recurrenceStartDateGroup
       │  ├─ recurrenceStartDateIcon
       │  └─ recurrenceStartDateEditor
       ├─ recurrenceRuleGroup
       │  ├─ recurrenceRuleIcon
       │  └─ recurrencePatternGroup
       │     ├─ recurrenceRuleRepeatGroup
       │     |  ├─ recurrenceCountEditor
       │     |  └─ recurrencePeriodEditor
       │     └─ recurrenceDayOfYearGroup — recurrenceDaysOfWeekEditor — recurrenceDayOfMonthEditor
       │        ├─ recurrenceDayOfYearMonthEditor
       │        └─ recurrenceDayOfYearDayEditor
       └─ recurrenceEndGroup
          ├─ recurrenceEndIcon
          └─ recurrenceEndEditor
             ├─ recurrenceRepeatEndEditor
             └─ recurrenceEndEditorsGroup
                ├─ recurrenceEndSpacer
                ├─ recurrenceEndUntilEditor
                └─ recurrenceEndCountEditor

Items within `resourcesGroup` depend on resource [fieldExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#fieldExpr) and [icon](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#icon) properties. Scheduler uses resource field expressions (for instance, "roomId") in item names as follows:

    ...
    └─ resourcesGroup
       └─ roomIdGroup
          ├─ roomIdIcon
          └─ roomIdEditor

If no resource has an icon assigned, `resourcesGroup` contains the following items:

    ...
    └─ resourcesGroup
       ├─ resourcesGroupIcon
       └─ resourceEditorsGroup
          ├─ roomIdEditor
          ├─ priorityIdEditor
          ├─ assigneeIdEditor
          └─ ...

For additional information about predefined items within the appointment edit form, see the following topic: [Scheduler - Appointment Edit Form](/Documentation/Guide/UI_Components/Scheduler/Appointments/Appointment_Edit_Form/#Rearrange_Form_Items)
