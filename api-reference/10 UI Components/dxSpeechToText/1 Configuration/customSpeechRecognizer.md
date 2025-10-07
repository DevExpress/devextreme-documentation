---
id: dxSpeechToText.Options.customSpeechRecognizer
type: CustomSpeechRecognizer
inheritsType: CustomSpeechRecognizer
---
---
##### shortDescription
Allows you to implement custom speech recognition engines.

---
If you want to integrate a custom speech recognition engine, set **customSpeechRecognizer**.[enabled](/api-reference/10%20UI%20Components/dxSpeechToText/9%20Types/CustomSpeechRecognizer/enabled.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/customSpeechRecognizer/#enabled') to `true`. When you implement a custom speech recognizer, SpeechToText no longer does the following:

- Listens to user speech.
- Updates the component state. Set the SpeechToText state using the **customSpeechRecognizer**.[isListening](/api-reference/10%20UI%20Components/dxSpeechToText/9%20Types/CustomSpeechRecognizer/isListening.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/customSpeechRecognizer/#isListening') property.
- Calls the [onResult](/api-reference/10%20UI%20Components/dxSpeechToText/1%20Configuration/onResult.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#onResult') and [onError](/api-reference/10%20UI%20Components/dxSpeechToText/1%20Configuration/onError.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#onError') handlers.