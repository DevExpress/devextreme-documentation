---
id: dxSpeechToText.Options.type
type: Enums.ButtonType | String
default: 'normal'
---
---
##### shortDescription
Specifies the SpeechToText button type.

---
DevExtreme supplies the following button types:

![Button Types](/images/UiWidgets/Button_Types.png) 

You can also specify your own button type and define its CSS rules as shown in the example:

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
