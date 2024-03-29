Use the [onPointClick](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#onPointClick') function to implement the selection functionality. Call a point's [isSelected()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isSelected().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/Methods/#isSelected') method to check whether a user selected it.

In this tutorial, when a user clicks on a point, the point is selected. When the user clicks on the point again, the component clears the selection.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pie-chart").dxPieChart({
            // ...
            onPointClick: function (e) {
                const point = e.target;
                if (point.isSelected()) {
                    point.clearSelection();
                } else {
                    point.select();
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pie-chart ...
        (onPointClick)="onPointClick($event)"
    >
        <!-- ... -->
    </dx-pie-chart>

    <!-- tab: app.component.ts -->
    // ...

    export class AppComponent {
        // ...
        onPointClick (e: any) {
            const point = e.target;
            if (point.isSelected()) {
                point.clearSelection();
            } else {
                point.select();
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPieChart ...
            @point-click="onPointClick"
        >
            <!-- ... -->
        </DxPieChart> 
    </template>

    <script>
    // ...

    export default {
        components: {
            // ...
        },
        data() {
            return {
                // ...
            }
        },
        methods: {    
            // ...
            onPointClick (e) {
                const point = e.target;
                if (point.isSelected()) {
                    point.clearSelection();
                } else {
                    point.select();
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    const onPointClick = (e) => {
        const point = e.target;
        if (point.isSelected()) {
            point.clearSelection();
        } else {
            point.select();
        }
    }

    function App() {
        return (
            <PieChart ...
                onPointClick={onPointClick}
            >
                <!-- ... -->
                <Tooltip
                    enabled={true}
                    contentTemplate={contentTemplate}
                >
                </Tooltip>
            </PieChart>
        ); 
    }

    export default App;

--- 