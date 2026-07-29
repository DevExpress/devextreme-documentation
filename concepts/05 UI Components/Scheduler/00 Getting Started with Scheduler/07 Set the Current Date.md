Use [currentDate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/currentDate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentDate') to specify the date displayed in the Scheduler:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({
            //...
            currentDate: new Date(2021, 4, 25),
        });
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().Scheduler()
        .CurrentDate(new DateTime(2021, 5, 25))
        // ...
    )

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler
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
        <DxScheduler
            v-model:current-date="currentDate">
        </DxScheduler>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    // ...

    const currentDate = ref<Date>(new Date(2021, 4, 25));
    </script>

##### React 

    <!-- tab: App.tsx -->
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
            <Scheduler
                currentDate={currentDate}
                onOptionChanged={handlePropertyChange}>
            </Scheduler>
        );
    }

    export default App;

---
