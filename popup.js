// popup.js

document.getElementById('check-tabs').addEventListener('click', async () => {
    const tabs = await chrome.tabs.query({});
    alert(`There are currently ${tabs.length} open tabs.`);
  });
  