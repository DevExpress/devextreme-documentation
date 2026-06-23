To configure [AIIntegration](/api-reference/40%20Common%20Types/AIIntegration '/Documentation/ApiReference/Common_Types/AIIntegration/'), import the DevExtreme AI integration module into your project:

---
##### jQuery

    <!-- tab: index.html -->
    <head>
        <!-- ... -->
        <script type="text/javascript" src="../node_modules/devextreme-dist/js/dx.ai-integration.js" charset="utf-8"></script>
        <!-- or if using CDN -->
        <script src="https://cdn.jsdelivr.net/npm/devextreme-dist@cdnjs_version/js/dx.ai-integration.js"></script>
    </head>

To use REST APIs to connect to an AI service provider, implement the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) within **aiIntegration**.**aiProvider**.[sendRequest](/api-reference/40%20Common%20Types/AIProvider/sendRequest.md '/Documentation/ApiReference/Common_Types/AIProvider/#sendRequest'):

    <!-- tab: index.js -->
    const aiIntegration = new DevExpress.aiIntegration.AIIntegration({
        sendRequest(params) {
            const promise = fetch('https://example.org/post', {
                method: 'POST',
                headers: { ... }, // Add custom headers here, including API authentication headers
                body: JSON.stringify(params.prompt),
            }).then(async (response) => {
                    const result = await response.json();

                    return result.output || '';
                })

            return {
                promise,
                abort: () => {
                    // Add an abort request
                },
            };
        },
    });

