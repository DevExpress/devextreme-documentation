The following tables list available formats and their values grouped into three categories: inline (or text), block, and embedded formats.

**Inline (or text) formats**

<table class="dx-table full-width">
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

**Block formats**

<table class="dx-table full-width">
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

**Embedded formats**

<table class="dx-table full-width">
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

The formats are applied by toolbar items. Most formats have items attached to them out-of-the-box. Refer to [Predefined Items](/concepts/05%20Widgets/HtmlEditor/20%20Toolbar/00%20Predefined%20Items '/Documentation/Guide/Widgets/HtmlEditor/Toolbar/Predefined_Items/') for a full list of toolbar items and the formats they apply.
