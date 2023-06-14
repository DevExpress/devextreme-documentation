---
id: dxScheduler.Options.selectedCellData
type: Array<any>
default: []
---
---
##### shortDescription
The data of the currently selected cells.

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

You can implement the [onOptionChanged](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onOptionChanged.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onOptionChanged') function to track all user actions that change selection. The following code logs the **selectedCellData** value in the browser console.


    <!--JavaScript-->const onOptionChanged = ({ name, value }) => {
        if (name === "selectedCellData") {
            console.log(value);
        }
    };

#####See Also#####
- [Group Appointments by Resources](/concepts/05%20UI%20Components/Scheduler/040%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/UI_Components/Scheduler/Resources/Group_Appointments_by_Resources/')
- [showAllDayPanel](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/showAllDayPanel.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#showAllDayPanel')