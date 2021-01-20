To specify the current date, use the [currentDate](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentDate) property:

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

    @Component({ 
        selector: 'app-root', 
        templateUrl: './app.component.html', 
        styleUrls: ['./app.component.css'] 
    }) 
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
