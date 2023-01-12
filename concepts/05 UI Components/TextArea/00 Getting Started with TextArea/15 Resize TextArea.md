If the size of the UI component should be fixed, specify the [width](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#width') and [height](/api-reference/10%20UI%20Components/dxTextArea/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#height') properties.

The UI component's height can also adapt to UI component contents. In this case, set the [autoResizeEnabled](/api-reference/10%20UI%20Components/dxTextArea/1%20Configuration/autoResizeEnabled.md '/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#autoResizeEnabled') property to `true`. To specify the minimum and maximum height for the adaptive TextArea, use the [minHeight](/api-reference/10%20UI%20Components/dxTextArea/1%20Configuration/minHeight.md '/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#minHeight') and [maxHeight](/api-reference/10%20UI%20Components/dxTextArea/1%20Configuration/maxHeight.md '/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#maxHeight') properties.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#text-area").dxTextArea({ 
            // ...
            minHeight: 50,
            maxHeight: 300,
            autoResizeEnabled: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-area ...
        [minHeight]="50"
        [maxHeight]="300"
        [autoResizeEnabled]="true"
    >
    </dx-text-area>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTextArea ...
            :min-height="50"
            :max-height="300"
            :auto-resize-enabled="true"
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
            <TextArea ...
                minHeight={50}
                maxHeight={300}
                autoResizeEnabled={true}
            />
        );
    }

    export default App;

---