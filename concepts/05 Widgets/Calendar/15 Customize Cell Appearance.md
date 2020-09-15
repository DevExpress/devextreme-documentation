To specify custom cell appearance, define a [cellTemplate](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#cellTemplate) ([cellRender](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#cellRender) in React). Within the template, you can access cell data and index. For example, the following code uses the template to change the style of weekend days:

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#calendarContainer").dxCalendar({
            value: new Date(),
            cellTemplate: function (cellData, cellIndex) {
                var italic = $("<span>").css('font-style', 'italic')
                                        .text(cellData.text);
                var normal = $("<span>").text(cellData.text);
                return (cellIndex == 0 || cellIndex == 6) ? italic : normal;
            }
        });
    });


##### Angular

    <!--HTML-->
    <dx-calendar
        [(value)]="currentDate">
        <span *dxTemplate="let cellData of 'cell'; let i = index"
             [style.font-style]="i == 0 || i == 6 ? 'italic' : 'normal'">
             {{cellData.text}}
        </span>
    </dx-calendar>

    <!--TypeScript-->
    import { DxCalendarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        currentDate: Date = new Date();
    }
    @NgModule({
        imports: [
            // ...
            DxCalendarModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar
            :value="date"
            cell-template="cell"
        >
            <template #cell="{ data: cell, index }">
                <span :style="{ fontStyle: index === 0 || index === 6 ? 'italic' : 'normal' }">
                    {{ cell.text }}
                </span>
            </template>
        </DxCalendar>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxCalendar from 'devextreme-vue/calendar';

    export default {
        components: {
            DxCalendar
        },
        data() {
            return {
                date: new Date()
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Calendar from 'devextreme-react/calendar';

    const date = new Date();
    function CustomCell(cellInfo, index) {
        return (
            <span style={{ fontStyle: index === 0 || index === 6 ? 'italic' : 'normal' }}>
                { cellInfo.text }
            </span>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Calendar
                    defaultValue={date}
                    cellRender={CustomCell} />
            );
        }
    }
    export default App;

---

#####See Also#####
- [Calendar Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview)
- [Calendar API Reference](/api-reference/10%20UI%20Widgets/dxCalendar '/Documentation/ApiReference/UI_Widgets/dxCalendar/')

[tags]calendar, cell appearance, customize, templates