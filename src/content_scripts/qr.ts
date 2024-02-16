import QRCode from 'qrcode';

function showQRCode(show: any) {
  let qrCanvas = document.getElementById('qr-canvas');
  if (show) {
    if (!qrCanvas) {
      qrCanvas = document.createElement('canvas');
      qrCanvas.id = 'qr-canvas';
      qrCanvas.style.position = 'fixed';
      qrCanvas.style.top = '15px';
      qrCanvas.style.right = '15px';
      qrCanvas.style.zIndex = '9999';
      qrCanvas.style.pointerEvents = 'none';
      document.body.appendChild(qrCanvas);

      QRCode.toCanvas(qrCanvas, 'https://commentable.fly.dev', function (error: any) {
        if (error) console.error(error);
        console.log('QRコードの生成に成功しました！');
      });
    }
  } else {
    if (qrCanvas) {
      qrCanvas.remove();
    }
  }
}

chrome.storage.local.get('showQRCode', (data) => {
  showQRCode(data.showQRCode);
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    showQRCode(request.showQRCode);
  }
);
