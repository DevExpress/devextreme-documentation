Dictionaries are files that contain localized strings for different languages. These are JavaScript or JSON files depending on the packaging you use. DevExpress curates the following dictionaries:

- English (en) (default)
- German (de)
- Japanese (ja)
- Russian (ru)

The community contributed and is curating the following dictionaries:

- Czech (cs)
- Chinese (zh)
- Finnish (fi)
- French (fr)
- Italian (it)
- Brazilian Portuguese (pt)
- Spanish (es)
- Swedish (sv)

You can find all the dictionaries on your local machine in the DevExtreme installation folder's or ZIP archive's Lib\js\localization directory. These dictionaries are also available on CDN and npm. See the topics on [localization libraries](/concepts/Common/33%20Localization/05%20Using%20Localization%20Libraries '/Documentation/Guide/Common/Localization/#Using_Localization_Libraries') for code examples and details on using them.

[note] Dictionaries can be used without localization libraries. However, you need a localization library to localize numbers, dates, and currencies.

To make a custom dictionary:

1. Copy one of the available dictionaries.
2. Rename it according to a new locale.
3. Translate the strings in it.
4. Link it to your page using a `<script>` tag.

You can submit custom dictionaries to our [repository on GitHub](https://github.com/DevExpress/DevExtreme). Please, refer to our [Contribution Guide](https://github.com/DevExpress/DevExtreme/blob/17_2/CONTRIBUTING.md) before submitting content.
