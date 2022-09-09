chrome.action.onClicked.addListener(async () => {
  const tabs = await chrome.tabs.query({ windowType: 'normal' }).then((t) => t.length)
  const windows = await chrome.windows.getAll().then((w) => w.length)
  let message = `You have ${tabs} tab${tabs > 1 ? 's' : ''} open`

  if (windows > 1) message += ` across ${windows} windows`

  chrome.notifications.create({
      type: 'basic',
      title: 'Tabs count',
      message,
      iconUrl: '/icons/icon-144x144.png',
  })
});
