$(() => {
    $("#switch").dxSwitch({
        value: false,
        width: 80,
        rtlEnabled: true,
        hint: "Click to switch on",
        onValueChanged(e) {
            const message_text= e.value ? "Click to switch off" : "Click to switch on";
            e.component.option("hint", message_text);
            
            const state_label = e.value ? "ON" : "OFF";
            DevExpress.ui.notify(`The component is switched ${state_label}`); 
        }
    });
});
