To specify the current date, use the [currentDate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentDate) property:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({
            //...
            currentDate: new Date(2021, 4, 25)
        });
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-scheduler id="scheduler" ...
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
            :current-date="currentDate">
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

    const currentDate = new Date(2021, 4, 25);

    function App() {
        return (
            <div className="App">
                <Scheduler ...
                    defaultCurrentDate={currentDate}>
                </Scheduler>
            </div>
        );
    }

    export default App;

---
