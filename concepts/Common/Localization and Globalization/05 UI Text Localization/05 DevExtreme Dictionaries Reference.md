### Codes and Tags

- `Code`: the value passed to `locale(code)` and the top-level dictionary key.
- `BCP 47 Tag`: a representative regional locale for the language.
- Dictionary files are language-level files (`de`, `fr`, `zh-tw`).
- Region-qualified locales resolve through fallback (`de-AT -> de -> en`).
- Locale matching is case-insensitive (`zh-TW` and `zh-tw` resolve to the same dictionary).

### Input and Layout Notes

- `RTL`: right-to-left script. Enable mirrored layout with `rtlEnabled: true`.
- `IME`: text usually uses an input method editor (CJK languages). Handle composition input in text validation and keystroke logic.

### Available Dictionaries

<table class="dx-table">
  <tr>
    <th>Language File</th>
    <th>Language</th>
    <th>Code</th>
    <th>BCP 47 Tag</th>
    <th>Note</th>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/ar.json" target="_blank"><code>ar.json</code></a></td>
    <td>Arabic</td>
    <td><code>ar</code></td>
    <td><code>ar-SA</code></td>
    <td>RTL</td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/bg.json" target="_blank"><code>bg.json</code></a></td>
    <td>Bulgarian</td>
    <td><code>bg</code></td>
    <td><code>bg-BG</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/ca.json" target="_blank"><code>ca.json</code></a></td>
    <td>Catalan</td>
    <td><code>ca</code></td>
    <td><code>ca-ES</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/cs.json" target="_blank"><code>cs.json</code></a></td>
    <td>Czech</td>
    <td><code>cs</code></td>
    <td><code>cs-CZ</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/da.json" target="_blank"><code>da.json</code></a></td>
    <td>Danish</td>
    <td><code>da</code></td>
    <td><code>da-DK</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/de.json" target="_blank"><code>de.json</code></a></td>
    <td>German</td>
    <td><code>de</code></td>
    <td><code>de-DE</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/el.json" target="_blank"><code>el.json</code></a></td>
    <td>Greek</td>
    <td><code>el</code></td>
    <td><code>el-GR</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/en.json" target="_blank"><code>en.json</code></a></td>
    <td>English</td>
    <td><code>en</code></td>
    <td><code>en-US</code></td>
    <td>Base fallback locale</td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/es.json" target="_blank"><code>es.json</code></a></td>
    <td>Spanish</td>
    <td><code>es</code></td>
    <td><code>es-ES</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/fa.json" target="_blank"><code>fa.json</code></a></td>
    <td>Persian (Farsi)</td>
    <td><code>fa</code></td>
    <td><code>fa-IR</code></td>
    <td>RTL</td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/fi.json" target="_blank"><code>fi.json</code></a></td>
    <td>Finnish</td>
    <td><code>fi</code></td>
    <td><code>fi-FI</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/fr.json" target="_blank"><code>fr.json</code></a></td>
    <td>French</td>
    <td><code>fr</code></td>
    <td><code>fr-FR</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/hu.json" target="_blank"><code>hu.json</code></a></td>
    <td>Hungarian</td>
    <td><code>hu</code></td>
    <td><code>hu-HU</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/it.json" target="_blank"><code>it.json</code></a></td>
    <td>Italian</td>
    <td><code>it</code></td>
    <td><code>it-IT</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/ja.json" target="_blank"><code>ja.json</code></a></td>
    <td>Japanese</td>
    <td><code>ja</code></td>
    <td><code>ja-JP</code></td>
    <td>IME</td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/ko.json" target="_blank"><code>ko.json</code></a></td>
    <td>Korean</td>
    <td><code>ko</code></td>
    <td><code>ko-KR</code></td>
    <td>IME</td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/lt.json" target="_blank"><code>lt.json</code></a></td>
    <td>Lithuanian</td>
    <td><code>lt</code></td>
    <td><code>lt-LT</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/lv.json" target="_blank"><code>lv.json</code></a></td>
    <td>Latvian</td>
    <td><code>lv</code></td>
    <td><code>lv-LV</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/nb.json" target="_blank"><code>nb.json</code></a></td>
    <td>Norwegian Bokmal</td>
    <td><code>nb</code></td>
    <td><code>nb-NO</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/nl.json" target="_blank"><code>nl.json</code></a></td>
    <td>Dutch</td>
    <td><code>nl</code></td>
    <td><code>nl-NL</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/pl.json" target="_blank"><code>pl.json</code></a></td>
    <td>Polish</td>
    <td><code>pl</code></td>
    <td><code>pl-PL</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/pt.json" target="_blank"><code>pt.json</code></a></td>
    <td>Portuguese</td>
    <td><code>pt</code></td>
    <td><code>pt-BR</code></td>
    <td>Brazilian Portuguese mapping</td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/pt-BR.json" target="_blank"><code>pt-BR.json</code></a></td>
    <td>Portuguese (Brazil)</td>
    <td><code>pt-BR</code></td>
    <td><code>pt-BR</code></td>
    <td>Regional dictionary</td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/pt-PT.json" target="_blank"><code>pt-PT.json</code></a></td>
    <td>Portuguese (Portugal)</td>
    <td><code>pt-PT</code></td>
    <td><code>pt-PT</code></td>
    <td>Regional dictionary</td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/ro.json" target="_blank"><code>ro.json</code></a></td>
    <td>Romanian</td>
    <td><code>ro</code></td>
    <td><code>ro-RO</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/ru.json" target="_blank"><code>ru.json</code></a></td>
    <td>Russian</td>
    <td><code>ru</code></td>
    <td><code>ru-RU</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/sl.json" target="_blank"><code>sl.json</code></a></td>
    <td>Slovenian</td>
    <td><code>sl</code></td>
    <td><code>sl-SI</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/sv.json" target="_blank"><code>sv.json</code></a></td>
    <td>Swedish</td>
    <td><code>sv</code></td>
    <td><code>sv-SE</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/tr.json" target="_blank"><code>tr.json</code></a></td>
    <td>Turkish</td>
    <td><code>tr</code></td>
    <td><code>tr-TR</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/uk.json" target="_blank"><code>uk.json</code></a></td>
    <td>Ukrainian</td>
    <td><code>uk</code></td>
    <td><code>uk-UA</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/vi.json" target="_blank"><code>vi.json</code></a></td>
    <td>Vietnamese</td>
    <td><code>vi</code></td>
    <td><code>vi-VN</code></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/zh.json" target="_blank"><code>zh.json</code></a></td>
    <td>Chinese (Simplified)</td>
    <td><code>zh</code></td>
    <td><code>zh-CN</code></td>
    <td>IME</td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/zh-CN.json" target="_blank"><code>zh-CN.json</code></a></td>
    <td>Chinese (Simplified, China)</td>
    <td><code>zh-CN</code></td>
    <td><code>zh-CN</code></td>
    <td>IME, regional dictionary</td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/zh-Hans.json" target="_blank"><code>zh-Hans.json</code></a></td>
    <td>Chinese (Simplified, Script)</td>
    <td><code>zh-Hans</code></td>
    <td><code>zh-Hans</code></td>
    <td>IME, script dictionary</td>
  </tr>
  <tr>
    <td><a href="https://github.com/DevExpress/DevExtreme/blob/26_1/packages/devextreme/js/localization/messages/zh-tw.json" target="_blank"><code>zh-tw.json</code></a></td>
    <td>Chinese (Traditional)</td>
    <td><code>zh-tw</code></td>
    <td><code>zh-TW</code></td>
    <td>IME</td>
  </tr>
