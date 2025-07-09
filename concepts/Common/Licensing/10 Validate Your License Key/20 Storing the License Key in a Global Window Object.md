If the `config` method is unsuitable, store a license key in a global window object:

    if (typeof window !== "undefined") {
        (window as any).DevExpress = (window as any).DevExpress || {};
        (window as any).DevExpress.config = {
            licenseKey: 'DEVELOPER_LICENSE_KEY'
        };
    }

[note] This approach is applicable starting with **v24.1+** and requires this code before a component's constructor is called.