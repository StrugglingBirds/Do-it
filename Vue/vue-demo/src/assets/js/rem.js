(function(win, doc){
  win.onload = win.onresize = function () {
    var w = win.screen.availWidth;
    if(w <= 480) {
      doc.getElementsByTagName('html')[0].style.fontSize = w * 100 / 750 + 'px';
    }else {
      doc.getElementsByTagName('html')[0].style.fontSize = 100 + 'px';
    }
  }
})(window, document)
