chrome.action.onClicked.addListener(async () => {
  const tabsCount = await chrome.tabs.query({ windowType: 'normal' }).then((t) => t.length)
  const tabsOpened = `${tabsCount} tab${tabsCount > 1 ? 's' : ''}`
  const windowsCount = await chrome.windows.getAll().then((w) => w.length)
  const windowsOpened = `${windowsCount} window${windowsCount > 1 ? 's' : ''}`

  chrome.notifications.create({
      type: 'basic',
      title: 'Tabs count',
      message: `You have ${tabsOpened} open across ${windowsOpened}`,
      iconUrl: '/icons/icon-144x144.png',
  })
});
