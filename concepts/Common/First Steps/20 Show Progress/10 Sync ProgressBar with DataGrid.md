---
##### jQuery

To synchronize ProgressBar with DataGrid, define an `updateProgress` function. This function checks completed tasks and updates the ProgressBar value using the [option](/Documentation/ApiReference/UI_Components/dxProgressBar/Methods/#option) method. To call this function whenever a row updates, inserts, or deletes, assign it to the DataGrid event handlers: [onRowUpdated](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowUpdated), [onRowInserted](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowInserted), and [onRowRemoved](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowRemoved).

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
            this.progressValue = Math.round((completed / all) * 100));
        };
    }

To call this function whenever a row updates, inserts, or deletes, assign it to the DataGrid event handlers: [onRowUpdated](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowUpdated), [onRowInserted](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowInserted), and [onRowRemoved](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowRemoved).

    <!-- tab: app.component.html -->
    <dx-progress-bar ... ></dx-progress-bar>
    <dx-data-grid ...
        (onRowUpdated)="updateProgress($event)"
        (onRowInserted)="updateProgress($event)"
        (onRowRemoved)="updateProgress($event)"
    ></dx-data-grid>

##### Vue

To synchronize ProgressBar with DataGrid, define an `updateProgress` function. This function checks completed tasks and updates the ProgressBar value using the `progressValue` variable. To call this function whenever a row updates, inserts, or deletes, assign it to the DataGrid event handlers: [onRowUpdated](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowUpdated), [onRowInserted](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowInserted), and [onRowRemoved](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowRemoved).

        <!-- tab: App.vue -->
        <template>
            <DxProgressBar ... />
            <DxDataGrid ...
                @row-updated="updateProgress"
                @row-inserted="updateProgress"
                @row-removed="updateProgress"
            >
            </DxDataGrid>
        </template>
        <script setup>
        //...
        function updateProgress() {
            const all = tasks.length;
            const completed = tasks.filter((t) => t.done).length;
            progressValue.value = Math.round((completed / all) * 100);
        };
        </script>

##### React

To synchronize ProgressBar with DataGrid, define an `updateProgress` function. This function checks completed tasks and updates the ProgressBar value using the `progressValue` variable. To call this function whenever a row updates, inserts, or deletes, assign it to the DataGrid event handlers: [onRowUpdated](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowUpdated), [onRowInserted](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowInserted), and [onRowRemoved](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowRemoved).

    <!-- tab: App.js -->
    const App = () => {
        const [progressValue, setProgressValue] = useState(50);
        function updateProgress() {
            const all = tasks.length;
            const completed = tasks.filter((t) => t.done).length;
            setProgressValue(Math.round((completed / all) * 100));
        };
        return(
            <>
                <ProgressBar ... />
                <DataGrid ...
                    onRowUpdated={updateProgress}
                    onRowInserted={updateProgress}
                    onRowRemoved={updateProgress}
                >
                </DataGrid>
            </>
        );
    }

    export default App;

---