---
##### shortDescription
Allows you to export widgets using their SVG markup.

##### param(markup): string
The SVG markup of the widgets you need to export.

##### param(options): object
Export options. Can contain the following fields.

<div>
    <ul>
        <li>
            <b>fileName</b> - the name of the file to be saved.
        </li>
        <li>
            <b>format</b> - the format of the file to be saved.<br />
            Accepted Values: 'PNG' | 'PDF' | 'JPEG' | 'SVG' | 'GIF'
        </li>
        <li>
            <b>height</b> - the pixel-measured height of the SVG block.<br/>
            This field is <font color="red">required</font>.
        </li>
        <li>
            <b>width</b> - the pixel-measured width of the SVG block.<br/>
            This field is <font color="red">required</font>.
        </li>
        <li>
            <b>backgroundColor</b> - the color that will fill transparent regions.</br>
        </li>
        <li>
            <b>proxyUrl</b> - the URL of a server-side proxy required for export in IE9 and Safari on Mac OS.<br />For details, refer to the <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#proxyUrl">proxyUrl</a> option of any widget.
        </li>
    </ul>
</div>

---
#####See Also#####
- [svg()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/svg().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#svg') - returns the widget's SVG markup.
- [exportTo(fileName, format)](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/exportTo(fileName_format).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#exportTofileName_format') - exports a specific widget.
- [print()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/print().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#print') - prints a specific widget.