If you do not specify the additional properties, only one panel can be in the expanded state at one moment. To change this, switch the [collapsible](/api-reference/10%20UI%20Components/dxAccordion/1%20Configuration/collapsible.md '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/#collapsible') and [multiple](/api-reference/10%20UI%20Components/dxAccordion/1%20Configuration/multiple.md '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/#multiple') properties to _true_. You can also change the duration of animation when panels open and close.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#accordion").dxAccordion({
            // ...
            collapsible: true,
            multiple: true,
            animationDuration: 450
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-accordion ...
        [collapsible]="true"
        [multiple]="true"
        animationDuration="450"
    >
    </dx-accordion>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxAccordion ...
            :collapsible="true"
            :multiple="true"
            animation-duration="450"
        /> 
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <Accordion ...
                collapsible={true}
                multiple={true}
                animationDuration="450"
            />
        ); 
    }

    export default App;

--- 