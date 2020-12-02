**Scheduler** displays all appointments in the client time zone. To change this default behavior, you can specify a different time zone in the [timeZone](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#timeZone) option. It accepts values from the IANA database. In this tutorial, the 'Europe/Berlin' time zone is used.

Additionally, we will allow users to edit time zones of individual appointments. For this, enable the editing.[allowTimeZoneEditing](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/#allowTimeZoneEditing) option.

---
##### jQuery

    <!-- tab: index.js --> 
    $(function() { 
        $("#scheduler").dx{WidgetName}({ 
            // ...
            editing: {
                // ...
                allowTimeZoneEditing: true
            },
            timeZone: "Europe/Berlin"
        });
    });

##### Angular 

    <!-- tab: app.component.html --> 
    <dx-scheduler ...
        timeZone="Europe/Berlin">
        <!-- ... -->
        <dxo-editing ...
            [allowTimeZoneEditing]="true"
        ></dxo-editing>
    </dx-scheduler> 

##### Vue 

    <!-- tab: App.vue --> 
    <template> 
        <DxScheduler ...
            timeZone="Europe/Berlin">
            <!-- ... -->
            <DxEditing ...
                :allow-editing-time-zones="true"
            />
        </DxScheduler>
    </template> 

    <script> 
        // ...
    </script> 

##### React 

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Scheduler, Resource, Editing } from 'devextreme-react/scheduler';

    function App() {
        return (
            <div className="App">
                <Scheduler ...
                    timeZone="Europe/Berlin">
                    {/* ... */}
                    <Editing ...
                        allowTimeZoneEditing={true}
                    />
                </Scheduler>
            </div>
        );
    }

---