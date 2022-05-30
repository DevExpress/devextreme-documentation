To implement the selection functionality, use the [onPointClick](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#onPointClick) function. Call a point's [isSelected()](/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/Methods/#isSelected) method to check whether a user selected it.

In this tutorial, when users can click on a point, the point is selected. When users click on the point again, it clears the selection.

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