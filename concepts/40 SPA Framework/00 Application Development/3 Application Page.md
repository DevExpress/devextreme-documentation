The applications created by this framework are single-page applications (SPA). This means that the application logic and markup are delivered to the client (web browser) on the first load. Then, data (in the form of JSON objects) can be loaded by request. This eliminates round-trips to the web server for page markup, thus allowing your app to be responsive.

While you can implement your application within one page, it is still better to factor out view HTML, JavaScript and CSS code into separate files and provide links to these files within the main application page. To help you get started quickly, the framework comes with an **application project template**.

**Read**:

- [Application Project](/concepts/40%20SPA%20Framework/01%20Application%20Project '/Documentation/Guide/SPA_Framework/Application_Project/')

- [VS Integrated Project Templates](/concepts/50%20VS%20Integration/0%20Project%20Templates '/Documentation/Guide/VS_Integration/Project_Templates/')

**Check**:

- The DevExtreme JavaScript libraries (*dx.mobile.js* or *dx.web.js*) must be referenced below the external jQuery and Knockout libraries.
- **dx-theme** links must be used for linking [predefined themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') and these links must go before DevExpress scripts.
