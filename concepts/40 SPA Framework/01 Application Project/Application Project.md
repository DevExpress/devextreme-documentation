Applications created using the DevExtreme framework are single-page applications (SPA). Here is the page markup for a simple DevExtreme application with two views.

    <!--HTML--><!DOCTYPE html>
    <head>
        <meta charset="utf-8" />
        <!-- Links to themes and styles -->
        <!-- Links to the required scripts -->
        <script type="text/javascript" src="/js/jquery-3.1.0.min.js"></script>
        <script type="text/javascript" src="/js/knockout-3.4.0.js"></script>
        <script type="text/javascript" src="/js/dx.mobile.js"></script>
        <!-- Links to layouts -->   
        <script type="text/javascript">
            window.AppNamespace = {};
            $(function () {       
                AppNamespace.app = new DevExpress.framework.html.HtmlApplication({
                    namespace: AppNamespace,
                    layoutSet: "simple",
                    animationSet: "default"
                });
                AppNamespace.app.router.register(":view/:name", { view: "home", name: '' });
                AppNamespace.app.navigate();
            });
            AppNamespace.home = function () {
                var viewModel = {
                    //ViewModel Fields
                };
                return viewModel;
            };
            AppNamespace.anotherView = function (params) {
                var viewModel = {
                    //ViewModel Fields
                };
                return viewModel;
            };
        </script>
    </head>
    <body>
        <div class="dx-viewport">
            <div data-options="dxView : { name: 'home', title: 'Home' } " >
                <div data-options="dxContent : { targetPlaceholder: 'content' } " >
                    <!--View markup-->
                </div>
            </div>
            <div data-options="dxView : { name: 'anotherView', title: 'Another View' } " >
                <div data-options="dxContent : { targetPlaceholder: 'content' } " >
                    <!--View markup-->
                </div>
            </div>
        </div>
    </body>
    </html>

It is possible to organize everything on one page, but it will be difficult to support this page in a real application. You can split up JavaScript functions, HTML markup and CSS styles into separate files. To make application development easier, we recommend that you use the **DevExtreme application template**, which includes the following.

- **css** - a folder with the [styles](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') for supported devices

- **js** - a folder with the required JavaScript libraries

- **layouts** - a folder with the [predefined layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/') that are most often used in mobile applications

- **views** - a folder with two sample views;

- **index.js** - a file where the HTMLApplication object is created and configured

- **index.html** - an application page where all the resources are referenced

- **index.css** - a file where application style classes are defined

This project template is available to you out-of-the-box. It contains view samples, as well as all included and referenced resources. You can find this template in the DevExtreme zip archive or in the folder where you have installed DevExtreme, which is **C:\Program Files (x86)\DevExpress 16.2\DevExtreme\Sources** by default.

Read below to learn about the different parts of a DevExtreme application project.

