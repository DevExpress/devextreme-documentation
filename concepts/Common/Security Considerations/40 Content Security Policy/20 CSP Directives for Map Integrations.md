If you want to integrate DevExtreme UI components with [Google](https://developers.google.com/maps) and [Bing](https://www.microsoft.com/en-us/maps/choose-your-bing-maps-api) maps API, specify the following set of CSP directives:  

    <!--HTML-->
    <meta  
        http-equiv="Content-Security-Policy"
        content="default-src 'self';  
            script-src 'self' 'nonce-test' https://*.bing.com https://*.virtualearth.net https://ssl.gstatic.com;  
            style-src 'self' 'unsafe-inline' https://*.bing.com https://*.virtualearth.net;  
            img-src 'self' data: https://*.bing.com https://*.virtualearth.net;  
            font-src 'self' data:;  
            connect-src 'self' https://*.bing.com" 
    /> 