</table>

[note] DevExtreme includes these translations for convenience. Review and validate all translated strings before you use them in production. DevExpress does not guarantee that these translations are complete or free of linguistic errors, omissions, or inaccuracies. You are responsible for confirming that translations meet your requirements.

### Dictionary Delivery Formats

DevExtreme ships each dictionary in two formats.

#### JSON (`<code>.json`)

Use this format in module-based projects.

    <!--TypeScript-->
    import deMessages from 'devextreme/localization/messages/de.json';
    import { loadMessages, locale } from 'devextreme/localization';

    loadMessages(deMessages);
    locale('de');

#### Script (`dx.messages.<code>.js`)

Use this format in script-tag and non-module projects.

    <!--HTML-->
    <script src="https://cdn3.devexpress.com/jslib/<version>/js/dx.all.js"></script>
    <script src="https://cdn3.devexpress.com/jslib/<version>/js/localization/dx.messages.de.js"></script>
    <script>
        DevExpress.localization.locale('de');
    </script>

### File Locations

<table class="dx-table">
  <tr>
    <th>Form</th>
    <th>Package</th>
    <th>Path</th>
  </tr>
  <tr>
    <td><code>&lt;code&gt;.json</code></td>
    <td><code>devextreme</code></td>
    <td><code>devextreme/localization/messages/&lt;code&gt;.json</code></td>
  </tr>
  <tr>
    <td><code>dx.messages.&lt;code&gt;.js</code></td>
    <td><code>devextreme-dist</code></td>
    <td><code>devextreme-dist/js/localization/dx.messages.&lt;code&gt;.js</code></td>
  </tr>
  <tr>
    <td><code>dx.messages.&lt;code&gt;.js</code> (CDN)</td>
    <td>CDN</td>
    <td><code>https://cdn3.devexpress.com/jslib/&lt;version&gt;/js/localization/dx.messages.&lt;code&gt;.js</code></td>
  </tr>
</table>

