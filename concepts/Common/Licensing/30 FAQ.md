**Q: Do I need an Internet connection for license validation? Is any information transmitted from my machine to DevExpress during license verification?**

A: No, the DevExtreme license validation process does not require an internet connection, nor does it communicate with DevExpress servers. We do not transmit/collect any device specific and/or personally identifiable information.

<br>

**Q: Does license verification have an impact on page load time?**

A:  No significant impact - the license verification process takes ~10ms.

<br>

**Q: What if my license key is stolen/compromised? What are the consequences?**

A: License keys are public due to the client-side nature of JS apps. If you discover that your license key was stolen/compromised, you can contact our <a href="mailto: clientservices@devexpress.com">license compliance department</a> for assistance.

<br>

**Q: Can I revoke license keys if an employee quits and I need to invalidate their key?**

A: No, revoking keys is not possible due to the offline nature of the key validation process. Once issued for a DevExtreme version (e.g., 25.1), a key will remain valid indefinitely for all minor updates and security issues.

<br>

**Q: My organization owns multiple DevExtreme licenses. Which key should be used on our CI/App Server?**

A: You can use any valid license key issued to you or your employees. If you prefer not to tie your build servers to a specific employee key, you can purchase a dedicated license for CI, but a dedicated key is not necessary if you have purchased a license for each developer using DevExtreme.

<br>

**Q: Which DevExtreme products require license verification**

A:

- [DevExtreme Angular](https://js.devexpress.com/Angular/)

- [DevExtreme React](https://js.devexpress.com/React/)

- [DevExtreme Vue](https://js.devexpress.com/Vue/)

- [DevExtreme jQuery](https://js.devexpress.com/jQuery/)

And all related supplemental products like Application Templates, UI Template Gallery, and Demos (if you download them or copy to CodePen or CodeSandBox). If you use trial version of DevExtreme in ASP.NET Core/MVC projects, you will see an on-screen message. 

[note] For more information about licensing in ASP.NET Core/MVC, refer to the following article: [Convert a Trial Version to a Licensed Version](https://docs.devexpress.com/GeneralInformation/403579/trial-register/convert-a-trial-version-to-a-licensed-version).

At present, license verification is not required for DevExtreme Reactive.

<br>

**Q: Why are there no license keys available in Download Manager for alpha or beta version?**

A: Pre-release versions are not suitable for commercial use. Once we officially release, you can obtain keys through the DevExpress Download Manager.

<br>

**Q: License keys complicate deployment management. Can I opt out?**

A: You cannot opt out of license validation. At first glance it seems that the process is complicated. Once you set everything up, you should not experience any complications (due to the fully offline nature of our license validation process). Once you have deployed your app with a valid license key, you do not need to monitor or take further actions until you decide to update your app to a new major version of DevExtreme (major versions are generally released twice a year).

<br>

**Q: Is it necessary to exclude the `devextreme-license` file from version control? How do you configure version control systems other than Git?**

A: It is not necessary, but we highly recommend using this approach. Storing keys in version control is generally considered a bad practice. This will help you and your team use individual keys as required by the license agreement and also prevent developers from accidentally committing keys to public repositories.

Configuring the version control system so as to ignore file holding license keys may vary:

- Use [.gitignore](https://git-scm.com/docs/.gitignore) for Git and products that use built-in Git (like [Azure DevOps Server](https://learn.microsoft.com/en-us/azure/devops/repos/git/ignore-files?view=azure-devops&tabs=visual-studio-2022#use-a-gitignore-file)).

- Use [.tfignore](https://learn.microsoft.com/en-us/azure/devops/repos/tfvc/add-files-server?view=azure-devops#customize-which-files-version-control-ignores) for Team Foundation Server Version Control (TFVC).

- Use [.hgignore](https://wiki.mercurial-scm.org/.hgignore) for Mercurial.
