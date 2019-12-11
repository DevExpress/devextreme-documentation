It is not always necessary to deliver libraries with a published application. There are times when it is best to use a link to these libraries from a [Content Delivery Network (CDN)](https://en.wikipedia.org/wiki/Content_delivery_network). This can improve the performance of your applications.

To use the **jQuery** and **Knockout** libraries, use the [Microsoft Ajax CDN](https://www.asp.net/ajaxlibrary/cdn.ashx) or [Google CDN](https://developers.google.com/speed/libraries/devguide?hl=ru).

    <!--HTML--><script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.0.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>
    
The DevExpress CDN hosts the dx.mobile and dx.web libraries and enables you to easily add them to your applications. Links to these libraries should be added in the following manner.

    <!--HTML--><script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.mobile.js"></script>

or ...

    <!--HTML--><script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_2/js/dx.web.js"></script>
