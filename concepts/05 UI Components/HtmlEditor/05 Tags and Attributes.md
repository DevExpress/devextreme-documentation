The HTML Editor supports the following HTML tags and attributes.

### HTML Tags

<table class="dx-table full-width">
   <tr>
      <th>Element Type</th>
      <th>Supported Tags</th>
   </tr>
   <tr>
      <td>Inline Tags</td>
      <td>&lt;a&gt;, &lt;b&gt;, &lt;br&gt;, &lt;code&gt;, &lt;em&gt;, &lt;i&gt;, &lt;s&gt;, &lt;span&gt;, &lt;strike&gt;, &lt;strong&gt;, &lt;sub&gt;, &lt;sup&gt;, &lt;table&gt;, &lt;tbody&gt;, &lt;u&gt;</td>
   </tr>
      <tr>
      <td>Block Tags</td>
      <td>&lt;h1&gt; – &lt;h6&gt;, &lt;blockquote&gt;, &lt;div&gt;, &lt;ol&gt;, &lt;li&gt;, &lt;ul&gt;, &lt;p&gt;, &lt;pre&gt;, &lt;thead&gt;, &lt;td&gt;, &lt;th&gt;, &lt;tr&gt;</td>
   </tr>
   <tr>
      <td>Images</td>
      <td>&lt;img&gt;</td>
   </tr>
</table>

[note]

When HTML Editor loads markup (specified in [value](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#value')), the component merges the following elements:

   - All consecutive tables.
   - Consecutive inline tags that match and contain identical attributes:

         <!-- from -->
         <a href="/">Hello</a><a href="/">World</a>
         
         <!-- to -->
         <a href="/">HelloWorld</a>

To avoid this behavior, separate these elements with tags such as `<br>`.

[/note]

### Attributes

<table class="multicolumn-list">
   <tr>
      <td>
         <ul>
            <li>
               allowfullscreen
            </li>
            <li>
               alt
            </li>
            <li>
               class
            </li>
            <li>
               data-*
            </li>
            <li>
               frameborder
            </li>
         </ul>
      </td>
      <td>
         <ul>
            <li>
               height
            </li>
            <li>
               href
            </li>
            <li>
               rel
            </li>
            <li>
               spellcheck
            </li>
            <li>
               src
            </li>
         </ul>
      </td>
      <td>
         <ul>
            <li>
               style
            </li>
            <li>
               target
            </li>
            <li>
               width
            </li>
         </ul>
      </td>
   </tr>
</table>

[note] The mentioned attributes are generated automatically. If you pass custom values such as custom classes, the HTML Editor may not properly process these attributes.