Content Security Policy (CSP) is a security feature that helps to detect and mitigate certain types of attacks, such as clickjacking, cross-site scripting (XSS), and other malicious code injection attacks. These attacks allow hackers to perform everything from data theft to page spoofing, malware distribution, or site defacement. It is important to ensure that components of DevExtreme UI library are compatible with CSP.

If you want to apply CSP rules, you can define the `<meta>` tag and configure a policy in the following way:

    <!--HTML-->
    <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self'; img-src https://*; child-src 'none';" />
