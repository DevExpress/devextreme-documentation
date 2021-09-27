---
id: dxGantt.Options.stripLines
type: Array<dxGanttStripLine>
default: undefined
inheritsType: dxGanttStripLine
---
---
##### shortDescription
Configures strip lines.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/StripLines/"
}

Strip lines allows you to highlight certain time or time intervals in the chart. Use the [start](/api-reference/_hidden/dxGanttStripLine/start.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/stripLines/#start') property to specify an individual line or combine it with the [end](/api-reference/_hidden/dxGanttStripLine/end.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/stripLines/#end') property setting to specify a time interval.

![DevExtreme Gantt - Strip Lines](/images/Gantt/strip-lines.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            stripLines: [{
                title: "Start",
                start: tasks[0].start
            }, {
                title: "Final Phase",
                start: tasks[tasks.length - 3].start,
                end: tasks[tasks.length - 1].end,
            }, {
                title: "Current Time",
                start: new Date(),
                cssClass: "current-time"
            }],
            //...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt>
        <dxi-strip-line
            [start]="tasks[0].start"
            title="Start">
        </dxi-strip-line>
        <dxi-strip-line
            [start]="tasks[tasks.length - 3].start"
            [end]="tasks[tasks.length - 1].end"
            title="Final Phase">
        </dxi-strip-line>
        <dxi-strip-line
            [start]="currentTime"
            title="Current Time"
            cssClass="current-time">
        </dxi-strip-line>
    </dx-gantt>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt >
            <DxStripLine
                :start="tasks[0].start"
                title="Start"
            />
            <DxStripLine
                :start="tasks[tasks.length - 3].start"
                :end="tasks[tasks.length - 1].end"
                title="Final Phase"
            />
            <DxStripLine
                :start="currentTime"
                title="Current Time"
                css-class="current-time"
            />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt, DxStripLine
            // ... 
        } from 'devextreme-vue/gantt';
        
        export default {
            components: { 
                DxGantt, DxStripLine
                // ... 
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-gantt/dist/dx-gantt.css'; 

    import Gantt, { 
        // ... 
    } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt>
                <StripLine start={tasks[0].start} title="Start" />
                <StripLine start={tasks[tasks.length - 3].start} end={tasks[tasks.length - 1].end} title="Final Phase" />
                <StripLine start={currentDate} title="Current Time" cssClass="current-time" />                
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .StripLines(s => {
            s.Add().Title("Start")
                    .Start(SampleData.GanttTasksJohnsonResidence.First().Start);
            s.Add().Title("Final Phase")
                    .Start(SampleData.GanttTasksJohnsonResidence.Where(t => t.ID == 20).First().Start)
                    .End(SampleData.GanttTasksJohnsonResidence.Where(t => t.ID == 22).First().End);
            s.Add().Title("Current Time")
                    .Start(DateTime.Now)
                    .CssClass("current-time");
        })
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .StripLines(s => {
            s.Add().Title("Start")
                    .Start(SampleData.GanttTasksJohnsonResidence.First().Start);
            s.Add().Title("Final Phase")
                    .Start(SampleData.GanttTasksJohnsonResidence.Where(t => t.ID == 20).First().Start)
                    .End(SampleData.GanttTasksJohnsonResidence.Where(t => t.ID == 22).First().End);
            s.Add().Title("Current Time")
                    .Start(DateTime.Now)
                    .CssClass("current-time");
        })
        // ...
    )

---
