It is not always necessary to deliver the [predefined layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/') with a published application. There are times when it is best to link to them from a [Content Delivery Network (CDN)](https://en.wikipedia.org/wiki/Content_delivery_network). This can improve the performance of your applications.

The DevExpress CDN hosts DevExtreme layouts and enables you to easily add them to your applications. Links to the required files should be added in the following manner.

    <!--HTML--><link rel="dx-template" type="text/html" href="https://cdn3.devexpress.com/jslib/minor_16_2/layouts/Navbar/NavbarLayout.html"/>    
    <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/layouts/Navbar/NavbarLayout.js"></script>
    <link rel="text/css" href="https://cdn3.devexpress.com/jslib/minor_16_2/layouts/Navbar/NavbarLayout.css"/>
    <link rel="dx-template" type="text/html" href="https://cdn3.devexpress.com/jslib/minor_16_2/layouts/Simple/SimpleLayout.html"/>    
    <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/layouts/Simple/SimpleLayout.js"></script>
    <link rel="text/css" href="https://cdn3.devexpress.com/jslib/minor_16_2/layouts/Simple/SimpleLayout.css"/>
