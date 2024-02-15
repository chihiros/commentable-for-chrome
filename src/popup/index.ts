import '../styles/index.css';
import '../styles/tailwind.css';

document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('#bordered-checkbox-2');
  checkbox.addEventListener('change', function () {
    chrome.storage.local.set({ 'showQRCode': this.checked });
    chrome.tabs.query({}, function (tabs) {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, { showQRCode: checkbox.checked });
      });
    });

  });

  chrome.storage.local.get('showQRCode', (data) => {
    checkbox.checked = !!data.showQRCode;
  });
});
