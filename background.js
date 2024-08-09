const MAX_TABS = 10;

chrome.tabs.onCreated.addListener(async () => {
  const tabs = await chrome.tabs.query({});
  if (tabs.length > MAX_TABS) {
    const sortedTabs = tabs.sort((a, b) => b.id - a.id);
    const tabsToClose = sortedTabs.slice(MAX_TABS);
    for (const tab of tabsToClose) {
      chrome.tabs.remove(tab.id);
    }
  }
});