You can also use third-party libraries to connect to an AI service provider. The following code snippet uses the [OpenAI](https://www.npmjs.com/package/openai) NPM package to connect to [Azure OpenAI](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure?tabs=global-standard&pivots=azure-openai):

    <!-- tab: index.html -->
    <head>
        <!-- ... -->
        <script type="text/javascript" src="../node_modules/openai/index.min.js" charset="utf-8"></script>
        <!-- or if using CDN -->
        <script src="https://cdn.jsdelivr.net/npm/openai/index.min.js"></script>
    </head>

    <!-- tab: index.js -->
    const deployment = 'my-deployment-name';

    const aiService = new AzureOpenAI({
        deployment,
        apiVersion: // ...
        endpoint: // ...
        apiKey: // ...
    });

    const aiIntegration = new DevExpress.aiIntegration.AIIntegration({
        sendRequest(params) {
            const aiPrompt = [
                { role: 'system', content: params.prompt.system },
                { role: 'user', content: params.prompt.user },
            ];

            const controller = new AbortController();
            const signal = controller.signal;

            const chatParams = {
                messages: aiPrompt,
                model: deployment,
                max_completion_tokens: // ...
            }

            const promise = aiService.chat.completions.create(chatParams, { signal })
                .then((response) => response.choices[0].message?.content ?? '');

            return {
                promise,
                abort: () => {
                    controller.abort();
                },
            };
        },
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { AIIntegration } from 'devextreme-angular/common/ai-integration';

To use REST APIs to connect to an AI service provider, implement the [HttpClient](https://angular.dev/api/common/http/HttpClient) service within **aiIntegration**.**aiProvider**.[sendRequest](/api-reference/40%20Common%20Types/AIProvider/sendRequest.md '/Documentation/ApiReference/Common_Types/AIProvider/#sendRequest'):

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { HttpClient, HttpHeaders } from '@angular/common/http';
    import { AIIntegration } from 'devextreme-angular/common/ai-integration';
    // ...
    export class AppComponent {
        constructor(private http: HttpClient) {}
        provider = {
            sendRequest: ({ prompt }) => {
                const headers = new HttpHeaders({
                    // Add any custom headers here
                });

                const body = JSON.stringify({ prompt });

                const promise = this.http
                    .post<{ output?: string }>('https://example.org/post', body, {
                        headers,
                        signal: controller.signal,
                    })
                    .toPromise()
                    .then((result) => result.output || '');

                return {
                    promise,
                    abort: () => {
                        // Add an abort request
                    },
                };
            },
        };
        aiIntegration = new AIIntegration(provider);
    }

You can also use third-party libraries to connect to an AI service provider. The following code snippet uses the [OpenAI](https://www.npmjs.com/package/openai) NPM package to connect to [Azure OpenAI](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure?tabs=global-standard&pivots=azure-openai):

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { AIIntegration } from 'devextreme-angular/common/ai-integration';
    import { AzureOpenAI } from 'openai';
    // ...
    export class AppComponent {
        private deployment = 'my-deployment-name';

        private aiService = new AzureOpenAI({
            deployment: this.deployment,
            apiVersion: // ...
            endpoint: // ...
            apiKey: // ...
        });

        provider = {
            sendRequest: ({ prompt }) => {
                const aiPrompt = [
                    { role: 'system', content: prompt.system },
                    { role: 'user', content: prompt.user },
                ];

                const controller = new AbortController();
                const signal = controller.signal;

                const chatParams = {
                    messages: aiPrompt,
                    model: this.deployment,
                    max_completion_tokens: // ...
                };

                const promise = this.aiService.chat.completions.create(chatParams, { signal })
                    .then((response) => response.choices[0].message?.content ?? '');

                return {
                    promise,
                    abort: () => {
                        controller.abort();
                    },
                };
            },
        };

        aiIntegration = new AIIntegration(this.provider);
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { AIIntegration } from 'devextreme-vue/common/ai-integration';

    </script>

To use REST APIs to connect to an AI service provider, implement the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) within **aiIntegration**.**aiProvider**.[sendRequest](/api-reference/40%20Common%20Types/AIProvider/sendRequest.md '/Documentation/ApiReference/Common_Types/AIProvider/#sendRequest'):

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { ref } from 'vue';
    import { AIIntegration } from 'devextreme-vue/common/ai-integration';

    const provider = {
        sendRequest: ({ prompt }) => {
            const headers = {
                // Add any custom headers here
            };

            const promise = fetch('https://example.org/post', {
                method: 'POST',
                headers,
                body: JSON.stringify({ prompt }),
                signal: controller.signal,
            })
                .then(async (response) => {
                    const result = await response.json();
                    return result.output || '';
                });

            return {
                promise,
                abort: () => {
                    // Add an abort request
                },
            };
        },
    };

    const aiIntegration = new AIIntegration(provider);
    </script>

You can also use third-party libraries to connect to an AI service provider. The following code snippet uses the [OpenAI](https://www.npmjs.com/package/openai) NPM package to connect to [Azure OpenAI](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure?tabs=global-standard&pivots=azure-openai):

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { AIIntegration } from 'devextreme-vue/common/ai-integration';
    import { AzureOpenAI } from 'openai';

    const deployment = 'my-deployment-name';

    const aiService = new AzureOpenAI({
        deployment,
        apiVersion: // ...
        endpoint: // ...
        apiKey: // ...
    });

    const provider = {
        sendRequest: ({ prompt }) => {
            const aiPrompt = [
                { role: 'system', content: prompt.system },
                { role: 'user', content: prompt.user },
            ];

            const controller = new AbortController();
            const signal = controller.signal;

            const chatParams = {
                messages: aiPrompt,
                model: deployment,
                max_completion_tokens: // ...
            };

            const promise = aiService.chat.completions.create(chatParams, { signal })
                .then((response) => response.choices[0].message?.content ?? '');

            return {
                promise,
                abort: () => {
                    controller.abort();
                },
            };
        },
    };

    const aiIntegration = new AIIntegration(provider);
    </script>

##### React

    <!-- tab: App.tsx -->
    import { AIIntegration } from 'devextreme-react/common/ai-integration';

To use REST APIs to connect to an AI service provider, implement the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) within **aiIntegration**.**aiProvider**.[sendRequest](/api-reference/40%20Common%20Types/AIProvider/sendRequest.md '/Documentation/ApiReference/Common_Types/AIProvider/#sendRequest'):

    <!-- tab: App.tsx -->
    import { AIIntegration } from 'devextreme-react/common/ai-integration';

    const provider = {
        sendRequest: ({ prompt }) => {
            const headers = {
                'Content-Type': 'application/json',
                // Add any custom headers here
            };

            const promise = fetch('https://example.org/post', {
                method: 'POST',
                headers,
                body: JSON.stringify({ prompt }),
                signal: controller.signal,
            })
                .then(async (response) => {
                    const result = await response.json();
                    return result.output || '';
                });

            return {
                promise,
                abort: () => {
                    // Add an abort request
                },
            };
        },
    };
    const aiIntegration = new AIIntegration(provider);

You can also use third-party libraries to connect to an AI service provider. The following code snippet uses the [OpenAI](https://www.npmjs.com/package/openai) NPM package to connect to [Azure OpenAI](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure?tabs=global-standard&pivots=azure-openai):

    <!-- tab: App.tsx -->
    import { AIIntegration } from 'devextreme-react/common/ai-integration';
    import { AzureOpenAI } from 'openai';

    const deployment = 'my-deployment-name';

    const aiService = new AzureOpenAI({
        deployment,
        apiVersion: // ...
        endpoint: // ...
        apiKey: // ...
    });

    const provider = {
        sendRequest: ({ prompt }) => {
            const aiPrompt = [
                { role: 'system', content: prompt.system },
                { role: 'user', content: prompt.user },
            ];

            const controller = new AbortController();
            const signal = controller.signal;

            const chatParams = {
                messages: aiPrompt,
                model: deployment,
                max_completion_tokens: // ...
            };

            const promise = aiService.chat.completions.create(chatParams, { signal })
                .then((response) => response.choices[0].message?.content ?? '');

            return {
                promise,
                abort: () => {
                    controller.abort();
                },
            };
        },
    };
    const aiIntegration = new AIIntegration(provider);

---

For additional AI integration examples, refer to [Overview of AI-powered Features - Demos](/Documentation/Guide/AI_Features/Overview_of_AI-powered_Features/#Demos).
