To specify the current date, use the [currentDate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/currentDate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentDate') property:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({
            //...
            currentDate: new Date(2021, 4, 25),
        });
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        [(currentDate)]="currentDate">
    </dx-scheduler> 

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core'; 

    #include angular-component-decorator
    export class AppComponent { 
        currentDate: Date = new Date(2021, 4, 25);
    } 

##### Vue 

    <!-- tab: App.vue -->
    <template> 
        <DxScheduler ...
            :current-date.sync="currentDate">
        </DxScheduler>
    </template>

    <script> 
    // ...
    export default { 
        // ...
        data() {
            return {
                currentDate: new Date(2021, 4, 25),
            };
        }
    } 
    </script>

##### React 

    <!-- tab: App.js -->
    // ...
    import { useCallback, useState } from 'react';

    function App() {
        const [currentDate, setCurrentDate] = useState(new Date(2021, 4, 25));
        const handlePropertyChange = useCallback((e) => {
            if(e.name === 'currentDate') {
                setCurrentDate(e.value);
            }
        }, [])

        return (
            <Scheduler ...
                currentDate={currentDate}
                onOptionChanged={handlePropertyChange}>
            </Scheduler>
        );
    }

    export default App;

---
