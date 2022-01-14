You can group data by category in Lookup. To implement this, we will use the data from the previous steps with the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) component that allows you to sort, filter, select, and group data.

Use the **DataSource**'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) property to specify the data field to group by and enable Lookup's [grouped](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#grouped) property to notify the component that the data source is grouped.

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

To customize the appearance of group titles, use [groupTemplate](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#groupTemplate).

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#lookup").dxLookup({
            // ... 
            groupTemplate: function (data, index, element) {
                let countInvisible = 0;
                for (let i = 0; i < data.items.length; i++) {
                    if (data.items[i].visible === false) {
                        countInvisible += 1;
                    }
                }
                return data.key + " (" + (data.items.length - countInvisible) + " tasks)";
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-lookup ...
        groupTemplate="listGroup">
        <!-- ... -->
        <div *dxTemplate="let data of 'listGroup'">
            {{ groupTemplate(data) }}
        </div>
    </dx-lookup>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        groupTemplate(data) {
            let countInvisible = 0;
            for (let i = 0; i < data.items.length; i++) {
                if (data.items[i].visible === false) {
                    countInvisible += 1;
                }
            }
            return data.key + " (" + (data.items.length - countInvisible) + " tasks)";
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxLookup ...
            group-template="group-list">
            <template #group-list="{ data }">
                {{ groupTemplate(data) }}
            </template>
        </DxLookup>
    </template>

    <script>
        // ...
        export default {
            // ...
            methods: {
                // ...
                groupTemplate(data) {
                    let countInvisible = 0;
                    for (let i = 0; i < data.items.length; i++) {
                        if (data.items[i].visible === false) {
                            countInvisible += 1;
                        }
                    }
                    return data.key + " (" + (data.items.length - countInvisible) + " tasks)";
                }
            }
        }
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    const renderListGroup = (data) => {
        let countInvisible = 0;
        for (let i = 0; i < data.items.length; i++) {
            if (data.items[i].visible === false) {
                countInvisible += 1;
            }
        }        
        return (
            <div>{ data.key + " (" + (data.items.length - countInvisible) + " tasks)" }</div>
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