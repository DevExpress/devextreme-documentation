Add diagram resources (scripts and styles) onto the page.

- **npm**

    The `devexpress-diagram` is a dependency of the `DevExtreme` package. Therefore, [install the DevExtreme npm package](/concepts/00%20Getting%20Started/01%20Installation/01%20npm%20Package '/Documentation/Guide/Getting_Started/Installation/npm_Package/') to include the Diagram in your project. Then, add the `dx-diagram.min.css` and `dx-diagram.min.js` files to your page.

        <!--HTML-->
        <link rel="stylesheet" href="node_modules/devexpress-diagram/dx-diagram.min.css">
        <script type="text/javascript" src="node_modules/devexpress-diagram/dx-diagram.min.js"></script>

- **CDN**

    Add the `dx-diagram.min.css` and `dx-diagram.min.js` files to your page.

        <!--HTML-->
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_19_2/css/dx-diagram.min.css">
        <script src="https://cdn3.devexpress.com/jslib/minor_19_2/js/dx-diagram.min.js"></script>

- **Local Scripts**

    You can find all the required files in the [DevExtreme zip archive](https://js.devexpress.com/Download/#Alternative-Downloads) or DevExtreme folder (%ProgramFiles(x86)%\DevExpress 19.2\DevExtreme\Sources). Copy the **dx-diagram.min.js** and **dx-diagram.min.css** files into your application folder. Then, link the required files.

        <!--HTML-->
        <script type="text/javascript" src="js/dx-diagram.min.js"></script>
        <link rel="stylesheet" href="css/dx-diagram.min.css">
    
Use the the `dx-diagram.css` and `dx-diagram.js` files to add an unminified version of the resource files to your page.

[note]

The Diagram widget is a jQuery DevExtreme widget, and thus requires common DevExtreme resources (listed below) to be included into your page.

        <!--HTML-->
        @* DevExtreme themes *@
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_19_2/css/dx.common.css">
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_19_2/css/dx.light.css">
        @* jQuery *@
        <script src="~/Scripts/jquery-3.4.1.min.js"></script>
        @* DevExtreme common scripts *@
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_19_2/js/dx.all.js"></script>
        
[/note]


Initialize the **Diagram** widget in a DOM element.

        <!--JavaScript-->
        $(function() {
            $("#diagram").dxDiagram();
        });
  
        <!--HTML-->
        <div id="diagram"></div>

![Diagram control](/images/diagram/overview.png)
