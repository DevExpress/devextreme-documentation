When users insert an image in the [HTML Editor](/api-reference/10%20UI%20Components/dxHtmlEditor '/Documentation/ApiReference/UI_Components/dxHtmlEditor/') "From the Web" dialog, treat the value as untrusted. Attackers may enter scriptable URLs (such as `javascript:` or `data:`) or targets that return HTML instead of an image. 

![HTML Editor with an opened "From the Web" image upload dialog](/images/htmlEditor/html-editor-xss.png)

To block stored or reflected XSS:

- Validate each URL.
- Route image retrieval through a server-side proxy and check returned data.
- Clean document HTML during save.
- Render with a restrictive [Content Security Policy (CSP)](/concepts/Common/Security%20Considerations/40%20Content%20Security%20Policy/00%20Content%20Security%20Policy.md '/Documentation/Guide/Common/Security_Considerations/#Content_Security_Policy').

[important] SVG format allows scripts. Apply SVG-aware sanitization or rasterize images on the server before use.