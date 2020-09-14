Add **Gantt** resources (scripts and styles) onto the page.

- **npm**

    The `devexpress-gantt` is a dependency package of the `DevExtreme` package. Therefore, [install the DevExtreme npm package](/concepts/Common/Distribution%20Channels/01%20npm.md '/Documentation/Guide/Common/Distribution_Channels/npm/') to include the **Gantt** widget in your project. Then, add the `dx-gantt.min.css` and `dx-gantt.min.js` files to your page.

        <!--HTML-->
        <link rel="stylesheet" href="node_modules/devexpress-gantt/dx-gantt.min.css">
        <script type="text/javascript" src="node_modules/devexpress-gantt/dx-gantt.min.js"></script>

- **CDN**

    Add the `dx-gantt.min.css` and `dx-gantt.min.js` files to your page.

        <!--HTML-->
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_1/css/dx-gantt.min.css">
        <script src="https://cdn3.devexpress.com/jslib/minor_20_1/js/dx-gantt.min.js"></script>

- **Local Scripts**

    You can find all the required files in the [DevExtreme zip archive](https://js.devexpress.com/Download/#Alternative-Downloads) or DevExtreme folder (%ProgramFiles(x86)%\DevExpress 20.1\DevExtreme\Sources). Copy the **dx-gantt.min.js** and **dx-gantt.min.css** files into your application folder. Then, link the required files.

        <!--HTML-->
        <script type="text/javascript" src="js/dx-gantt.min.js"></script>
        <link rel="stylesheet" href="css/dx-gantt.min.css">
    
Use the `dx-gantt.css` and `dx-gantt.js` files to add an unminified version of the resource files to your page.

[note]

The **Gantt** widget is a jQuery DevExtreme widget, and thus requires common DevExtreme resources (listed below) to be included in your page.

    <!--HTML-->
    <!-- DevExtreme themes -->
    <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_1/css/dx.common.css">
    <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_1/css/dx.light.css">
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <!-- DevExtreme common scripts -->
    <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_20_1/js/dx.all.js"></script>
        
[/note]


Initialize the **Gantt** widget in a DOM element.

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt();
    });

<!---->
        
    <!--HTML-->
    <div id="gantt"></div>
