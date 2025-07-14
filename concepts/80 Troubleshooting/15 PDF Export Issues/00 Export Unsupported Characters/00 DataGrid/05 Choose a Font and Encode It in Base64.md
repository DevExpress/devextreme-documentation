Choose a font that includes the characters you want to support in your PDF exports.

You need to use the [jsPDF](https://github.com/parallax/jsPDF) plugin to export DataGrid data as a PDF file. To add a font to jsPDF exports, encode the font file as a Base64 string and assign it to a variable:

    <!-- tab: JavaScript -->
    const robotoRegular = "AAEAAAASAQAABAAgR0RFRqZDpEwAAAOUAAACWEdQT1MH0trkAABd6AAAWMB ... "
