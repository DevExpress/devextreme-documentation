---
id: CustomSpeechRecognizer
module: ui/speech_to_text
export: CustomSpeechRecognizer
type: Object
generateTypeLink: 
---
---
##### shortDescription
Allows you to implement custom speech recognition engines.

---
If you want to integrate a custom speech recognition engine, set **customSpeechRecognizer**.[enabled](/api-reference/10%20UI%20Components/dxSpeechToText/9%20Types/CustomSpeechRecognizer/enabled.md '{currentpath}/#enabled') to `true`. When you implement a custom speech recognizer, SpeechToText no longer does the following:

- Listen to user speech.
- Update the component state. Set SpeechToText state manually using the **customSpeechRecognizer**.[isListening](/api-reference/10%20UI%20Components/dxSpeechToText/9%20Types/CustomSpeechRecognizer/isListening.md '{currentpath}/#isListening') property.
- Call the [onResult](/api-reference/10%20UI%20Components/dxSpeechToText/1%20Configuration/onResult.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#onResult') and [onError](/api-reference/10%20UI%20Components/dxSpeechToText/1%20Configuration/onError.md 'Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#onError') handlers.