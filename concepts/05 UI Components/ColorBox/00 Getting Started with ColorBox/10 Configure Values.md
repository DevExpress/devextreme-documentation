The ColorBox accepts colors in hexadecimal (_"#FF0000"_), RGB (_"rgb(255, 0, 0)"_) and RGBA (_"rgba(255, 0, 0, 1)"_) formats, as well as <a href="http://www.w3schools.com/cssref/css_colors.asp" target="_blank">color names</a>. When users select a color from the drop-down editor, the textual representation of the selected color is hexadecimal.

To allow users to control the transparency of the selected color, enable the [editAlphaChannel](/api-reference/10%20UI%20Components/dxColorBox/1%20Configuration/editAlphaChannel.md '/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/#editAlphaChannel') property. This setting adds a slider that regulates transparency to the drop-down editor, and changes the textual representation of the selected color from hexadecimal to RGBA.

To specify the initial picked color, use the [value](/Documentation/ApiReference/UI_Components/dxColorBox/Configuration/#value) property.

The following code specifies the initial color and enables transparency: