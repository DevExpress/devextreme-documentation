Follow the steps below to manually upgrade your applications that use DevExtreme libraries.

- **Update Scripts**  
Copy the new JavaScript files from the **[Sources]**/**Lib**/**js** DevExtreme folder to the equivalent folder in your applications.

- **Update Stylesheets**  
    Copy the new CSS files from the **[Sources]**/**Lib**/**css** DevExtreme folder to the equivalent folder in your applications.

    [note]The **css** folder must include the **icons** folder with font icons.

- **Update Layouts**  
Copy the new [layout](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/') files from the **[Sources]**/**Lib**/**layouts** DevExtreme folder to the equivalent folder in your applications.

You can find all these resources in the DevExtreme zip archive or in the DevExtreme folder, which is **C:\Program Files (x86)\DevExpress 17.1\DevExtreme** by default.

[note]If you customized layouts or stylesheets in your apps, do not replace them, but rather merge them with the ones supplied in the new DevExtreme version. 

When using bower, npm, or NuGet, you can upgrade DevExtreme libraries by running the commands mentioned in the following topics:

- [npm Package](/concepts/00%20Getting%20Started/01%20Installation/20%20npm%20Package.md '/Documentation/Guide/Getting_Started/Installation/npm_Package/')
- [Bower Package](/concepts/00%20Getting%20Started/01%20Installation/15%20Bower%20Package.md '/Documentation/Guide/Getting_Started/Installation/Bower_Package/')
- [NuGet Package](/concepts/00%20Getting%20Started/01%20Installation/10%20NuGet%20Package.md '/Documentation/Guide/Getting_Started/Installation/NuGet_Package/')

If you use our CDN links, just replace the version in them (see [CDN Services](/concepts/00%20Getting%20Started/01%20Installation/05%20CDN%20Services '/Documentation/Guide/Getting_Started/Installation/CDN_Services/')).
