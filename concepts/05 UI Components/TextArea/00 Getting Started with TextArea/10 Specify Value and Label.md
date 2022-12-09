To set an initial TextArea value, use the [value](/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#value) property. You can also specify the [maxLength](/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#maxLength) property to limit the number of characters users can enter. Note that this property only limits the number of characters for users. Your code can specify text that exceeds the maximum character length, but the number of characters displayed to users will still be limited by this property setting.

Use the [placeholder](/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#placeholder) property to give users a hint about what they should type in the TextArea. You can also use the [label](/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#label) property for this purpose. To change the label appearance, set the [labelMode](/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#labelMode) property to one of the following values:

- *"static"*    
The component displays the label above the input field.

- *"floating"*    
The component uses the label as a placeholder, but when the editor gets focus, the label moves to the position above the input field.

- *"hidden"*    
The label is hidden.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#text-area").dxTextArea({ 
            value: longText,
            maxLength: 500,
            label: "Country"
        });
    });

    const longText = "Japan is a sovereign island nation in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland and stretches from the Sea of Okhotsk in the north to the East China Sea and China in the southwest. The Greater Tokyo Area is the most populous metropolitan area in the world.";

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-area
        [value]="longText"
        [maxLength]="500"
        label="Country"
    >
    </dx-text-area>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        longText = "Japan is a sovereign island nation in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland and stretches from the Sea of Okhotsk in the north to the East China Sea and China in the southwest. The Greater Tokyo Area is the most populous metropolitan area in the world.";
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTextArea
            :value="longText"
            :max-length="500"
            label="Country"
        />
    </template>

    <script>
        // ...
        export default {
            components: {
                DxTextArea
            },
            data() {
                return {
                    longText: "Japan is a sovereign island nation in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland and stretches from the Sea of Okhotsk in the north to the East China Sea and China in the southwest. The Greater Tokyo Area is the most populous metropolitan area in the world."
                };
            }
        }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const longText = "Japan is a sovereign island nation in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland and stretches from the Sea of Okhotsk in the north to the East China Sea and China in the southwest. The Greater Tokyo Area is the most populous metropolitan area in the world.";

    function App() {
        return (
            <TextArea 
                value={longText}
                maxLength={500}
                label="Country"
            />
        );
    }

    export default App;

---