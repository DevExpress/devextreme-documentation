---
##### shortDescription
Use this class to customize Scheduler table cells and the cells to the left of them (in the time scale). For example, you can change the cell's height and keep all the elements aligned. For timeline view types, this class applies only if [crossScrollingEnabled](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/crossScrollingEnabled.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#crossScrollingEnabled') is set to **true**.

---
<!--->

    <!--CSS-->
    #yourSchedulerID .dx-scheduler-cell-sizes-vertical {
        height: 200px;
    }

[note] The Scheduler does not support `.dx-scheduler-cell-sizes-vertical` element dimension modification at runtime.