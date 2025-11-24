---
id: dxScheduler.Options.editing.form.items
type: Array<dxFormSimpleItem, dxFormGroupItem, dxFormTabbedItem, dxFormEmptyItem, dxFormButtonItem>
default: []
---
---
##### shortDescription
Configures Appointment Edit Form items.

---
The following predefined items are available in the Appointment Edit Form:

    editing.form.items
    ├─ mainGroup
    |  ├─ subjectGroup
    |  │  ├─ subjectIcon
    |  │  └─ subjectEditor
    |  ├─ dateGroup
    |  │  ├─ dateIcon
    |  │  ├─ allDayEditor
    |  │  ├─ startDateGroup
    |  │  │  ├─ startDateTimeGroup
    |  │  │  │  ├─ startDateEditor
    |  │  │  │  └─ startTimeEditor
    |  │  │  └─ startDateTimezoneEditor
    |  │  └─ endDateGroup
    |  │     ├─ endDateTimeGroup
    |  │     │  ├─ endDateEditor
    |  │     │  └─ endTimeEditor
    |  │     └─ endDateTimezoneEditor
    |  ├─ repeatGroup
    |  │  ├─ repeatIcon
    |  │  └─ repeatEditor
    |  └─ descriptionGroup
    |     ├─ descriptionIcon
    |     └─ descriptionEditor
    └─ recurrenceGroup
       ├─ recurrenceStartDateGroup
       │  ├─ recurrenceStartDateIcon
       │  └─ recurrenceStartDateEditor
       ├─ recurrenceRuleGroup
       │  ├─ recurrenceRuleIcon
       │  ├─ recurrenceRuleRepeatGroup
       │  ├─ recurrenceCountEditor
       │  ├─ recurrencePeriodEditor
       │  └─ recurrenceDayOfYearGroup — recurrenceDaysOfWeekEditor — recurrenceDayOfMonthEditor
       │     ├─ recurrenceDayOfYearMonthEditor
       │     └─ recurrenceDayOfYearDayEditor
       └─ recurrenceEndGroup
          ├─ recurrenceEndIcon
          └─ recurrenceEndEditor
