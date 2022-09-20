If you do not specify additional properties, only one panel can be expanded at a time. To change this behavior, set the [collapsible](/api-reference/10%20UI%20Components/dxAccordion/1%20Configuration/collapsible.md '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/#collapsible') and [multiple](/api-reference/10%20UI%20Components/dxAccordion/1%20Configuration/multiple.md '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/#multiple') properties to **true**. You can also use the [animationDuration](/api-reference/10%20UI%20Components/dxAccordion/1%20Configuration/animationDuration.md '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/#animationDuration') property to change the duration of the panel expand and collapse animations.

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