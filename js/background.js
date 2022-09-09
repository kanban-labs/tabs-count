chrome.action.onClicked.addListener(async () => {
  const tabsCount = await chrome.tabs.query({ windowType: 'normal' }).then((t) => t.length)
  const tabsOpened = `${tabsCount} tab${tabsCount > 1 ? 's' : ''}`
  const windowsCount = await chrome.windows.getAll().then((w) => w.length)
  const windowsOpened = `${windowsCount} window${windowsCount > 1 ? 's' : ''}`
  let message = `You have ${tabsOpened} open`

  if (windowsCount > 1) message += ` across ${windowsOpened}`

  chrome.notifications.create({
      type: 'basic',
      title: 'Tabs count',
      message,
      iconUrl: '/icons/icon-144x144.png',
  })
});
