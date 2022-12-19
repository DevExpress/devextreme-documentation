$(() => {
    $("#check-box").dxCheckBox({
        value: null,
        enableThreeStateBehavior: true,
        iconSize: 25,
        text: "Approve",
        hint: "Approve",
        onValueChanged: function (e) {
            if (e.value) {
                DevExpress.ui.notify("The CheckBox is checked", "success", 500);
            }
        },
    });
});
