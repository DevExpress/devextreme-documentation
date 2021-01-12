The **Scheduler** displays all appointments in the client time zone. To change this default behavior, specify a different time zone in the [timeZone](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#timeZone) property. It accepts values from the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">IANA database</a>. In this tutorial, the "Europe/Berlin" time zone is used.

Users can edit the time zones of individual appointments. To enable this functionality, set the **editing**.[allowTimeZoneEditing](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/#allowTimeZoneEditing) option to **true**.

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

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        timeZone="Europe/Berlin">
        <!-- ... -->
        <dxo-editing ...
            [allowTimeZoneEditing]="true">
        </dxo-editing>
    </dx-scheduler> 

##### Vue 

    <!-- tab: App.vue -->
    <template> 
        <DxScheduler ...
            time-zone="Europe/Berlin">
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
    // ...
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

    export default App;

---
