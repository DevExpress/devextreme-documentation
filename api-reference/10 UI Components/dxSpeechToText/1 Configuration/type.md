---
id: dxSpeechToText.Options.type
type: Enums.ButtonType | String
default: 'normal'
---
---
##### shortDescription
Specifies the SpeechToText button type.

---
The following image demonstrates available SpeechToText types (arranged vertically) and [styling modes](/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#stylingMode) (arranged horizontally):

<img src="/images/SpeechToText/speechtotext-type-stylingmode.png" alt="A grid of DevExtreme SpeechToText components which demonstrate available SpeechToText types and styling modes." style="border-radius: 16px; width: 800px;"></img>

You can also create a SpeechToText type and define custom CSS rules:

---
##### jQuery

    <!--tab: index.js-->
    $(function() {
        $("#speech-to-text").dxSpeechToText({
            // ...
            type: "warning"
        });
    });

    <!--tab: index.css-->
    .dx-button.dx-button-warning {
        background-color: #ffc107;
    }

##### Angular

    <!--tab: app.component.html-->
    <dx-speech-to-text ...
        type="warning"
    ></dx-speech-to-text>

    <!--tab: app.component.css-->
    .dx-button.dx-button-warning {
        background-color: #ffc107;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSpeechToText ...
            type="warning"
        />
    </template>

    <script>
        // ...
    </script>

    <style>
        .dx-button.dx-button-warning {
            background-color: #ffc107;
        }
    </style>

##### React

    <!-- tab: App.tsx -->
    function App() {
        return (
            <SpeechToText ...
                type="warning" 
            />
        );
    };    

    <!--tab: index.css-->
    .dx-button.dx-button-warning {
        background-color: #ffc107;
    }

---
