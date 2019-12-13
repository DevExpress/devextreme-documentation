---
id: dxScheduler.Options.dataSource
type: String | Array<dxSchedulerAppointment> | DataSource | DataSource_Options
default: null
inheritsType: dxSchedulerAppointment
---
---
##### shortDescription
Binds the widget to data.

---
#include common-dataSource-description with {
    widget_works_with: "The **Scheduler** works with collections of objects.",

    object_structure_notes: "In each case, also specify the widget's [startDateExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/startDateExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#startDateExpr') and [endDateExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/endDateExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#endDateExpr') options. Optionally, set other options with the **Expr** postfix.",

    array_view_demo: "[View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/SimpleArray)",

    custom_store_view_demo: "[View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/GoogleCalendarIntegration)",

    paginate_note: "- If you wrap the store into the **DataSource** object explicitly, set the [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') option to **false** to prevent data from partitioning."
}