---
id: dxScheduler.Options.customizeDateNavigatorText
type: function(info) | undefined
default: undefined
---
---
##### shortDescription
Customizes the date navigator's text.

##### param(info): Object
Information about the date navigator.

##### field(info.endDate): Date
The view interval's end date.

##### field(info.startDate): Date
The view interval's start date.

##### field(info.text): String
The text displayed in the date navigator.

##### return: String
The text that should be displayed.

---
![Scheduler Date Navigator](/images/UiWidgets/Scheduler_Date_Navigator.png)

In the following code, the **customizeDateNavigatorText** function is used to show dates in the `mm/dd/yyyy` format (`mm/yyyy` for the *"month"* view):

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var scheduler;
        $("#schedulerContainer").dxScheduler({
            // ...
            onInitialized: function(e) { scheduler = e.component; },
            customizeDateNavigatorText: function(e) {
                var formatOptions = { 
                    year: 'numeric', 
                    month: 'numeric', 
                    day: 'numeric' 
                };
                var formattedStartDate = e.startDate.toLocaleString("en", formatOptions);
                var formattedEndDate = e.endDate.toLocaleString("en", formatOptions);
                var view = scheduler.option("currentView");
                if(view === "day" | "timelineDay") 
                    return formattedStartDate;
                if(view === "month" ) 
                    return e.startDate.toLocaleString("en", { year: 'numeric', month: 'numeric' });
                return formattedStartDate + " - " + formattedEndDate;
            }
        });
    })

#####Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        currentView: string = "day";

        customizeDateNavigatorText = (e) => {
            let formatOptions = { 
                year: 'numeric', 
                month: 'numeric', 
                day: 'numeric' 
            };
            var formattedStartDate = e.startDate.toLocaleString("en", formatOptions);
            var formattedEndDate = e.endDate.toLocaleString("en", formatOptions);
            if(this.currentView === "day" | "timelineDay") 
                return formattedStartDate;
            if(this.currentView === "month" ) 
                return e.startDate.toLocaleString("en", { year: 'numeric', month: 'numeric' });
            return formattedStartDate + " - " + formattedEndDate;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler ...
        [(currentView)]="currentView"
        [customizeDateNavigatorText]="customizeDateNavigatorText">
    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ...
            v-model:current-view="currentView"
            :customize-date-navigator-text="customizeDateNavigatorText">
        </DxScheduler>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxScheduler } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                currentView: 'day',
                // ...
            }
        },
        methods: {
            customizeDateNavigatorText(e) {
                const formatOptions = { 
                    year: 'numeric', 
                    month: 'numeric', 
                    day: 'numeric' 
                };
                const formattedStartDate = e.startDate.toLocaleString('en', formatOptions);
                const formattedEndDate = e.endDate.toLocaleString('en', formatOptions);
                if(this.currentView === 'day' | 'timelineDay') 
                    return formattedStartDate;
                if(this.currentView === 'month' ) 
                    return e.startDate.toLocaleString('en', { year: 'numeric', month: 'numeric' });
                return formattedStartDate + ' - ' + formattedEndDate;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback, useState } from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';

    const App = () => {
        const [currentView, setCurrentView] = useState('day');

        const onOptionChanged = useCallback((e) => {
            if(e.name === 'currentView') {
                setCurrentView(e.value);
            }
        }, [setCurrentView]);

        const customizeDateNavigatorText = useCallback((e) => {
            const formatOptions = { 
                year: 'numeric', 
                month: 'numeric', 
                day: 'numeric' 
            };
            const formattedStartDate = e.startDate.toLocaleString('en', formatOptions);
            const formattedEndDate = e.endDate.toLocaleString('en', formatOptions);
            if(currentView === 'day' | 'timelineDay') 
                return formattedStartDate;
            if(currentView === 'month' ) 
                return e.startDate.toLocaleString('en', { year: 'numeric', month: 'numeric' });
            return formattedStartDate + ' - ' + formattedEndDate;
        }, [currentView]);

        return (
            <Scheduler ...
                currentView={currentView}
                onOptionChanged={onOptionChanged}
                customizeDateNavigatorText={customizeDateNavigatorText}
            />
        );
    }

    export default App;

---