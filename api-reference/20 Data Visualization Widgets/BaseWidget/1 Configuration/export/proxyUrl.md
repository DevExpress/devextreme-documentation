---
default: undefined
type: String
---
---
##### shortDescription
Specifies the URL of the server-side proxy that streams the resulting file to the end user to enable exporting in **IE9** and **Safari** browsers.

---
Generally, exporting is performed using client-side API in browsers. However, the **IE9** and **Safari** (integrated in Mac OS) browsers do not implement an API for saving files. In this instance, the widget can POST the content to a server-side proxy, which will stream the file back to the end user. To enable this functionality, set the **export** | **proxyUrl** option to the proxy, which will stream the file to the end user. When implementing the proxy, take the following information into account.

- Your proxy will receive a POST request with the following parameters in the request body: **fileName**, **contentType** (the MIME type of the file) and **base64** (the base-64 encoded file content).
- The proxy should return the decoded file with the "Content-Disposition" header set to *attachment; filename="<fileName.xslx>"*.

#####See Also#####
- [Setting Up a Server-Side Proxy](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/80%20Client-Side%20Exporting%20and%20Printing/30%20Setting%20Up%20a%20Server-Side%20Proxy/05%20Setting%20Up%20a%20Server-Side%20Proxy.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Client-Side_Exporting_and_Printing/#Setting_Up_a_Server-Side_Proxy') - shows how to set up a server-side proxy on ASP.NET and PHP servers.