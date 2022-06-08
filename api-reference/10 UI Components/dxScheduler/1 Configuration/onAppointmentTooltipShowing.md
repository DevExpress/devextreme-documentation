---
id: dxScheduler.Options.onAppointmentTooltipShowing
type: function(e)
default: null
---
---
##### shortDescription
Occures before showing an appointment's tooltip.

##### param(e): Object
Information about the event.

##### field(e.appointments): Array<Object>
An array of appointments. 

##### field(e.cancel): Boolean
Allows you to prevent a tooltip showing.

##### field(e.component): dxScheduler
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.targetElement): DxElement
An element to which target the appointment.

---


---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            //...
            onAppointmentTooltipShowing: (e) => {
                e.appointments = e.appointments.reverse();
                list.option('dataSource', e.appointments);
                tooltip.option('target', e.targetElement);
                tooltip.show();
                e.cancel = true;
            }
        });

        const tooltip = $('#tooltip').dxTooltip({ 
            contentTemplate: () => listElement
        }).dxTooltip('instance');
        
        const listElement = $('<div>');
        
        const list = $(listElement).dxList({
            dataSource: [],
            height: '100%',
            width: '300px',
            itemTemplate: data => $('<div>').text(data.appointmentData.text)
        }).dxList('instance');    
    });

##### Angular

    

##### Vue

    

##### React

   

---