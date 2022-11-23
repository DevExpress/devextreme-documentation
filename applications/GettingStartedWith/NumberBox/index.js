$(() => {
    $("#number-box").dxNumberBox({
        label: "Enter a sum in dollars",
        labelMode: "floating",
        value: 261991,
        format: "$ #,##0.##",
        min: 0,
        max: 1000000,
        step: 5,
        showSpinButtons: true,
        showClearButton: true,
        onValueChanged(e) {
            if (e.value) {
                DevExpress.ui.notify({
                    message: "The sum is $" + e.value
                });
            }
        }
    });
});
