function uploader(fileType, file) {
  this.fileType = fileType;
  this.file = file;
};
uploader.prototype.init = function () {
  // 初始化文件上传的html
};
uploader.prototype.delete = function () {
  // 删除掉该html
};
uploader.prototype.uploading = function () {
  // 上传
};

var fileob1, fileob2, fileob3, fileob4;
new uploader('img', fileob1);
new uploader('txt', fileob2);
new uploader('img', fileob3);
new uploader('word', fileob4);

// 享元模式下
var data = [
  {
    type: 'img',
    file: fileob1
  },
  {
    type: 'txt',
    file: fileob2
  },
  {
    type: 'img',
    file: fileob3
  },
  {
    type: 'word',
    file: fileob4
  }
]

function uploader() {

};
uploader.prototype.init = function () {
  // 初始化文件上传的html
};
uploader.prototype.delete = function () {
  // 删除掉该html
};
uploader.prototype.uploading = function (fileType, file) {
  // 上传
};

var uploader = new uploader();
for (var i = 0; i < data.length; i++) {
  uploader.uploading(data[i].type, data[i].file);
};
