---
##### jQuery

To synchronize ProgressBar with DataGrid, define an `updateProgress` function. This function checks completed tasks and updates the ProgressBar value using the [option](/api-reference/10%20UI%20Components/Component/3%20Methods/option().md '/Documentation/ApiReference/UI_Components/dxProgressBar/Methods/#option') method. Use this function to handle the following events: [onRowUpdated](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowUpdated.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowUpdated'), [onRowInserted](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowInserted.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowInserted'), and [onRowRemoved](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowRemoved.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowRemoved').

    <!-- tab: index.js -->
    $(() => {
        $("#task-grid").dxDataGrid({
            // ...
            onRowUpdated: updateProgress,
            onRowInserted: updateProgress,
            onRowRemoved: updateProgress
        });

        function updateProgress() {
            const all = tasks.length;
            const completed = tasks.filter((t) => t.done).length;
            progress.option("value", Math.round((completed / all) * 100));
        }
    });

##### Angular

To synchronize ProgressBar with DataGrid, define an `updateProgress` function. This function checks completed tasks and updates the ProgressBar value using the `progressValue` variable.

    <!-- tab: app.component.ts -->
    export class AppComponent {
        // ...
        updateProgress() {
            const all = this.tasks.length;
            const completed = this.tasks.filter((t) => t.done).length;
            this.progressValue = Math.round((completed / all) * 100);
        };
    }

Use this function to handle the following DataGrid events: [onRowUpdated](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowUpdated.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowUpdated'), [onRowInserted](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowInserted.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowInserted'), and [onRowRemoved](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowRemoved.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowRemoved').

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        (onRowUpdated)="updateProgress($event)"
        (onRowInserted)="updateProgress($event)"
        (onRowRemoved)="updateProgress($event)"
    ></dx-data-grid>

##### Vue

To synchronize ProgressBar with DataGrid, define an `updateProgress` function. This function checks completed tasks and updates the ProgressBar value using the `progressValue` variable. Use this function to handle the following DataGrid events: [onRowUpdated](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowUpdated.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowUpdated'), [onRowInserted](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowInserted.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowInserted'), and [onRowRemoved](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowRemoved.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowRemoved').

        <!-- tab: App.vue -->
        <template>
            <div id="dashboard">
                <DxProgressBar ... />
                <DxDataGrid ...
                    @row-updated="updateProgress"
                    @row-inserted="updateProgress"
                    @row-removed="updateProgress"
                >
                </DxDataGrid>
            </div>
        </template>
        <script setup lang="ts">
        //...
        function updateProgress() {
            const all = tasks.length;
            const completed = tasks.filter((t) => t.done).length;
            progressValue.value = Math.round((completed / all) * 100);
        };
        </script>

##### React

To synchronize ProgressBar with DataGrid, define an `updateProgress` function. This function checks completed tasks and updates the ProgressBar value using the `progressValue` variable. Use this function to handle the following DataGrid events: [onRowUpdated](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowUpdated.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowUpdated'), [onRowInserted](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowInserted.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowInserted'), and [onRowRemoved](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowRemoved.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowRemoved').

    <!-- tab: App.tsx -->
    function App(): JSX.Element {
        const [progressValue, setProgressValue] = useState(50);
        function updateProgress() {
            const all = tasks.length;
            const completed = tasks.filter((t) => t.done).length;
            setProgressValue(Math.round((completed / all) * 100));
        };
        return(
            <div id="dashboard">
                <ProgressBar ... />
                <DataGrid ...
                    onRowUpdated={updateProgress}
                    onRowInserted={updateProgress}
                    onRowRemoved={updateProgress}
                >
                </DataGrid>
            </div>
        );
    }

    export default App;

---
