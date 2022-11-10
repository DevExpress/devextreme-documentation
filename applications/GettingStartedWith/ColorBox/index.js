$(() => {
    $('#color-box').dxColorBox({
        label: "Pick a color",
        value: "#000000",
        editAlphaChannel: true,
        applyButtonText: "Show notification",
        showClearButton: true,
        onValueChanged(e) {
            const toastColor = e.value;
            if (toastColor) {
                DevExpress.ui.notify({
                    message: "The color has been changed",
                    onShowing(e) {
                        $(e.component.content()).css("background-color", toastColor);
                    }
                });
            }
        }
    });
});
