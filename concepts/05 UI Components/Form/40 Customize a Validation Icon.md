To customize the validation icon, modify the `dx-texteditor-input-container` class. To shift the icon's position to the left, apply these CSS rules:

    <!--CSS-->
    .dx-texteditor.dx-invalid .dx-texteditor-input-container::after {
        left: 4px;
        right: 0;
    }

    .dx-texteditor.dx-invalid .dx-texteditor-input {
        padding-right: 0;
        padding-left: 34px;
    } 

[Examine CSS](/concepts/80%20Troubleshooting/00%20Basics/15%20Examine%20CSS.md '/Documentation/Guide/Troubleshooting/Basics/#Examine_CSS') if further customization is required.