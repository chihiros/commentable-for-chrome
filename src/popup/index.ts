import '../styles/index.css';
import '../styles/tailwind.css';

document.addEventListener('DOMContentLoaded', (): void => {
  const checkbox = document.querySelector('#bordered-checkbox-2') as HTMLInputElement; // 明示的な型付け
  checkbox.addEventListener('change', function (): void {
    chrome.storage.local.set({ 'showQRCode': this.checked });
    // 現在アクティブなタブにのみメッセージを送信
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs): void => {
      if (tabs.length > 0 && tabs[0].id !== undefined) { // undefined チェック追加
        chrome.tabs.sendMessage(tabs[0].id, { showQRCode: checkbox.checked });
      }
    });
  });

  // ストレージから現在の設定を読み込み、チェックボックスの状態を復元する
  chrome.storage.local.get('showQRCode', (data): void => {
    checkbox.checked = !!data.showQRCode;
  });
});
