If the number of items does not fit in the Lookup size, the scrolling bar appears. You can load items by parts on the "next" button click. Follow the steps below to enable this functionality:

1. Set the Lookup's [pageLoadMode](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#pageLoadMode) property to "nextButton".

2. Set the DataSource's [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) property to **true**.

3. Use the DataSource's [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) property to specify the number of visible items.

Additionally, specify the [nextButtonText](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#nextButtonText) property to rename the "next" button.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#lookup").dxLookup({
            dataSource: new DevExpress.data.DataSource({ 
                // ...
                paginate: true,
                pageSize: 2
            }),
            // ...
            pageLoadMode: "nextButton",
            nextButtonText: "More"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-lookup ...
        pageLoadMode="nextButton"
        nextButtonText="More">
    </dx-lookup>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        constructor(service: Service) {
            // ...
            this.dataSource = new DataSource({
                // ...
                paginate: true,
                pageSize: 2
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxLookup ...
            page-load-mode="nextButton"
            next-button-text="More"
        />
    </template>

    <script>
        // ...
        const dataSource = new DataSource({
            // ...
            paginate: true,
            pageSize: 2
        });
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const dataSource = new DataSource({
        // ...
        paginate: true,
        pageSize: 2
    });
    
    function App() {
        return (
            <Lookup ...
                pageLoadMode="nextButton"
                nextButtonText="More"
            />
        );
    }
    export default App;

---
