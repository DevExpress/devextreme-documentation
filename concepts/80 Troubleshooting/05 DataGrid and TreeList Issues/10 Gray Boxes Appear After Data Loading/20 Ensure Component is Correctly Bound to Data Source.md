Check if an error occurs during data loading (see [Check Console for Warnings or Errors](/concepts/80%20Troubleshooting/00%20Basics/05%20Check%20Console%20for%20Warnings%20or%20Errors.md '/Documentation/Guide/Troubleshooting/Basics/#Check_Console_for_Warnings_or_Errors')). Then, check if the component loads correct data (see [Check Requests in the Network Tab](/concepts/80%20Troubleshooting/00%20Basics/10%20Check%20Requests%20in%20the%20Network%20Tab.md '/Documentation/Guide/Troubleshooting/Basics/#Check_Requests_in_the_Network_Tab')). If you expect raw data, an array of records is sufficient. If you enable [remote operations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/'), check the required data structure in the following topic: [Server-Side Data Processing](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources/2%20Load%20Data/5%20Server-Side%20Data%20Processing.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/#Load_Data/Server-Side_Data_Processing').

Some data shaping operations may make data inconsistent. For instance, in the following code snippet, the [postProcess](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/postProcess.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#postProcess') function returns the number of data rows that do not match the [total count parameter](/api-reference/30%20Data%20Layer/CustomStore/LoadOptions/requireTotalCount.md '/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#requireTotalCount'). As a result, gray boxes appear:

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

To resolve the issue, remove the **postProcess** function or change it to return an array with the same number of items as the total count parameter. For more information about data filtering, refer to the following article: [DataGrid Filtering API](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching/6%20API '/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/#API').