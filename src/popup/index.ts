import '../styles/index.css';
import '../styles/tailwind.css';

document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('#bordered-checkbox-2');
  checkbox.addEventListener('change', function () {
    chrome.storage.local.set({ 'showQRCode': this.checked });
    // 現在アクティブなタブにのみメッセージを送信
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(tabs[0].id, { showQRCode: checkbox.checked });
      }
    });
  });

  // ストレージから現在の設定を読み込み、チェックボックスの状態を復元する
  chrome.storage.local.get('showQRCode', (data) => {
    checkbox.checked = !!data.showQRCode;
  });
});
