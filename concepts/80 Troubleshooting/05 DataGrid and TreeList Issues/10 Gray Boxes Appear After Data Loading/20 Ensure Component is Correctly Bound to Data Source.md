Check if an error occurs during data loading (see [Check Console for Warnings or Errors](/Documentation/Guide/Troubleshooting/Basics/#Check_Console_for_Warnings_or_Errors)). Then, check if the component loads correct data (see [Check Requests in the Network Tab](/Documentation/Guide/Troubleshooting/Basics/#Check_Requests_in_the_Network_Tab)). If you expect raw data, an array of records is sufficient. If you enable [remote operations](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/), check the required data structure in the following topic: [Server-Side Data Processing](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/#Load_Data/Server-Side_Data_Processing).

Some data shaping operations may make data inconsistent. For instance, in the following code snippet, the [postProcess](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#postProcess) function returns the number of data rows that do not match the [total count parameter](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#requireTotalCount). As a result, gray boxes appear:

---
##### jQuery

    <!-- tab: index.js -->
    const dataSource = new DevExpress.data.DataSource({
        store: myStore,
        postProcess (data) {
            let filteredData = data.filter(condition);
            return filteredData;
        }
    });

##### Angular

    <!-- tab: app.component.ts -->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                store: myStore,
                postProcess (data) {
                    let filteredData = data.filter(condition);
                    return filteredData;
                }
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        store: myStore,
        postProcess (data) {
            let filteredData = data.filter(condition);
            return filteredData;
        }
    });

    export default {
        // ...
        data() {
            return {
                ds
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import DataSource from 'devextreme/data/data_source';

    const ds = new DataSource({
        store: myStore,
        postProcess (data) {
            let filteredData = data.filter(condition);
            return filteredData;
        }
    });

    function App() {
        // ...
    }
    export default App;

---

To resolve the issue, remove the **postProcess** function or change it to return an array with the same number of items as the total count parameter. For more information about data filtering, refer to the following article: [DataGrid Filtering API](/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/#API).