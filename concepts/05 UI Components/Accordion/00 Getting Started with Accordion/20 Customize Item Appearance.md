To customize panel appearance, use the [itemTemplate](/api-reference/10%20UI%20Components/dxAccordion/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/#itemTemplate') for panel content and the [itemTitleTemplate](/api-reference/10%20UI%20Components/dxAccordion/1%20Configuration/itemTitleTemplate.md '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/#itemTitleTemplate') for the panel's title.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#accordion").dxAccordion({
            // ...
            itemTitleTemplate: function (data) {
                return data.FirstName + " " + data.LastName;
            },
            itemTemplate: function (data) {
                return data.Position + " from " + data.State;
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-accordion ...
        <div *dxTemplate="let data of 'title'">
            {{ data.FirstName + " " + data.LastName }}
        </div>
        <div *dxTemplate="let data of 'item'">
            {{ data.Position + " from " + data.State }}
        </div>
    >
    </dx-accordion>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxAccordion ...
        >
            <template #title="{ data }">
                {{ data.FirstName + " " + data.LastName }}
            </template>
            <template #item="{ data }">
                {{ data.Position + " from " + data.State }}
            </template>
        </DxAccordion> 
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const customTitle = (data) => {
        return data.FirstName + " " + data.LastName;
    }
    const customItem = (data) => {
        return data.Position + " from " + data.State;
    }

    function App() {
        return (
            <Accordion ...
                itemTitleRender={customTitle}
                itemRender={customItem}
            />
        ); 
    }

    export default App;

--- 