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
To implement a custom speech recognition engine, set **customSpeechRecognizer**.[enabled]({currentpath}/#enabled) to `true`. When you implement a custom speech recognizer, SpeechToText no longer does the following:

- Listen to user speech.
- Update the component state state. You must update the SpeechToText state manually through the **customSpeechRecognizer**.[isListening]({currentpath}/#isListening) property.
- Call the [onResult](/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#onResult) and [onError](Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#onError) handlers.