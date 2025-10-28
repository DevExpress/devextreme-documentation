To export PivotGrid data to Excel, you first need to install the following third-party libraries:

- <a href="https://github.com/DevExpress/devextreme-exceljs-fork" target="_blank">DevExtreme ExcelJS</a> v4.4.1+
- <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> v2.0.2+

---
##### jQuery

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.0/polyfill.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/devextreme-exceljs-fork@4.4.1/dist/dx-exceljs-fork.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js"></script>

            <!-- DevExtreme scripts are referenced here -->
            <!-- ... -->
        </head>
    </html>

##### Angular

    <!-- tab: Installation command -->
    npm install --save devextreme-exceljs-fork file-saver

##### Vue

    <!-- tab: Installation command -->
    npm install --save devextreme-exceljs-fork file-saver

##### React

    <!-- tab: Installation command -->
    npm install --save devextreme-exceljs-fork file-saver

---

[important] For details about potential vulnerabilities when using an older DevExtreme ExcelJS version and applying [CSP rules](/concepts/Common/Security%20Considerations/40%20Content%20Security%20Policy/00%20Content%20Security%20Policy.md '/Documentation/Guide/Common/Security_Considerations/#Content_Security_Policy'), refer to the [ExcelJS CSP Treats](/concepts/Common/Security%20Considerations/30%20Export%20Vulnerabilities/20%20ExcelJS%20CSP%20Threats.md '/Documentation/Guide/Common/Security_Considerations/#Export_Vulnerabilities/ExcelJS_CSP_Threats') section.