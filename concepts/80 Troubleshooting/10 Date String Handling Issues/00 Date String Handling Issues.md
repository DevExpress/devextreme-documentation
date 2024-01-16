Different browsers follow different rules when they handle date strings.

To minimize cross-browser inconsistencies, DevExtreme parses date strings with its own, browser-independent algorithm. When DevExtreme loads data from a date string, the framework automatically detects the string's format, and **converts the string into a timestamp for further actions**.

If the format of a date string is not compatible with the **ISO 8601** standard, DevExtreme may not be able to perform the conversion.

This article describes what DevExtreme does when it parses date strings, how you can influence this process, and why some date string data causes errors.