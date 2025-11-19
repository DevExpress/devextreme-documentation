The appointment edit form includes multiple predefined items. To integrate these, assign predefined item names to [SimpleItem]()/[GroupItem]() objects in the **editing**.**form**.[items]() array. You can customize predefined items in their **SimpleItem**/**GroupItem** objects. To integrate predefined items without customization, add item names as strings.

The following predefined items are available:

- [mainGroup]({currentpath}#mainGroup)
- [recurrenceGroup]({currentpath}#recurrenceGroup)
- [subjectGroup]({currentpath}#subjectGroup)
- [dateGroup]({currentpath}#dateGroup)
- [repeatGroup]({currentpath}#repeatGroup)
- [descriptionGroup]({currentpath}#descriptionGroup)
- [startDateGroup]({currentpath}#startDateGroup)
- [endDateGroup]({currentpath}#endDateGroup)
- [recurrenceStartDateGroup]({currentpath}#recurrenceStartDateGroup)
- [recurrenceRuleGroup]({currentpath}#recurrenceRuleGroup)
- [recurrencePeriodEditor]({currentpath}#recurrencePeriodEditor)
- [recurrenceEndGroup]({currentpath}#recurrenceEndGroup)

Predefined items are nested as follows:

    editing.form.items
    ├─ mainGroup
    |  ├─ subjectGroup
    |  │  ├─ subjectIcon
    |  │  └─ subjectEditor
    |  └─ dateGroup
    |     ├─ dateIcon
    |     ├─ allDayEditor
    |     ├─ startDateGroup
    |     │  ├─ startDateTimeGroup
    |     │  │  ├─ startDateEditor
    |     │  │  └─ startTimeEditor
    |     │  └─ startDateTimezoneEditor
    |     ├─ endDateGroup
    |     │  ├─ endDateTimeGroup
    |     │  │  ├─ endDateEditor
    |     │  │  └─ endTimeEditor
    |     │  └─ endDateTimezoneEditor
    |     ├─ repeatGroup
    |     │  ├─ repeatIcon
    |     │  └─ repeatEditor
    |     └─ descriptionGroup
    |        ├─ descriptionIcon
    |        └─ descriptionEditor
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

### General Details

<a name='mainGroup' href=''></a>

<img src="/images/Scheduler/appointment-edit-form/items/1-mainGroup.png" alt="TBA" style="width: 750px"></img>

1. `mainGroup`

### Recurrence Settings

<a name='recurrenceGroup' href=''></a>

<img src="/images/Scheduler/appointment-edit-form/items/2-recurrenceGroup.png" alt="TBA" style="width: 750px"></img>

1. `recurrenceGroup`

### Subject

<a name='subjectGroup' href=''></a>

<img src="/images/Scheduler/appointment-edit-form/items/3-subjectGroup.png" alt="TBA" style="width: 750px"></img>


1. `subjectGroup`
2. `subjectIcon`
3. `subjectEditor`

### Date

<a name='dateGroup' href=''></a>

<img src="/images/Scheduler/appointment-edit-form/items/4-dateGroup.png" alt="TBA" style="width: 750px"></img>

1. `dateGroup`
2. `dateIcon`
3. `allDayEditor`
4. `startDateGroup`
5. `endDateGroup`

### Recurrence Dropdown

<a name='repeatGroup' href=''></a>

<img src="/images/Scheduler/appointment-edit-form/items/5-repeatGroup.png" alt="TBA" style="width: 750px"></img>

1. `repeatGroup`
2. `repeatIcon`
3. `repeatEditor`

### Description

<a name='descriptionGroup' href=''></a>

<img src="/images/Scheduler/appointment-edit-form/items/6-descriptionGroup.png" alt="TBA" style="width: 750px"></img>

1. `descriptionGroup`
2. `descriptionIcon`
3. `descriptionEditor`

### Recurrence Start

<a name='startDateGroup' href=''></a>

<img src="/images/Scheduler/appointment-edit-form/items/7-startDateGroup.png" alt="TBA" style="width: 750px"></img>

1. `startDateGroup`
2. `startDateTimeGroup`
3. `startDateTimezoneEditor`
4. `startDateEditor`
5. `startTimeEditor`

### Recurrence End

<a name='endDateGroup' href=''></a>

<img src="/images/Scheduler/appointment-edit-form/items/8-endDateGroup.png" alt="TBA" style="width: 750px"></img>

1. `endDateGroup`
2. `endDateTimeGroup`
3. `endDateTimezoneEditor`
4. `endDateEditor`
5. `endTimeEditor`

### Recurrence Start Date

<a name='recurrenceStartDateGroup' href=''></a>

<img src="/images/Scheduler/appointment-edit-form/items/9-recurrenceStartDateGroup.png" alt="TBA" style="width: 750px"></img>

1. `recurrenceStartDateGroup`
2. `recurrenceStartDateIcon`
2. `recurrenceStartDateEditor`

### Recurrence Rules - General Settings

<a name='recurrenceRuleGroup' href=''></a>

<img src="/images/Scheduler/appointment-edit-form/items/10-recurrenceRuleGroup.png" alt="TBA" style="width: 750px"></img>

1. `recurrenceRuleGroup`
2. `recurrenceRuleIcon`
3. `recurrenceRuleRepeatGroup`
4. `recurrenceCountEditor`

### Recurrence Rules - Rule-Specific Options

<a name='recurrencePeriodEditor' href=''></a>

<img src="/images/Scheduler/appointment-edit-form/items/11-recurrenceRuleOptions.png" alt="TBA" style="width: 750px"></img>

1. `recurrencePeriodEditor` - Daily Recurrence
2. `recurrencePeriodEditor` - Weekly Recurrence
3. `recurrenceDaysOfWeekEditor`
4. `recurrencePeriodEditor` - Monthly Recurrence
5. `recurrenceDayOfMonthEditor`
6. `recurrencePeriodEditor` - Yearly Recurrence
7. `recurrenceDayOfYearGroup`
8. `recurrenceDayOfYearMonthEditor`
9. `recurrenceDayOfYearDayEditor`

### Recurrence End

<a name='recurrenceEndGroup' href=''></a>

<img src="/images/Scheduler/appointment-edit-form/items/12-recurrenceEndGroup.png" alt="TBA" style="width: 750px"></img>

1. `recurrenceEndGroup`
2. `recurrenceEndIcon`
3. `recurrenceEndEditor`