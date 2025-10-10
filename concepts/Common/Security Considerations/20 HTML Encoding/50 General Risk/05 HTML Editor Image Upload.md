When users insert an image in the [HTML Editor](/api-reference/10%20UI%20Components/dxHtmlEditor '/Documentation/ApiReference/UI_Components/dxHtmlEditor/') "From the Web" dialog, treat the value as untrusted. Attackers may enter scriptable URLs (such as `javascript:` or `data:`) or targets that return HTML instead of an image. 

[image]

To block stored or reflected XSS:

- Validate each URL.
- Route image retrieval through a server-side proxy and check returned data.
- Clean document HTML during save.
- Render with a restrictive [Content Security Policy (CSP)](/Documentation/Guide/Common/Security_Considerations/#Content_Security_Policy).

[note] SVG allows scripts. Apply an SVG-aware sanitization policy or rasterize the image on the server before use.