$(() => {
  const textArea = $('#textarea-container').dxTextArea({
    height: 160,
    width: 320,
    placeholder: 'Transcribed text will appear here...',
  }).dxTextArea('instance');

  $('#speechtotext-container').dxSpeechToText({
    speechRecognitionConfig: {
      continuous: true,
    },
    onResult(e) {
      const resultText = Object.values(e.event.results)
        .map((resultItem) => resultItem[0].transcript)
        .join(' ');

      textArea.option('value', resultText);
    },
    onError(e) {
      if (e.event.error === 'not-allowed') {
        DevExpress.ui.notify('Microphone access denied. Please grant microphone permissions and try again.', 'error', 5000);
      } else {
        DevExpress.ui.notify(`An error occurred during speech recognition: ${e.event.error}`, 'error', 5000);
      }
    },
  });
});
