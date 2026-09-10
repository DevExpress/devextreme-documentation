(async () => {
  const { AzureOpenAI, APIUserAbortError } = await import('https://esm.sh/openai@4.73.1');
  const { unified } = await import('https://esm.sh/unified@11?bundle');
  const { default: remarkParse } = await import('https://esm.sh/remark-parse@11?bundle');
  const { default: remarkRehype } = await import('https://esm.sh/remark-rehype@11?bundle');
  const { default: rehypeStringify } = await import('https://esm.sh/rehype-stringify@10?bundle');

  const deployment = 'demo-mini';
  const apiVersion = '2024-02-01';
  const endpoint = 'https://public-api.devexpress.com/demo-openai';
  const apiKey = 'DEMO';
  const REGENERATION_TEXT = 'Regenerating...';
  const CHAT_DISABLED_CLASS = 'chat-disabled';
  const clearButtonId = 'clear-chat-button';

  const user = {
    id: 'user',
  };

  const assistant = {
    id: 'assistant',
    name: 'Virtual Assistant',
  };

  let chatService;

  let controller = new AbortController();

  function alertLimitReached(chatInstance) {
    chatInstance.option({
      alerts: [{
        message: 'Request limit reached, try again in a minute.',
      }],
    });

    setTimeout(() => {
      chatInstance.option({ alerts: [] });
    }, 10000);
  }

  function toggleDisabledState(disabled, chatInstance) {
    chatInstance.element().toggleClass(CHAT_DISABLED_CLASS, disabled);
  }

  async function processMessageSending(chatInstance, messages, customStore, chatService) {
    toggleDisabledState(true, chatInstance);

    chatInstance.option({ typingUsers: [assistant] });

    try {
      const aiResponse = await getAIResponse(messages, chatService);

      setTimeout(() => {
        chatInstance.option({ typingUsers: [] });

        if (controller.signal.aborted) return;

        messages.push({ role: 'assistant', content: aiResponse });
        renderMessage(aiResponse, customStore);
      }, 200);
    } catch (error) {
      chatInstance.option({ typingUsers: [] });

      if (!(error instanceof APIUserAbortError)) {
        alertLimitReached(chatInstance);
      }
    } finally {
      toggleDisabledState(false, chatInstance);
    }
  }
  function renderMessage(text, customStore) {
    const message = {
      id: Date.now(),
      timestamp: new Date(),
      author: assistant,
      text,
    };

    customStore.push([{ type: 'insert', data: message }]);
  }
  async function regenerate(chatInstance, messages, customStore, chatService) {
    toggleDisabledState(true, chatInstance);

    try {
      const aiResponse = await getAIResponse(messages.slice(0, -1), chatService);

      updateLastMessage(aiResponse, chatInstance, customStore);
      messages.at(-1).content = aiResponse;
    } catch (error) {
      const lastMessage = messages.at(-1);
      if (lastMessage) {
        updateLastMessage(lastMessage.content, chatInstance, customStore);
      }
      if (!(error instanceof APIUserAbortError)) {
        alertLimitReached(chatInstance);
      }
    } finally {
      toggleDisabledState(false, chatInstance);
    }
  }
  function updateLastMessage(text, chatInstance, customStore) {
    const { items } = chatInstance.option();
    const lastMessage = items.at(-1);
    const data = {
      text: text || REGENERATION_TEXT,
    };

    customStore.push([{
      type: 'update',
      key: lastMessage.id,
      data,
    }]);
  }

  async function getAIResponse(messagesAI, chatService) {
    const params = {
      messages: messagesAI || '',
      model: deployment,
      max_completion_tokens: 1000,
      temperature: 0.7,
    };

    const signalObj = {
      signal: controller.signal,
    };

    const response = await chatService.chat.completions.create(params, signalObj);

    return response.choices[0]?.message?.content;
  }

  function convertToHtml(value) {
    return unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeStringify)
      .processSync(value)
      .toString();
  }

  function abortCurrentRequest() {
    controller.abort();
  }

  function resetAbortController() {
    controller = new AbortController();
  }

  const chatMessages = [];
  const aiMessages = [];

  const customStore = new DevExpress.data.CustomStore({
    key: 'id',
    load: () => {
      const d = $.Deferred();

      setTimeout(() => {
        d.resolve([...chatMessages]);
      });

      return d.promise();
    },
    insert: (message) => {
      const d = $.Deferred();

      setTimeout(() => {
        chatMessages.push(message);
        d.resolve();
      });

      return d.promise();
    },
  });

  function onMessageEntered (e) {
    $(`#${clearButtonId}`).dxButton('instance').option('disabled', false);
    resetAbortController();

    const { message } = e;

    customStore.push([{ type: 'insert', data: { id: Date.now(), ...message } }]);
    aiMessages.push({ role: 'user', content: message.text });

    processMessageSending(e.component, aiMessages, customStore, chatService);
  }

  function messageTemplate (data, element) {
    const { message } = data;

    if (message.text === REGENERATION_TEXT) {
      element.text(REGENERATION_TEXT);
      return;
    }

    const $textElement = $('<div>')
      .addClass('dx-chat-messagebubble-text')
      .html(convertToHtml(message.text))
      .appendTo(element);

    const $buttonContainer = $('<div>')
      .addClass('dx-bubble-button-container');

    $('<div>')
      .dxButton({
        icon: 'copy',
        stylingMode: 'text',
        hint: 'Copy',
        onClick: ({ component }) => {
          navigator.clipboard.writeText($textElement.text());
          component.option({ icon: 'check' });
          setTimeout(() => {
            component.option({ icon: 'copy' });
          }, 5000);
        },
      })
      .appendTo($buttonContainer);

    $('<div>')
      .dxButton({
        icon: 'refresh',
        stylingMode: 'text',
        hint: 'Regenerate',
        onClick: () => {
          updateLastMessage('', data.component, customStore);
          regenerate(data.component, aiMessages, customStore, chatService);
        },
      })
      .appendTo($buttonContainer);

    $buttonContainer.appendTo(element);
  }

  function clearChat(chatInstance) {
    const removals = chatInstance.getDataSource().items().map((item) => ({ type: 'remove', key: item.id }));

    chatMessages.length = 0;
    aiMessages.length = 0;

    chatInstance.option({ alerts: [], typingUsers: [] });

    chatInstance.getDataSource().store().push(removals);
  }

  $(() => {
    DevExpress.localization.loadMessages({
      'en': {
        'dxChat-emptyListMessage': 'Chat is Empty',
        'dxChat-emptyListPrompt': 'AI Assistant is ready to answer your questions.',
        'dxChat-textareaPlaceholder': 'Ask AI Assistant...',
      },
    });

    chatService = new AzureOpenAI({
      dangerouslyAllowBrowser: true,
      deployment,
      endpoint,
      apiVersion,
      apiKey,
    });

    const instance = $('#dx-ai-chat').dxChat({
      dataSource: customStore,
      reloadOnChange: false,
      showAvatar: false,
      showDayHeaders: false,
      user,
      onMessageEntered,
      messageTemplate,
    }).dxChat('instance');

    $('#ai-chat-toolbar').dxToolbar({
      items: [{
        location: 'before',
        text: 'AI Assistant',
      }, {
        widget: 'dxButton',
        location: 'after',
        options: {
          elementAttr: { id: clearButtonId },
          icon: 'clearhistory',
          hint: 'Clear Chat',
          disabled: true,
          onClick(e) {
            e.component.option('disabled', true);
            clearChat(instance);
            abortCurrentRequest();
          }
        }
      }]
    })
  });
})();
