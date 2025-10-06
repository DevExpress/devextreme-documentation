---
id: dxSpeechToText.Options.customSpeechRecognizer
type: CustomSpeechRecognizer
inheritsType: CustomSpeechRecognizer
---
---
##### shortDescription
Allows you to implement custom speech recognition engines.

---
If you want to integrate a custom speech recognition engine, set **customSpeechRecognizer**.[enabled](/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/customSpeechRecognizer/#enabled) to `true`. When you implement a custom speech recognizer, SpeechToText no longer does the following:

- Listens to user speech.
- Updates the component state. Set the SpeechToText state using the **customSpeechRecognizer**.[isListening](/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/customSpeechRecognizer/#isListening) property.
- Calls the [onResult](/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#onResult) and [onError](/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#onError) handlers.