import QRCode from 'qrcode';

// QRコードを表示するcanvas要素を追加
const qrCanvas = document.createElement('canvas');
qrCanvas.id = 'qr-canvas';
qrCanvas.style.position = 'fixed';
qrCanvas.style.top = '15px';
qrCanvas.style.right = '15px';
qrCanvas.style.zIndex = '9999';
qrCanvas.style.pointerEvents = 'none';
document.body.appendChild(qrCanvas);

const canvas = document.getElementById('qr-canvas') as HTMLCanvasElement;

// QRCodeライブラリを使用してcanvasにQRコードを生成
QRCode.toCanvas(canvas, 'https://commentable.fly.dev', function (error) {
  if (error) console.error(error);
  console.log('QRコードの生成に成功しました！');
});
