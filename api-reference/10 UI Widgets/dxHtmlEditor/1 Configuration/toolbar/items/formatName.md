---
type: String
---
---
##### shortDescription
Specifies the built-in control that this object customizes or a format with multiple choices.

---
To customize a built-in control, assign its name to this option and specify the other control options. See the full list of available controls in the [items](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/toolbar/items '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/') description.

This option also accepts names of formats with multiple choices. In addition to the format name, specify [formatValues](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/toolbar/items/formatValues.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatValues'). On the toolbar, such formats are represented by [SelectBox](/concepts/05%20Widgets/SelectBox/00%20Overview.md '/Documentation/Guide/Widgets/SelectBox/Overview/') widgets whose [options](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/') you can specify in the [options](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/"
}

In the following code, the `header` and `size` formats are configured as described in the previous paragraph:


---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [ // ...
                {
                    formatName: "header",
                    formatValues: [1, 2, 3, false],
                    options: {
                        width: 150
                    }
                }, {
                    formatName: "size",
                    formatValues: ["11px", "14px", "16px"]
                }]
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        items: any = [ // ...
        {
            formatName: "header",
            formatValues: [1, 2, 3, false],
            options: {
                width: 150
            }
        }, {
            formatName: "size",
            formatValues: ["11px", "14px", "16px"]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar [items]="items"></dxo-toolbar>
    </dx-html-editor>

---

The following tables list available formats and their values categorized in three groups: inline (or text), block, and embedded formats.

<table id="formatName/formats">
 <tr style="font-size: 14px;">
  <td><b>Inline (or text) formats</b></td>
  <td style="padding-left: 20px;"><b>Block Formats</b></td></tr>
 <tr>
  <td>

<div class="simple-table">
<table style="text-align:center">
 <tr>
    <th>Format Name</th>
    <th>Accepted Values</th>
 </tr>
  <tr>
    <td>background</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color">background-color</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>bold</td>
    <td>true, false</td>
 </tr>
 <tr>
    <td>color</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">color</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>font</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family">font-family</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>italic</td>
    <td>true, false</td>
 </tr>
 <tr>
    <td>link</td>
    <td>String <br/> or <br/> Object ({ href: String, text: String, target: Boolean })</td>
 </tr>
 <tr>
    <td>size</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">font-size</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>strike</td>
    <td>true, false</td>
 </tr>
 <tr>
    <td>script</td>
    <td>"sub", "super", false</td>
 </tr>
 <tr>
    <td>underline</td>
    <td>true, false</td>
 </tr>
</table>
</div>

</td>
<td style="padding-left: 20px; vertical-align: top">

<div class="simple-table">
<table style="text-align:center">
 <tr>
    <th>Format Name</th>
    <th>Accepted Values</th>
 </tr>
  <tr>
    <td>blockquote</td>
    <td>true, false</td>
 </tr>
 <tr>
    <td>header</td>
    <td>1, 2, 3, 4, 5, 6, false</td>
 </tr>
 <tr>
    <td>indent</td>
    <td>"+1", "-1", false</td>
 </tr>
 <tr>
    <td>list</td>
    <td>"ordered", "bullet", false</td>
 </tr>
 <tr>
    <td>align</td>
    <td>"left", "right", "center", "justify", false</td>
 </tr>
 <tr>
    <td>code-block</td>
    <td>true, false</td>
 </tr>
</table>
</div>

  </td>
 </tr>
</table>

**Embedded formats**

<div class="simple-table">
<table style="text-align:center">
 <tr>
    <th>Format Name</th>
    <th>Value Types</th>
 </tr>
  <tr>
    <td>extendedImage</td>
    <td>String <br/> or <br/> Object ({ src: String, width: Number, height: Number, alt: String })</td>
 </tr>
 <tr>
    <td>variable</td>
    <td>Object {{ value: String, escapeChar: String | Array&lt;String&gt; }}</td>
 </tr>
</table>
</div>

#####See Also#####
- [widget](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/toolbar/items/widget.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#widget')