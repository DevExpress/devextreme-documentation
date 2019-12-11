According to the DevExtreme application template, an application page includes links to required resources only. Here is how it looks.

    <!--HTML--><!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <!-- Styles should be linked here-->
            <!-- Scripts -->
            <script type="text/javascript" src="/js/jquery-3.1.0.min.js"></script>
            <script type="text/javascript" src="/js/knockout-3.4.0.js"></script>
            <script type="text/javascript" src="/js/dx.mobile.js"></script>
            <!-- Layouts should be linked here -->
            <!-- Separated application files should be linked here -->
        </head>
        <body>
            //Here is the div to which the application's views are rendered
            <div class="dx-viewport"></div>
        </body>
    </html>

As you can see in the code above, the page's body contains a **div** element accompanied by the **dx-viewport** class. This element is used to insert a view. There can be several views. When replacing these views within the "view port", the single-page application is turned into a multi-screen application.
