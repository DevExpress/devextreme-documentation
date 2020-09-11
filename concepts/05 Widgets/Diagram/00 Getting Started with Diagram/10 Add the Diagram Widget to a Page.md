Add diagram resources (scripts and styles) onto the page.

- **npm**

    The `devexpress-diagram` is a dependency of the `DevExtreme` package. Therefore, [install the DevExtreme npm package](/concepts/Common/Distribution%20Channels/01%20npm.md '/Documentation/Guide/Common/Distribution_Channels/npm/') to include the Diagram in your project. Then, add the `dx-diagram.min.css` and `dx-diagram.min.js` files to your page.

        <!--HTML-->
        <link rel="stylesheet" href="node_modules/devexpress-diagram/dx-diagram.min.css">
        <script type="text/javascript" src="node_modules/devexpress-diagram/dx-diagram.min.js"></script>

- **CDN**

    Add the `dx-diagram.min.css` and `dx-diagram.min.js` files to your page.

        <!--HTML-->
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx-diagram.min.css">
        <script src="https://cdn3.devexpress.com/jslib/minor_20_2/js/dx-diagram.min.js"></script>

- **Local Scripts**

    You can find all the required files in the [DevExtreme zip archive](https://js.devexpress.com/Download/#Alternative-Downloads) or DevExtreme folder (%ProgramFiles(x86)%\DevExpress 20.2\DevExtreme\Sources). Copy the **dx-diagram.min.js** and **dx-diagram.min.css** files into your application folder. Then, link the required files.

        <!--HTML-->
        <script type="text/javascript" src="js/dx-diagram.min.js"></script>
        <link rel="stylesheet" href="css/dx-diagram.min.css">
    
Use the the `dx-diagram.css` and `dx-diagram.js` files to add an unminified version of the resource files to your page.

[note]

The Diagram widget is a jQuery DevExtreme widget. Common DevExtreme resources (listed below) should be included in your page after the Diagram resources.

        <!--HTML-->
        @* Diagram styles*@
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx-diagram.min.css">
        @* DevExtreme themes *@
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx.common.css">
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_20_2/css/dx.light.css">
        
        @* jQuery *@
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        @* Diagram scripts *@
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_20_2/js/dx-diagram.min.js"></script>
        @* DevExtreme common scripts *@
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_20_2/js/dx.all.js"></script>

You should also add the [canvg](https://github.com/canvg/canvg) library to your page to allow export to image formats in Internet Explorer.

- **npm**

    Install canvg (`npm i canvg --save`) and add it to your web page.

            <!--HTML-->
            <script type="text/javascript" src="node_modules/canvg/lib/umd.js"></script>

- **CDN**

    Add the canvg script file to your page.

            <!--HTML-->
            <script type="text/javascript" src="https://unpkg.com/canvg@3.0.4/lib/umd.js"></script>

        
[/note]


Initialize the **Diagram** widget in a DOM element.

        <!--JavaScript-->
        $(function() {
            $("#diagram").dxDiagram();
        });
  
        <!--HTML-->
        <div id="diagram"></div>

![Diagram control](/images/diagram/overview.png)
