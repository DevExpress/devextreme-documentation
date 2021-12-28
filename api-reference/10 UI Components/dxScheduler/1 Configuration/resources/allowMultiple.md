---
id: dxScheduler.Options.resources.allowMultiple
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether you can assign several resources of this kind to an appointment.

---

The appointment form displays the [SelectBox](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/') UI component to select a single resource. If the **allowMultiple** property is set to **true**, the appointment form displays the [TagBox](/api-reference/10%20UI%20Components/dxTagBox '/Documentation/ApiReference/UI_Components/dxTagBox/') UI component to select one or more resources.

Note that you should specify resources for appointments in your data source according to the **allowMultiple** property value:
- As a scalar value (allowMultiple=false, the default value).
- As an array of scalar values (allowMultiple=true).

<!-- -->

    <!--JavaScript-->
    // index.js
    $(function() {
        $("#gantt").dxGantt({
            resources: [
            {
                fieldExpr: 'roomId',
                dataSource: rooms,
                label: 'Room',
            }, {
                fieldExpr: 'assigneeId',
                allowMultiple: true,
                dataSource: assignees,
                label: 'Assignee',
            }],
            //...
        });
    });

    // data.js 
    const data = [
    {
        text: 'Website Re-Design Plan',
        roomId: 1,
        assigneeId: [3,4],
        startDate: new Date('2021-04-26T16:30:00.000Z'),
        endDate: new Date('2021-04-26T18:30:00.000Z'),
    },
    // ...
    ];

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Resources/"
}