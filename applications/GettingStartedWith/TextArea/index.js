$(() => {
    $("#text-area").dxTextArea({
        value: longText,
        minHeight: 50,
        maxHeight: 300,
        autoResizeEnabled: true,
        maxLength: 500,
        valueChangeEvent: "keyup",
        onValueChanged() {
            DevExpress.ui.notify("The value has been changed");
        },
        label: "Country"
    });
});

const longText = "Japan is a sovereign island nation in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland and stretches from the Sea of Okhotsk in the north to the East China Sea and China in the southwest. The Greater Tokyo Area is the most populous metropolitan area in the world.";
