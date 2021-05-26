---
id: dxScheduler.Options.views.appointmentCollectorTemplate
type: template
default: 'appointmentCollector'
---
---
##### shortDescription
Specifies a custom template for [cell overflow indicators](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/080%20Cell%20Overflow%20Indicator.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Cell_Overflow_Indicator/') in this view.

##### param(data): Object
Information about a cell overflow indicator.

##### field(data.appointmentCount): Number
The count of hidden appointments.

##### field(data.isCompact): Boolean
Indicates whether the overflow indicator is [compact](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/080%20Cell%20Overflow%20Indicator.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Cell_Overflow_Indicator/').

##### param(collectorElement): DxElement
#include common-ref-elementparam with { element: "overflow indicator" }

##### return: String | UserDefinedElement
A template name or container.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            // ...
            views: [{
                // ...
                appointmentCollectorTemplate: function(data, $indicatorElement) {
                    $indicatorElement.append(
                        // Custom jQuery elements go here
                    )
                    // ===== or =====
                    return /* your markup goes here */
                }
            },
            // ...
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ... >
        <dxi-view ...
            appointmentCollectorTemplate="myTemplate">
        </dxi-view>
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
        <DxScheduler ... >
            <DxView ...
                appointment-collector-template="myTemplate"
            />
            <template #myTemplate="{ data }">
                <!-- your markup goes here -->
            </template>
        </DxScheduler>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxScheduler, DxView } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler,
            DxView
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

    import 'devextreme/dist/css/dx.light.css';

    import { Scheduler, View } from 'devextreme-react/scheduler';

    const renderCellOverflowIndicator = (data) => {
        return (
            {/* your markup goes here */}
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Scheduler ... >
                    <View ...
                        appointmentCollectorRender={renderCellOverflowIndicator}
                    />
                </Scheduler>
            );
        }
    }

    export default App;

---

#####See Also#####
- [appointmentCollectorTemplate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/appointmentCollectorTemplate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#appointmentCollectorTemplate')
