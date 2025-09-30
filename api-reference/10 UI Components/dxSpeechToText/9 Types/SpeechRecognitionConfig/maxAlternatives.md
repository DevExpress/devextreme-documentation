---
id: SpeechRecognitionConfig.maxAlternatives
type: Number
---
---
##### shortDescription
Configures the SpeechRecognition [maxAlternatives](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/maxAlternatives) property.

---
The SpeechRecognition interface supports alternatives for recognized words. Set **maxAlternatives** to a number larger than 1 to return multiple [SpeechRecognitionAlternative](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative) objects in each [SpeechRecognitionResult](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult). Web Speech API sorts **SpeechRecognitionAlternative** objects by recognition [confidence](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative/confidence).