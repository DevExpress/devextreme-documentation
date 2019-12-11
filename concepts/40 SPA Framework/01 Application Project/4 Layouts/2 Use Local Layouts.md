To provide the required layouts for your application, you can put them into the project and give links to them within the application page. 

    <!--HTML--><!-- Layouts -->
    <script type="text/javascript" src="layouts/Navbar/NavbarLayout.js"></script>
    <link rel="stylesheet" type="text/css" href="layouts/Navbar/NavbarLayout.css" />
    <link rel="dx-template" type="text/html" href="layouts/Navbar/NavbarLayout.html"/>
    <script type="text/javascript" src="layouts/Simple/Simple.js"></script>
    <link rel="stylesheet" type="text/css" href="layouts/Simple/Simple.css" />
    <link rel="dx-template" type="text/html" href="layouts/Simple/Simple.html"/>

All the layouts are available for you in the DevExtreme zip archive or in the folder where you have installed DevExtreme, which is **C:\Program Files (x86)\DevExpress 16.2\DevExtreme\Sources** by default.

The application template project includes the **layouts** folder with all the predefined layouts. The 'navbar' layout set is specified for the application, and the corresponding layouts are referenced in the application page.