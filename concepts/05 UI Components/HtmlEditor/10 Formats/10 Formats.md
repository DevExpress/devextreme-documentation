The following tables list available formats and their values grouped into five categories: inline (or text), block, embedded, image, and table formats.

**Inline (or text) formats**

<table class="dx-table full-width">
 <tr>
    <th>Format Name</th>
    <th>Accepted Values</th>
    <th>Customization Type</th>
 </tr>
  <tr>
    <td>"background"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color" target="_blank">background-color</a> CSS property accepts.</td>
    <td>Modify</td>
 </tr>
 <tr>
    <td>"bold"</td>
    <td>true, false</td>
    <td>Extend</td>
 </tr>
 <tr>
    <td>"color"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank">color</a> CSS property accepts.</td>
    <td>Modify</td>
 </tr>
 <tr>
    <td>"font"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family" target="_blank">font-family</a> CSS property accepts.</td>
    <td>Modify</td>
 </tr>
 <tr>
    <td>"italic"</td>
    <td>true, false</td>
    <td>Extend</td>
 </tr>
 <tr>
    <td>"link"</td>
    <td>String <br/> or <br/> Object ({ href: String, text: String, target: Boolean })</td>
    <td>Extend</td>
 </tr>
 <tr>
    <td>"size"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size" target="_blank">font-size</a> CSS property accepts.</td>
    <td>Modify</td>
 </tr>
 <tr>
    <td>"strike"</td>
    <td>true, false</td>
    <td>Extend</td>
 </tr>
 <tr>
    <td>"script"</td>
    <td>"sub", "super", false</td>
    <td>Extend</td>
 </tr>
 <tr>
    <td>"underline"</td>
    <td>true, false</td>
    <td>Extend</td>
 </tr>
</table>

**Block formats**

<table class="dx-table full-width">
 <tr>
    <th>Format Name</th>
    <th>Accepted Values</th>
    <th>Customization Type</th>
 </tr>
  <tr>
    <td>"blockquote"</td>
    <td>true, false</td>
    <td>Extend</td>
 </tr>
 <tr>
    <td>"header"</td>
    <td>1, 2, 3, 4, 5, 6, false</td>
    <td>Extend</td>
 </tr>
 <tr>
    <td>"indent"</td>
    <td>"+1", "-1", false</td>
    <td>Modify</td>
 </tr>
 <tr>
    <td>"list"</td>
    <td>"ordered", "bullet", false</td>
    <td>Extend</td>
 </tr>
 <tr>
    <td>"align"</td>
    <td>"left", "right", "center", "justify", false</td>
    <td>Modify</td>
 </tr>
 <tr>
    <td>"code-block"</td>
    <td>true, false</td>
    <td>Extend</td>
 </tr>
</table>

**Embedded formats**

All the following formats are extendable:

<table class="dx-table full-width">
 <tr>
    <th>Format Name</th>
    <th>Value Types</th>
 </tr>
  <tr>
    <td>"extendedImage"</td>
    <td>String <br/> or <br/> Object ({ src: String, width: Number, height: Number, alt: String })</td>
 </tr>
 <tr>
    <td>"variable"</td>
    <td>Object ({ value: String, escapeChar: String | Array&lt;String&gt; })</td>
 </tr>
 <tr>
    <td>"mention"</td>
    <td>Object ({ marker: String, id: String | Number, value: String })</td>
 </tr>
</table>

**Image formats**

<table class="dx-table full-width">
 <tr>
    <th>Format Name</th>
    <th>Supports Pasting into HTML Editor</th>
    <th>Supports Drag and Drop from File Explorer</th>
 </tr>
  <tr>
    <td>*.png</td>
    <td>Yes</td>
    <td>Yes</td>
 </tr>
  <tr>
    <td>*.jpg</td>
    <td>Yes</td>
    <td>Yes</td>
 </tr>
  <tr>
    <td>*.gif</td>
    <td>Yes</td>
    <td>Yes</td>
 </tr>
  <tr>
    <td>*.webp</td>
    <td>Yes</td>
    <td>Yes</td>
 </tr>
  <tr>
    <td>*.bmp</td>
    <td>Yes</td>
    <td>Yes</td>
 </tr>
  <tr>
    <td>*.svg</td>
    <td>No</td>
    <td>Yes</td>
 </tr>
  <tr>
    <td>*.ico</td>
    <td>Yes</td>
    <td>No</td>
 </tr>
</table>

**Table formats**

The following formats apply only to the `<table>` element and can be modified (not extendable):

<table class="dx-table full-width">
 <tr>
    <th>Format Name</th>
    <th>Value Types</th>
 </tr>
  <tr>
    <td>"tableTextAlign"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align" target="_blank">text-align</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"tableWidth"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width" target="_blank">width</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"tableHeight"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/height" target="_blank">height</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"tableBackgroundColor"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color" target="_blank">background-color</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"tableBorder"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border" target="_blank">border</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"tableBorderColor"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-color" target="_blank">border-color</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"tableBorderWidth"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-width" target="_blank">border-width</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"tableBorderStyle"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-style" target="_blank">border-style</a> CSS property accepts.</td>
 </tr>
</table>

The following formats apply only to the `<th>` and `<td>` elements and can be modified (not extendable):

<table class="dx-table full-width">
 <tr>
    <th>Format Name</th>
    <th>Value Types</th>
 </tr>
 <tr>
    <td>"cellWidth"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width" target="_blank">width</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"cellHeight"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/height" target="_blank">height</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"cellBackgroundColor"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color" target="_blank">background-color</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"cellBorder"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border" target="_blank">border</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"cellBorderColor"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-color" target="_blank">border-color</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"cellBorderWidth"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-width" target="_blank">border-width</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"cellBorderStyle"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-style" target="_blank">border-style</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"cellVerticalAlign"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align" target="_blank">vertical-align</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"cellTextAlign"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align" target="_blank">text-align</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"cellPadding"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding" target="_blank">padding</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"cellPaddingLeft"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left" target="_blank">padding-left</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"cellPaddingRight"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right" target="_blank">padding-right</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"cellPaddingTop"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top" target="_blank">padding-top</a> CSS property accepts.</td>
 </tr>
 <tr>
    <td>"cellPaddingBottom"</td>
    <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom" target="_blank">padding-bottom</a> CSS property accepts.</td>
 </tr>
</table>

The formats are applied by toolbar items. Most formats have items attached to them out-of-the-box. Refer to [Predefined Items](/concepts/05%20UI%20Components/HtmlEditor/20%20Toolbar/00%20Predefined%20Items '/Documentation/Guide/UI_Components/HtmlEditor/Toolbar/Predefined_Items/') for a full list of toolbar items and the formats they apply.
