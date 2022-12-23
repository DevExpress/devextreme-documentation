$(() => {
    $("#switch").dxSwitch({
        value: false,
        width: 80,
        rtlEnabled: true,
        hint: "Click to switch on",
        onValueChanged(e) {
            const messageText= e.value ? "Click to switch off" : "Click to switch on";
            e.component.option("hint", messageText);
            
            const stateLabel = e.value ? "ON" : "OFF";
            DevExpress.ui.notify(`The component is switched ${stateLabel}`); 
        }
    });
});
