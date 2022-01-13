Pagination allows Lookup to *render* items in batches. When data is remote, the component can also *load* items in batches if the server can partition data. Follow the steps below to enable this functionality:

1. Set the DataSource's [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) property to **true**.

2. Use the DataSource's [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) property to specify the number of visible items on one page. If you group data (see the topic before), the page size equals the amount of groups.

If the number of items does not fit in the Lookup size, the scrolling bar appears. You can load items by parts on the "Next" button click.

To do this, set the Lookup's [pageLoadMode](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#pageLoadMode) property to "nextButton". Additionally, specify the [nextButtonText](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#nextButtonText) property to rename the "Next" button.

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
