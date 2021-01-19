---
id: dxScheduler.Options.appointmentCollectorTemplate
type: template
default: 'appointmentCollector'
---
---
##### shortDescription
Specifies a custom template for [cell overflow indicators](/concepts/05%20Widgets/Scheduler/030%20Appointments/080%20Cell%20Overflow%20Indicator.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Cell_Overflow_Indicator/').

##### param(data): Object
Information about a cell overflow indicator.

##### field(data.appointmentCount): Number
The count of hidden appointments.

##### field(data.isCompact): Boolean
Indicates whether the overflow indicator is [compact](/concepts/05%20Widgets/Scheduler/030%20Appointments/080%20Cell%20Overflow%20Indicator.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Cell_Overflow_Indicator/').

##### param(collectorElement): dxElement
#include common-ref-elementparam with { element: "overflow indicator" }

##### return: String | Element | jQuery
A template name or container.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            // ...
            appointmentCollectorTemplate: function(data, $indicatorElement) {
                $indicatorElement.append(
                    // Custom jQuery elements go here
                )
                // ===== or =====
                return /* your markup goes here */
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ... 
        appointmentCollectorTemplate="myTemplate">
        <div *dxTemplate="let data of 'myTemplate'">
            <!-- your markup goes here -->
        </div>
    </dx-scheduler>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxSchedulerModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxSchedulerModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ...
            appointment-collector-template="myTemplate">
            <template #myTemplate="{ data }">
                <!-- your markup goes here -->
            </template>
        </DxScheduler>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxScheduler } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Scheduler } from 'devextreme-react/scheduler';

    const renderCellOverflowIndicator = (data) => {
        return (
            {/* your markup goes here */}
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Scheduler ...
                    appointmentCollectorRender={renderCellOverflowIndicator}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- **views[]**.[appointmentCollectorTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views/appointmentCollectorTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#appointmentCollectorTemplate')
