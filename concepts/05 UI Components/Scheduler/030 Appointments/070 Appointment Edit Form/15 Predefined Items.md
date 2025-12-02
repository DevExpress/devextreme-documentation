The appointment edit form includes multiple predefined items. To integrate these, assign predefined item names to [SimpleItem](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/)/[GroupItem](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/) objects in the **editing**.**form**.[items](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/form/#items) array. You can customize predefined items in their **SimpleItem**/**GroupItem** objects. To integrate predefined items without customization, add item names as strings.

The following predefined items are available:

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

#include btn-open-demo with {
   href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Resources/"
}

Below is a list of images that demonstrate predefined items within each available group.

### General Appointment Details

General appointment details are available in the `mainGroup`:

<img src="/images/Scheduler/appointment-edit-form/items/1-mainGroup.png" alt="Scheduler appointment edit form, main group" style="width: 750px"></img>

1. `mainGroup`

### Appointment Recurrence Settings

Appointment recurrence settings are available in the `recurrenceGroup`:

<img src="/images/Scheduler/appointment-edit-form/items/2-recurrenceGroup.png" alt="Scheduler appointment edit form, recurrence group" style="width: 750px"></img>

1. `recurrenceGroup`

### Subject

<img src="/images/Scheduler/appointment-edit-form/items/3-subjectGroup.png" alt="Scheduler appointment edit form, subject group items" style="width: 750px"></img

1. `subjectGroup`
2. `subjectIcon`
3. `subjectEditor`

### Date

<img src="/images/Scheduler/appointment-edit-form/items/4-dateGroup.png" alt="Scheduler appointment edit form, date group items" style="width: 750px"></img>

1. `dateGroup`
2. `dateIcon`
3. `dateOptionsGroup`
4. `allDayEditor`
5. `startDateGroup`
6. `endDateGroup`

### Recurrence

<img src="/images/Scheduler/appointment-edit-form/items/5-repeatGroup.png" alt="Scheduler appointment edit form, repeat group items" style="width: 750px"></img>

1. `repeatGroup`
2. `repeatIcon`
3. `repeatEditor`

### Description

<img src="/images/Scheduler/appointment-edit-form/items/6-descriptionGroup.png" alt="Scheduler appointment edit form, description group items" style="width: 750px"></img>

1. `descriptionGroup`
2. `descriptionIcon`
3. `descriptionEditor`

### Start Date

<img src="/images/Scheduler/appointment-edit-form/items/7-startDateGroup.png" alt="Scheduler appointment edit form, start date group items" style="width: 750px"></img>

1. `startDateGroup`
2. `startDateTimeGroup`
3. `startDateTimezoneEditor`
4. `startDateEditor`
5. `startTimeEditor`

### End Date

<img src="/images/Scheduler/appointment-edit-form/items/8-endDateGroup.png" alt="Scheduler appointment edit form, end date group items" style="width: 750px"></img>

1. `endDateGroup`
2. `endDateTimeGroup`
3. `endDateTimezoneEditor`
4. `endDateEditor`
5. `endTimeEditor`

### Recurrence Start Date

<img src="/images/Scheduler/appointment-edit-form/items/9-recurrenceStartDateGroup.png" alt="Scheduler appointment edit form, recurrence start date group items" style="width: 750px"></img>

1. `recurrenceStartDateGroup`
2. `recurrenceStartDateIcon`
2. `recurrenceStartDateEditor`

### Recurrence Rules - Common Items

The following image demonstrates `recurrenceRuleGroup` items that are displayed in all recurrence modes:

<img src="/images/Scheduler/appointment-edit-form/items/10-recurrenceRuleGroup.png" alt="Scheduler appointment edit form, recurrence rule group items displayed in all recurrence modes" style="width: 750px"></img>

1. `recurrenceRuleGroup`
2. `recurrenceRuleIcon`
3. `recurrencePatternGroup`    
   └─ `recurrenceRuleRepeatGroup`
4. `recurrenceCountEditor`

[note] `recurrenceCountEditor` is nested within `recurrenceRuleRepeatGroup`.

### Recurrence Rules - Mode-Specific Options

The following image demonstrates `recurrenceRuleGroup` items specific to each recurrence mode:

<img src="/images/Scheduler/appointment-edit-form/items/11-recurrenceRuleOptions.png" alt="Scheduler appointment edit form, recurrence rule group items specific to each recurrence mode" style="width: 750px"></img>

1. `recurrencePeriodEditor` - Daily Recurrence    
   ㅤ
2. `recurrencePeriodEditor` - Weekly Recurrence
3. `recurrenceDaysOfWeekEditor`    
   ㅤ
4. `recurrencePeriodEditor` - Monthly Recurrence
5. `recurrenceDayOfMonthEditor`    
   ㅤ
6. `recurrencePeriodEditor` - Yearly Recurrence
7. `recurrenceDayOfYearGroup`
8. `recurrenceDayOfYearMonthEditor`
9. `recurrenceDayOfYearDayEditor`

[note] All items except `recurrencePeriodEditor` are nested within `recurrencePatternGroup`.

### Recurrence End Date

<img src="/images/Scheduler/appointment-edit-form/items/12-recurrenceEndGroup.png" alt="Scheduler appointment edit form, recurrence end date group items" style="width: 750px"></img>

1. `recurrenceEndGroup`
2. `recurrenceEndIcon`
3. `recurrenceEndEditor`
