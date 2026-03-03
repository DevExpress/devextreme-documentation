---
id: dxChat.Options.speechToTextEnabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the Speech-to-Text feature is enabled.

---
This option displays a microphone button in the Chat input field. Users can click this button to dictate their messages.

The Speech-to-Text feature uses the standard browser [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) and is only available in browsers that support it. To use a custom speech recognition engine, define `customSpeechRecognizer` in the [speechToTextOptions](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#speechToTextOptions) object.

Use `speechToTextOptions` to configure the feature's behavior and appearance.