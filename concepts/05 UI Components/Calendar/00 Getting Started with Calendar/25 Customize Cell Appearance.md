Use [cellTemplate](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#cellTemplate) to customize the appearance of the cells. For example, in the following code all the dates that are federal US hoildays become red in the `month` view.

---
##### jQuery

    <!--tab: index.js-->
    $(function() {
        const federalHolidays = [
            new Date('2022-01-01T00:00:00.000Z'),
            new Date('2022-01-17T00:00:00.000Z'),
            new Date('2022-02-21T00:00:00.000Z'),
            new Date('2022-05-30T00:00:00.000Z'),
            new Date('2022-06-19T00:00:00.000Z'),
            new Date('2022-07-04T00:00:00.000Z'),
            new Date('2022-09-05T00:00:00.000Z'),
            new Date('2022-10-10T00:00:00.000Z'),
            new Date('2022-11-11T00:00:00.000Z'),
            new Date('2022-11-24T00:00:00.000Z'),
            new Date('2022-12-25T00:00:00.000Z')
        ];

        $("#calendar").dxCalendar({
            // ...
            cellTemplate: function(data) {
                let cssClass = '';
                $.each(federalHolidays, (_, item) => {
                    if (data.date.getDate() === item.getDate() && data.date.getMonth() === item.getMonth() && data.view !== 'year') {
                        cssClass = 'holiday';
                    }
                });
                return `<span class='${cssClass}'>${data.text}</span>`;
            }
        });
    });

    <!--tab: index.css-->
    .dx-calendar-cell:not(.dx-calendar-other-month) .holiday {
        text-shadow: none;
        font-weight: bold;
        color: #ff3030;
    }

##### Angular

    <!--tab: app.component.html-->
    <dx-calendar ...
        cellTemplate="cell"
    >
        <span
            *dxTemplate="let cell of 'cell'"
            [ngClass]="getCellCssClass(cell.date, cell.view)"
        >
            {{ cell.text }}
        </span>
    </dx-calendar>

    <!--tab: app.component.ts-->
    // ...
    export class AppComponent {
        // ...
        federalHolidays = [
            new Date('2022-01-01T00:00:00.000Z'),
            new Date('2022-01-17T00:00:00.000Z'),
            new Date('2022-02-21T00:00:00.000Z'),
            new Date('2022-05-30T00:00:00.000Z'),
            new Date('2022-06-19T00:00:00.000Z'),
            new Date('2022-07-04T00:00:00.000Z'),
            new Date('2022-09-05T00:00:00.000Z'),
            new Date('2022-10-10T00:00:00.000Z'),
            new Date('2022-11-11T00:00:00.000Z'),
            new Date('2022-11-24T00:00:00.000Z'),
            new Date('2022-12-25T00:00:00.000Z')
        ];
        
        getCellCssClass(date: any, view: any) {
            let cssClass = '';
            this.federalHolidays.forEach((item) => {
                if (date.getDate() === item.getDate() && date.getMonth() === item.getMonth() && view !== 'year') {
                    cssClass = 'holiday';
                }
            });

            return cssClass;
        }
    }

    <!--tab: app.component.css-->
    ::ng-deep .dx-calendar-cell:not(.dx-calendar-other-month) .holiday {
        text-shadow: none;
        font-weight: bold;
        color: #ff3030;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar ...
            cell-template="custom"
        >
            <template #custom="{ data: cell }">
                <span :class="getCellCssClass(cell.date, cell.view)">
                    {{ cell.text }}
                </span>
            </template>
        </DxCalendar>
    </template>

    <script>
    // ...
    const federalHolidays = [
        new Date('2022-01-01T00:00:00.000Z'),
        new Date('2022-01-17T00:00:00.000Z'),
        new Date('2022-02-21T00:00:00.000Z'),
        new Date('2022-05-30T00:00:00.000Z'),
        new Date('2022-06-19T00:00:00.000Z'),
        new Date('2022-07-04T00:00:00.000Z'),
        new Date('2022-09-05T00:00:00.000Z'),
        new Date('2022-10-10T00:00:00.000Z'),
        new Date('2022-11-11T00:00:00.000Z'),
        new Date('2022-11-24T00:00:00.000Z'),
        new Date('2022-12-25T00:00:00.000Z')
    ];

    export default {
        // ...
        methods: {
            getCellCssClass(date, view) {
                let cssClass = '';
                federalHolidays.forEach((item) => {
                    if (date.getDate() === item.getDate() && date.getMonth() === item.getMonth() && view !== 'year') {
                        cssClass = 'holiday';
                    }
                });
                return cssClass;
            }
        }
    }
    </script>

    <style>
    .dx-calendar-cell:not(.dx-calendar-other-month) .holiday {
        text-shadow: none;
        font-weight: bold;
        color: #ff3030;
    }
    </style>

##### React

    <!-- tab: App.js -->
    // ...
    const federalHolidays = [
        new Date('2022-01-01T00:00:00.000Z'),
        new Date('2022-01-17T00:00:00.000Z'),
        new Date('2022-02-21T00:00:00.000Z'),
        new Date('2022-05-30T00:00:00.000Z'),
        new Date('2022-06-19T00:00:00.000Z'),
        new Date('2022-07-04T00:00:00.000Z'),
        new Date('2022-09-05T00:00:00.000Z'),
        new Date('2022-10-10T00:00:00.000Z'),
        new Date('2022-11-11T00:00:00.000Z'),
        new Date('2022-11-24T00:00:00.000Z'),
        new Date('2022-12-25T00:00:00.000Z')
    ];

    function App() {
        return (
            <Calendar ...
                cellRender={CustomCell} 
            >
            </Calendar>
        );
    };

    // ...
    
    function CustomCell(cell) {
        return (
            <span className={getCellCssClass(cell.date, cell.view)}>
                { cell.text }
            </span>
        );
    };

    function getCellCssClass(date, view) {
        let cssClass = '';
        federalHolidays.forEach((item) => {
            if (date.getDate() === item.getDate() && date.getMonth() === item.getMonth() && view !== 'year') {
                cssClass = 'holiday';
            }
        });
        return cssClass;
    };

    export default App;

    <!--tab: index.css-->
    .dx-calendar-cell:not(.dx-calendar-other-month) .holiday {
        text-shadow: none;
        font-weight: bold;
        color: #ff3030;
    }

---

You have configured basic Calendar features. For more information about this UI component and examples, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview/)
* [API Reference](/Documentation/ApiReference/UI_Components/dxCalendar/)