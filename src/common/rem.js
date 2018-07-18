(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        clientWidth = 0,
        recalc = function() {
            if(clientWidth != docEl.clientWidth) {
                clientWidth = Math.min(docEl.clientWidth, 768);
                if (!clientWidth) return;
                docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);