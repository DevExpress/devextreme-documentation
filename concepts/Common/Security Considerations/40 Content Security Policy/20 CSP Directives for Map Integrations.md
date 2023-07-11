If you want to integrate DevExtreme UI components with [Google](https://developers.google.com/maps) and [Bing](https://www.microsoft.com/en-us/maps/choose-your-bing-maps-api) maps API, specify the following set of CSP directives:  

    <!--HTML-->
    // Bing maps
    <meta  
        http-equiv="Content-Security-Policy"
        content="default-src 'self';  
            script-src 'self' https://*.bing.com https://*.virtualearth.net https://ssl.gstatic.com;  
            style-src 'self' 'unsafe-inline' https://*.bing.com https://*.virtualearth.net;  
            img-src 'self' data: https://*.bing.com https://*.virtualearth.net;  
            font-src 'self' data:;  
            connect-src 'self' https://*.bing.com" 
    /> 
    // Google maps
    <meta 
        http-equiv="Content-Security-Policy" 
        content="default-src 'self' https://*.googleapis.com/ https://*.gstatic.com;  
            script-src 'unsafe-inline' 'unsafe-eval' 'self' https://*.googleapis.com/ https://*.gstatic.com;  
            style-src 'unsafe-inline' 'self' https://*.googleapis.com/ https://*.gstatic.com;  
            img-src 'self' data: https://*.googleapis.com/ https://*.gstatic.com;" 
    />  
