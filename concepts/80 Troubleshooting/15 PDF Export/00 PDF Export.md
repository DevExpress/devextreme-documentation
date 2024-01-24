DevExtreme allows you to create PDF files with the contents of your Data Grid tables and Gantt diagrams.

When DevExtreme generates PDFs, it uses the open-source [jsPDF](https://github.com/parallax/jsPDF) library. As a result, this process is subject to the inherent limitations of jsPDF. Perhaps, the most significant of these limitations is the lack of built-in Unicode (UTF-16) support.

This article describes how to create PDFs with non-ASCII characters. It can be useful if your data contains content in languages that use non-Latin scripts.