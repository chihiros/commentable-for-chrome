import '../styles/index.css';
import '../styles/tailwind.css';
import { startSocketConnection } from '../background/websocket';

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

document.addEventListener('DOMContentLoaded', (): void => {
  const toggleRoomButton = document.getElementById('toggleRoomButton') as HTMLButtonElement; // 明示的な型付け
  const roomNameInput = document.getElementById('room_name_input') as HTMLInputElement; // 明示的な型付け

  toggleRoomButton.addEventListener('click', (): void => {
    const roomName = roomNameInput.value.trim();
    if (roomName) {
      startSocketConnection(roomName);
    } else {
      alert('ルーム名を入力してください。');
    }
  });
});
