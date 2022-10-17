---
id: dxCalendar.Options.weekNumberRule
acceptValues: 'auto' | 'firstDay' | 'fullWeek' | 'firstFourDays'
type: String
default: 'auto'
---
---
##### shortDescription
Specifies a [week number](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#showWeekNumbers) calculation rule. 

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview/"
}

This property can take on one of the following values:

- `firstDay`    
The first week of the year is the week that contains January 1. 

- `firstFourDays`    
The first week of the year is the week that starts on one of the first four week days: Monday, Tuesday, Wednesday, or Thursday. This rule is specified by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. If the first week of the year begins on a Friday, Saturday, or Sunday, this week is counted as the last week of the previous year.
 
- `fullWeek`
The first week of the year is the week that begins with a day that matches the [firstDayOfWeek](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#firstDayOfWeek) option value.
 
- `auto` (default)    
The week calculation rule depends on the locale. If a week starts on Monday, the `firstFourDays` rule is applied. Otherwise, the `firstDay` rule is in effect.

If you want to implement your own calculation rule, use the [cellTemplate](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#cellTemplate) function:

---
##### jQuery

    <!--tab: index.js-->
    $(function() {
        let lastDateOfWeek;

        function getWeekNumber(date, firstDayOfWeek) {
            // Implement your own week calculation logic
        }

        function getCellTemplate(data) {
            if (data.view === 'month') {
                if (!data.date) {
                    cssClass = 'week-number';
                    data.text = getWeekNumber(lastDateOfWeek, 0).toString();
                } 
                else {
                    lastDateOfWeek = data.date;
                }
            }
            return `<span>${data.text}</span>`;
        }

        $('#calendar-container').dxCalendar({
            value: new Date(2000, 0, 1),
            showWeekNumbers: true,
            cellTemplate: getCellTemplate
        });
    });

##### Angular

    <!--tab: app.component.html-->
    <dx-calendar
        [value]="currentValue"
        [showWeekNumbers]="true"
        (cellTemplate)="custom"
    >
        <span
            *dxTemplate="let cell of 'custom'"
            [ngClass]="getCellCssClass(cell)"
        >
            {{ cell.text }}
        </span>
    </dx-calendar>

    <!--tab: app.component.ts-->
    // ...
    export class AppComponent {
        lastDateOfWeek: Number;
        currentValue: Date = new Date(2000, 0, 1);

        getWeekNumber(date, firstDayOfWeek) {
            // Implement your own week calculation logic
        }

        getCellCssClass({ date, view, text }) {
            let cssClass = '';
            if (view === 'month') {
                if (!date) {
                    cssClass = 'week-number';
                    text = getWeekNumber(this.lastDateOfWeek, 0).toString();
                } 
                else {
                    this.lastDateOfWeek = date;
                }
            }
            return cssClass;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar
            :value="currentValue"
            :show-week-numbers="true"
            cell-template="custom"
        >
            <template #custom="{ data: cell }">
                <span :class="getCellCssClass(cell)">
                    {{ cell.text }}
                </span>
            </template>
        </DxCalendar>
    </template>

    <script>
    // ...
    function getWeekNumber(date, firstDayOfWeek) {
        // Implement your own week calculation logic
    }

    export default {
        // ...
        data() {
            return {
                currentValue: new Date(2000, 0, 1),
                lastDateOfWeek: 0
            }
        }
        methods: {
            getCellCssClass({ date, view, text }) {
                let cssClass = '';
                if (view === 'month') {
                    if (!date) {
                        cssClass = 'week-number';
                        text = getWeekNumber(this.lastDateOfWeek, 0).toString();
                    } 
                    else {
                        this.lastDateOfWeek = date;
                    }
                }
                return cssClass;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    let lastDateOfWeek;
    const currentValue = new Date(2000, 0, 1);

    const getWeekNumber(date, firstDayOfWeek) {
            // Implement your own week calculation logic
        }

    const getCellCssClass({ date, view, text }) {
        let cssClass = '';
        if (view === 'month') {
            if (!date) {
                cssClass = 'week-number';
                text = getWeekNumber(lastDateOfWeek, 0).toString();
            } 
            else {
                lastDateOfWeek = date;
            }
        }
        return cssClass;
    }

    const customCell = (cell) => {
        const { text, } = cell;
        const className = getCellCssClass(cell);
        return (
            <span className={className}>
                { text }
            </span>
        );
    }

    function App() {
        return (
            <Calendar
                value={currentValue}
                showWeekNumbers={true}
                cellRender={customCell}
            >
            </Calendar>
        );
    };

    export default App;

---