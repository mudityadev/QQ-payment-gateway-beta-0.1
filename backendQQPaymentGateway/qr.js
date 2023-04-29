const QRCode = require('qrcode');

QRCode.toFile('./qr.png', 'Hello, world!', {
  color: {
    dark: '#000',  // QR code color
    light: '#fff'  // Background color
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code generated!');
});
