When using Visual Studio, you can add the DevExtreme libraries to your application using the [DevExtreme Web](https://www.nuget.org/packages/DevExtreme.Web) NuGet package. Run the following command in the [Package Manager Console](https://docs.nuget.org/consume/package-manager-console) to install this package:

    Install-Package DevExtreme.Web -Version minor_17_2

You can also use the [Manage NuGet Packages](https://docs.nuget.org/consume/Package-Manager-Dialog) dialog to install or update the package.

[note] The **DevExtreme Web** package contains inseparable DevExtreme scripts. We recommend using the [DevExtreme npm package](/concepts/00%20Getting%20Started/01%20Installation/20%20npm%20Package.md '/Documentation/Guide/Getting_Started/Installation/npm_Package/') instead if you are developing a modular application.

After installing the NuGet package, you need to link the DevExtreme stylesheets and scripts. Open your index page and add the links to the `<head>` tag as shown in the [Local Scripts](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts') article. Note that the NuGet package contains only **dx.viz.js**, **dx.web.js**, and **dx.viz-web.js**.

#####See Also#####
- [Installing NuGet](https://docs.nuget.org/docs/start-here/installing-nuget)
- [Bower Package](/concepts/00%20Getting%20Started/01%20Installation/15%20Bower%20Package.md '/Documentation/Guide/Getting_Started/Installation/Bower_Package')
- [npm Package](/concepts/00%20Getting%20Started/01%20Installation/20%20npm%20Package.md '/Documentation/Guide/Getting_Started/Installation/npm_Package')

[tags]getting started, install, nuget, package
