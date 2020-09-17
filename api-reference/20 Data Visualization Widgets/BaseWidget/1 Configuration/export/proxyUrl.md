---
id: BaseWidget.Options.export.proxyUrl
type: String
default: undefined
deprecated: [important] Since v10, Safari browser supports API for saving files, and this option is no longer required.
---
---
##### shortDescription
Specifies the URL of the server-side proxy that streams the resulting file to the end user to enable exporting in the **Safari** browser.

---
Generally, exporting is performed using client-side API in browsers. However, the **Safari** (integrated in Mac OS) browser does not implement an API for saving files. In this instance, the widget can POST the content to a server-side proxy, which will stream the file back to the end user. To enable this functionality, set the **export**.**proxyUrl** option to the proxy, which will stream the file to the end user. When implementing the proxy, take the following information into account.

- Your proxy will receive a POST request with the following parameters in the request body: **fileName**, **contentType** (the MIME type of the file) and **base64** (the base-64 encoded file content).
- The proxy should return the decoded file with the "Content-Disposition" header set to *attachment; filename="<fileName.xslx>"*.
