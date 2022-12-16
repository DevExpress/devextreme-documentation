To display a column with week numbers, assign `true` to the [showWeekNumbers](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/showWeekNumbers.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#showWeekNumbers') property. The default week number calculation rule depends on the locale. Use the [weekNumberRule](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/weekNumberRule.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#weekNumberRule') setting to specify another week numeration rule.

The following code enables week number column and adds a *'firstDay'* week number rule. This rule states that week numeration starts from the first week that contains January 1.

---
##### jQuery

    <!--tab: index.js-->
    $(function() {
        $("#calendar").dxCalendar({
            // ...
            showWeekNumbers: true,
            weekNumberRule: "firstDay"
        });
    });

##### Angular

    <!--tab: app.component.html-->
    <dx-calendar ...
        [showWeekNumbers]="true"
        weekNumberRule="firstDay"
    >
    </dx-calendar>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar ...
            :show-week-numbers="true"
            week-number-rule="firstDay"
        >
        </DxCalendar>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <Calendar ...
                showWeekNumbers={true}
                weekNumberRule="firstDay"
            >
            </Calendar>
        );
    }

    export default App;

---
