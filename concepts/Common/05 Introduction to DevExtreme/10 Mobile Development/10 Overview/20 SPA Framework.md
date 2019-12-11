The **DevExtreme SPA framework** supplies all the necessary tools and features an SPA requires.

- **URL Routing**  
The framework uses familiar routing rules to define the relationship between the URL the user navigates to and the corresponding view that should load. As a developer, you specify the routing rules and define the application views your application requires and the framework's runtime takes care of actual navigation. When a view is navigated to and rendered, it will be made visible using the required animation or transition. The framework also tracks navigation between views and will automatically add the Back button should it be needed. Of course, you can override this behavior when necessary.

- **View Management and Rendering**  
The DevExtreme SPA framework uses a built-in view engine. Apart from basic view rendering technology, this engine also provides the following sophisticated features.

	- Partial Views  
	These allow you to share and reuse similar HTML markup among multiple views.

	- Context-dependent Views  
	A view can be rendered with different content based upon the current device type, device orientation or another custom context.

	- Master Pages or Layouts  
	You can extract a common application page layout as separate HTML markup (this is known as Master Pages or Layouts in some server-side technologies).

	- Separate View Files  
	Another major advantage of the DevExtreme view engine is the separation of views into their own files. With DevExtreme, you do not have to place all your markup into a single HTML file - different views can be placed in different files and your application structure can be made more clear and logical.

- **Device-Specific Layout Engine**  
	Every mobile platform has its own strict UI guidelines published by the platform's vendor. These rules define how to navigate within an app, the type and location of different UI elements on the screen, colors, margins, fonts, animations and transitions, etc. The amount of effort required to meet these guidelines is tremendous. For a framework that uses HTML5 and JavaScript to create solutions that are compiled into native apps for the relevant App Store (where rules are applied before approval), this workload is magnified.

	DevExtreme provides built-in layouts that follow device UI guidelines set by supported platform vendors. It offers separate layouts for iOS and Android, so your apps can be approved quickly. The framework also provides layouts and navigation options that mimic Facebook and YouTube, out of the box and are ready to use.

- **View Caching and State Management**  
	In order to deliver superior performance and a better user experience, DevExtreme implements intelligent view caching. Views are cached using efficient smart algorithms that balance data storage (always at a premium on mobile devices) with performance. When a view is rendered, the view cache determines whether to save the rendered view and for how long, in case the user returns having visited it before. Again, since DevExtreme was created to be extensible, you can implement your own caching strategy or disable it completely.

	Another feature that the view cache provides is to cater for a common occurrence: receiving an incoming phone call or switching to another app. In this instance, the application would be immediately halted and even unloaded. When the user switches back to the app, it is loaded again. The application has a very short period of time to save its state in this scenario, so much so that, on returning, it can reload the state and present exactly the same view to the user. The DevExtreme framework provides this capability and will automatically store the current view to local storage and restore it on return.