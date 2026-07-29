#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/Scheduler/Time_Zone_Support/", name: "Time Zone Support" }

Scheduler displays all appointments in the client time zone in the default configuration. To use a different time zone, specify the [timeZone](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/timeZone.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#timeZone') property. This option accepts [IANA time zone identifiers](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). This tutorial sets the time zone to "Europe/Berlin".

Users can also edit the time zones of individual appointments when **editing**.[allowTimeZoneEditing](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/allowTimeZoneEditing.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowTimeZoneEditing') is enabled:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({ 
            // ...
            editing: {
                // ...
                allowTimeZoneEditing: true
            },
            timeZone: "Europe/Berlin"
        });
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().Scheduler()
        .Editing(e => e
            .AllowTimeZoneEditing(true)
        )
        // ...
    )

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler
        timeZone="Europe/Berlin"
    >
        <dxo-scheduler-editing
            [allowTimeZoneEditing]="true"
        ></dxo-scheduler-editing>
        <!-- ... -->
    </dx-scheduler> 

##### Vue 

    <!-- tab: App.vue -->
    <template> 
        <DxScheduler
            time-zone="Europe/Berlin"
        >
            <DxEditing
                :allow-time-zone-editing="true"
            />
            <!-- ... -->
        </DxScheduler>
    </template>

##### React 

    <!-- tab: App.tsx -->
    // ...
    export default function App() {
        return (
            <Scheduler
                timeZone="Europe/Berlin"
            >
                <Editing
                    allowTimeZoneEditing={true}
                />
                {/* ... */}
            </Scheduler>
        );
    }

---
