var QRMode = require("./QRMode.js");

//---------------------------------------------------------------------
// QR8bitByte
//---------------------------------------------------------------------

function QR8bitByte(data) {
  this.mode = QRMode.MODE_8BIT_BYTE;
  this.data = data;
}

QR8bitByte.prototype.getLength = function(buffer) {
  return this.data.length;
};

QR8bitByte.prototype.write = function(buffer) {
  for (var i = 0; i < this.data.length; i++) {
    // not JIS ...
    buffer.put(this.data.charCodeAt(i), 8);
  }
};

module.exports = QR8bitByte;
