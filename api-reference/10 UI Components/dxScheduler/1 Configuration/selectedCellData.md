---
id: dxScheduler.Options.selectedCellData
type: Array<any>
default: []
---
---
##### shortDescription
Currently selected cells' data.

##### readonly

---
This array contains objects with the following structure:

    {
        startDate: Date,
        endDate: Date,
        allDay: Boolean, 
        groups: { // present if grouping is enabled
            resourceKind: "resourceValue" // for example, room: "101"
        }     
    }

#####See Also#####
- [Group Appointments by Resources](/concepts/05%20Widgets/Scheduler/040%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/')
- [showAllDayPanel](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/showAllDayPanel.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#showAllDayPanel')