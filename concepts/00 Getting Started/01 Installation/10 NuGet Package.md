When using Visual Studio, you can add the DevExtreme libraries to your application using the [DevExtreme Web](https://www.nuget.org/packages/DevExtreme.Web) NuGet package. Run the following command in the [Package Manager Console](https://docs.nuget.org/consume/package-manager-console) to install this package:

    Install-Package DevExtreme.Web -Version minor_17_1

The jQuery and Globalize packages, upon which DevExtreme depends, are installed as well. If you need the Knockout and AngularJS packages, you should install them individually. Note that Knockout and AngularJS are not supposed to be used together.

    Install-Package knockoutjs

<!-------->

    Install-Package AngularJS

Use the **Manage NuGet Packages** dialog in Visual Studio as an alternative way to install or update the **DevExtreme Web** package. You can find more information [here](https://docs.nuget.org/consume/Package-Manager-Dialog).

After installing all the necessary packages, link the required scripts within your index page's `<head>` tag as shown in the [Local Scripts](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts') article.

#####See Also#####
- [Installing NuGet](https://docs.nuget.org/docs/start-here/installing-nuget)
- [Bower Package](/concepts/00%20Getting%20Started/01%20Installation/15%20Bower%20Package.md '/Documentation/Guide/Getting_Started/Installation/Bower_Package')
- [npm Package](/concepts/00%20Getting%20Started/01%20Installation/20%20npm%20Package.md '/Documentation/Guide/Getting_Started/Installation/npm_Package')

[tags]getting started, install, nuget, package
