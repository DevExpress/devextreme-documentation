If you want to integrate DevExtreme UI components with [Google](https://developers.google.com/maps), [Azure](https://learn.microsoft.com/en-us/azure/azure-maps/), or [Bing](https://www.microsoft.com/en-us/maps/choose-your-bing-maps-api) maps API, specify the following set of CSP directives:  

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
    // Azure maps
    <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self' https://atlas.microsoft.com;
            script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: https://atlas.microsoft.com;
            style-src 'unsafe-inline' https://atlas.microsoft.com/;
            img-src data: blob:;
            connect-src https://js.monitor.azure.com https://atlas.microsoft.com;
            "
    />

The Map's **osm** provider does not require Google, Azure, or Bing domains. Its allowed origins depend on the OpenLayers resources, tile service, marker images, and location and route callbacks that your application uses. See [OSM Accessibility and Security](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/30%20Accessibility%20and%20Security.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Accessibility_and_Security/') and test the integration with your application's actual CSP.
