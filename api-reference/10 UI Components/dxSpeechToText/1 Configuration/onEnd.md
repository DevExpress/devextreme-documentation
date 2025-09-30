---
id: dxSpeechToText.Options.onEnd
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed when SpeechToText transitions from the "listening" state to the default state.

##### param(e): ui/speech_to_text:EndEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
[note] The component does not call this handler if you implement a [custom speech recognition engine](/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/customSpeechRecognizer/).