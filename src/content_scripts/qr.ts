import QRCode from 'qrcode';

// QRコードを表示するcanvas要素を追加
document.body.innerHTML += '<canvas id="qr-canvas" style="position: fixed; top: 15px; right: 15px;"></canvas>';

const canvas = document.getElementById('qr-canvas') as HTMLCanvasElement;

// QRCodeライブラリを使用してcanvasにQRコードを生成
QRCode.toCanvas(canvas, 'https://commentable.fly.dev', function (error) {
  if (error) console.error(error);
  console.log('QRコードの生成に成功しました！');
});
