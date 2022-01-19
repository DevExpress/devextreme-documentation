You can group data by category in Lookup. To implement this, we use data from the previous steps with the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') component that allows you to sort, filter, select, and group data.

Use the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') property to specify the data field to group by and enable Lookup's [grouped](/api-reference/10%20UI%20Components/dxLookup/1%20Configuration/grouped.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#grouped') property to notify the component that the data source is grouped.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#lookup").dxLookup({
            dataSource: new DevExpress.data.DataSource({ 
                // ...
                group: "Assignee"
            }),
            // ...
            grouped: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-lookup ...
        [grouped]="true">
    </dx-lookup>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        constructor(service: Service) {
            // ...
            this.dataSource = new DataSource({
                // ...
                group: "Assignee"
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxLookup ...
            :grouped="true"
        />
    </template>

    <script>
        // ...
        const dataSource = new DataSource({
            // ...
            group: "Assignee"
        });
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const dataSource = new DataSource({
        // ...
        group: "Assignee"
    });
    
    function App() {
        return (
            <Lookup ...
                grouped={true}
            />
        );
    }
    export default App;

---

To customize the appearance of group titles, use [groupTemplate](/api-reference/10%20UI%20Components/dxLookup/1%20Configuration/groupTemplate.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#groupTemplate').

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#lookup").dxLookup({
            // ... 
            groupTemplate: function (data, index, element) {
                return data.key + " (" + data.items.length + " tasks)";
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-lookup ...
        groupTemplate="listGroup">
        <!-- ... -->
        <div *dxTemplate="let data of 'listGroup'">
            {{ data.key + " (" + data.items.length + " tasks)" }}
        </div>
    </dx-lookup>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxLookup ...
            group-template="group-list">
            <template #group-list="{ data }">
                {{ data.key + " (" + data.items.length + " tasks)" }}
            </template>
        </DxLookup>
    </template>

    <script>
        // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    const renderListGroup = (data) => {        
        return (
            <div>{ data.key + " (" + data.items.length + " tasks)" }</div>
        );
    }
    
    function App() {
        return (
            <Lookup ...
                groupRender={renderListGroup}
            />
        );
    }
    export default App;

---