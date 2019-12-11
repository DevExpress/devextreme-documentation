A view is defined by a piece of HTML markup that forms the view template. This view template can optionally contain JavaScript code and associated style sheets, used to customize the look and feel. The view template, JavaScript code and styles should be implemented in separate files. As a result, a view will be represented by the following files.

- *viewName.html*
- *viewName.js*
- *viewName.css*

Place these files in the application's **Views** folder, so that you have a separate folder with views. Link view files within the application page.

    <!-- HTML -->
    <link rel="stylesheet" type="text/css" href="views/home.css" />
    <script type="text/javascript" src="views/home.js"></script>
    <link rel="dx-template" type="text/html" href="views/home.html"/>
    <link rel="dx-template" type="text/html" href="views/about.html"/>

The application template project includes the **Views** folder with three sample views. The files where these views are implemented are referenced in the application page.

To learn more about views, refer to the [Views and Layouts](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts '/Documentation/Guide/SPA_Framework/Views_and_Layouts/') article.

