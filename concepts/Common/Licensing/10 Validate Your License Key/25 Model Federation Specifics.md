DevExtreme validates a license key as soon as a DevExtreme component's constructor is called. To ensure the license is set up correctly, call the config() method and pass your license key. This method must be called early in the application's lifecycle.

In a Module Federation setup, you must configure the license key in all applications (host and remotes) that use DevExtreme components.

In your Angular project, import the config() function from the devextreme/core/config module.



[tags] angular