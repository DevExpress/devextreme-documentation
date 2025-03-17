DevExtreme components function on the client side, which requires a license check during the client-side code execution. Follow these steps:

- Create a `ClientComponent` with the assigned license.
- Run this component in the `RootLayout` section before rendering any content.

[note] Avoid calling the `config()` method within the `useEffect` callback. This callback triggers after component creation, making it too late to set the license.

    <!-- tab: ClientComponent-->
    "use client";
    import config from "devextreme/core/config";

    const LicenseCheckComponent = () => {
        if (typeof window !== "undefined") {
            config({  // DO NOT CALL INSIDE useEffect
            licenseKey:
                "DEVELOPER_LICENSE_KEY",
            });
        }
        return null;
    };

    export default LicenseCheckComponent;

    <!-- tab: layout.tsx -->
    export default function RootLayout({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {

        return (
            <html lang="en">
                <body>
                    <LicenseCheckComponent />
                    {children}
                </body>
            </html>
        );
    }

If the `config()` method cannot be called, [store the license key in a global window object](/concepts/Common/Licensing/10%20Validate%20Your%20License%20Key/20%20Storing%20the%20License%20Key%20in%20a%20Global%20Window%20Object.md '/Documentation/Guide/Common/Licensing/#Validate_Your_License_Key/Storing_the_License_Key_in_a_Global_Window_Object').

[tags] react