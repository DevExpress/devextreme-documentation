The appointment edit form includes multiple predefined items. To integrate these, assign predefined item names to [SimpleItem](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/')/[GroupItem](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/GroupItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/') objects in the **editing**.**form**.[items](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/form/items.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/form/#items') array. You can customize predefined items in their **SimpleItem**/**GroupItem** objects. To integrate predefined items without customization, add item names as strings.

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

Items within `resourcesGroup` depend on resource [fieldExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#fieldExpr') and [icon](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/icon.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#icon') properties. Scheduler uses resource field expressions (for instance, "roomId") in item names as follows:

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
   href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Resources/",
   width: "30vw",
   minWidth: "412px"
}

The images below illustrate predefined items within each available group.

### General Appointment Details

General appointment details are available in the `mainGroup`:

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/1-mainGroup.png",
   alt: "Scheduler appointment edit form, main group",
   width: "30vw",
   minWidth: "412px"
}

1. `mainGroup`

### Appointment Recurrence Settings

Appointment recurrence settings are available in the `recurrenceGroup`:

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/2-recurrenceGroup.png",
   alt: "Scheduler appointment edit form, recurrence group",
   width: "30vw",
   minWidth: "412px"
}

1. `recurrenceGroup`

### Subject

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/3-subjectGroup.png",
   alt: "Scheduler appointment edit form, subject group items",
   width: "30vw",
   minWidth: "412px"
}

1. `subjectGroup`
2. `subjectIcon`
3. `subjectEditor`

### Date

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/4-dateGroup.png",
   alt: "Scheduler appointment edit form, date group items",
   width: "30vw",
   minWidth: "412px"
}

1. `dateGroup`
2. `dateIcon`
3. `dateOptionsGroup`
4. `allDayEditor`
5. `startDateGroup`
6. `endDateGroup`

### Recurrence

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/5-repeatGroup.png",
   alt: "Scheduler appointment edit form, repeat group items",
   width: "30vw",
   minWidth: "412px"
}

1. `repeatGroup`
2. `repeatIcon`
3. `repeatEditor`

### Resources

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/resourcesGroup.png",
   alt: "Scheduler appointment edit form, resources groups.",
   width: "30vw",
   minWidth: "412px"
}

1. `resourcesGroup`
2. `roomIdGroup`
3. `priorityIdGroup`
4. `assigneeIdGroup`

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/resourcesGroup-content.png",
   alt: "Scheduler appointment edit form, resources group items.",
   width: "30vw",
   minWidth: "412px"
}

1. `roomIdGroup`
2. `roomIdIcon`
3. `roomIdEditor`
4. `priorityIdGroup`
5. `priorityIdIcon`
6. `priorityIdEditor`
7. `assigneeIdGroup`
8. `assigneeIdIcon`
9. `assigneeIdEditor`

The following image demonstrates a compact `resourcesGroup` layout:

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/resourcesGroup-alt.png",
   alt: "Scheduler appointment edit form, resources group items, alternative layout.",
   width: "30vw",
   minWidth: "412px"
}

1. `resourcesGroup`
2. `roomIdGroup`
3. `priorityIdEditor`

The following image demonstrates `resourcesGroup` items when no resource icons are specified:

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/resourcesGroup-no-logos.png",
   alt: "Scheduler appointment edit form, resources group items, no individual resource icons.",
   width: "30vw",
   minWidth: "412px"
}

1. `resourcesGroup`
2. `resourcesGroupIcon`
3. `resourceEditorsGroup`

### Description

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/6-descriptionGroup.png",
   alt: "Scheduler appointment edit form, description group items",
   width: "30vw",
   minWidth: "412px"
}

1. `descriptionGroup`
2. `descriptionIcon`
3. `descriptionEditor`

### Start Date

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/7-startDateGroup.png",
   alt: "Scheduler appointment edit form, start date group items",
   width: "30vw",
   minWidth: "412px"
}

1. `startDateGroup`
2. `startDateTimeGroup`
3. `startDateTimezoneEditor`
4. `startDateEditor`
5. `startTimeEditor`

### End Date

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/8-endDateGroup.png",
   alt: "Scheduler appointment edit form, end date group items",
   width: "30vw",
   minWidth: "412px"
}

1. `endDateGroup`
2. `endDateTimeGroup`
3. `endDateTimezoneEditor`
4. `endDateEditor`
5. `endTimeEditor`

### Recurrence Start Date

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/9-recurrenceStartDateGroup.png",
   alt: "Scheduler appointment edit form, recurrence start date group items",
   width: "30vw",
   minWidth: "412px"
}

1. `recurrenceStartDateGroup`
2. `recurrenceStartDateIcon`
2. `recurrenceStartDateEditor`

### Recurrence Rules - Common Items

The following image demonstrates `recurrenceRuleGroup` items that are displayed in all recurrence modes:

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/10-recurrenceRuleGroup.png",
   alt: "Scheduler appointment edit form, recurrence rule group items displayed in all recurrence modes",
   width: "30vw",
   minWidth: "412px"
}

1. `recurrenceRuleGroup`
2. `recurrenceRuleIcon`
3. `recurrencePatternGroup`    
   └─ `recurrenceRuleRepeatGroup`
4. `recurrenceCountEditor`

[note] `recurrenceCountEditor` is nested within `recurrenceRuleRepeatGroup`.

### Recurrence Rules - Mode-Specific Options

The following image demonstrates `recurrenceRuleGroup` items specific to each recurrence mode:

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/11-recurrenceRuleOptions.png",
   alt: "Scheduler appointment edit form, recurrence rule group items specific to each recurrence mode",
   width: "30vw",
   minWidth: "412px"
}

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

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/12-recurrenceEndGroup.png",
   alt: "Scheduler appointment edit form, recurrence end date group items",
   width: "30vw",
   minWidth: "412px"
}

1. `recurrenceEndGroup`
2. `recurrenceEndIcon`
3. `recurrenceEndEditor`

#include full-width-image-container with {
   src: "/images/Scheduler/appointment-edit-form/items/recurrenceEndEditor.png",
   alt: "Scheduler appointment edit form, recurrence end date editor items",
   width: "30vw",
   minWidth: "412px"
}

1. `recurrenceEndEditor`
2. `recurrenceRepeatEndEditor`
3. `recurrenceEndEditorsGroup`
4. `recurrenceEndSpacer`
5. `recurrenceEndUntilEditor`
6. `recurrenceEndCountEditor`
