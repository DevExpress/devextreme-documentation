You can group data by category in the Lookup. To implement this, we will use the data from the previous steps with the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) component that allows you to sort, filter, select, and group data.

To group data, specify the data field to group by the **DataSource**'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) property and set the Lookup's [grouped](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#grouped) property to **true**.

If the number of items doesn't fit in the Lookup size, the scrolling bar appears. You can load items by parts on the "next" button click. Follow the steps below to enable this functionality:

1. Set the Lookup's [pageLoadMode](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#pageLoadMode) property to "nextButton".

2. Set the DataSource's [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) property to **true**.

3. Use the DataSource's [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) property to specify the number of visible items.

Additionally, specify the [nextButtonText](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#nextButtonText) property to rename the "next" button.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            dataSource: new DevExpress.data.DataSource({ 
                // ...
                group: "Assigned",
                paginate: true,
                pageSize: 2
            }),
            // ...
            grouped: true,
            pageLoadMode: "nextButton",
            nextButtonText: "More"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [grouped]="true"
        pageLoadMode="nextButton"
        nextButtonText="More">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        constructor(service: Service) {
            // ...
            this.dataSource = new DataSource({
                // ...
                group: "Assigned",
                paginate: true,
                pageSize: 2
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :grouped="true"
            page-load-mode="nextButton"
            next-button-text="More"
        />
    </template>

    <script>
        // ...
        const dataSource = new DataSource({
            // ...
            group: "Assigned",
            paginate: true,
            pageSize: 2
        });
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const dataSource = new DataSource({
        // ...
        group: "Assigned",
        paginate: true,
        pageSize: 2
    });
    
    function App() {
        return (
            <{WidgetName} ...
                grouped="true"
                pageLoadMode="nextButton"
                nextButtonText="More"
            />
        );
    }
    export default App;

---
