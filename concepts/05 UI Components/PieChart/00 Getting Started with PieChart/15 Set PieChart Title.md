Use the [title](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/title.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/title/') property to specify and configure the chart's title.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pie-chart").dxPieChart({
            // ...
            title: "Top-5 Countries by Number of Billionaires"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pie-chart ...
        title="Top-5 Countries by Number of Billionaires"
    >
        <!-- ... -->
    </dx-pie-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPieChart ...
            title="Top-5 Countries by Number of Billionaires"
        >
            <!-- ... -->
        </DxPieChart> 
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <PieChart ...
                title="Top-5 Countries by Number of Billionaires"
            >
                <!-- ... -->
            </PieChart>
        ); 
    }

    export default App;

--- 

#####See Also#####
- [Title and Subtitle](/concepts/05%20UI%20Components/PieChart/58%20Title%20and%20Subtitle.md '/Documentation/Guide/UI_Components/PieChart/Title_and_Subtitle/')