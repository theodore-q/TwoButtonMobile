(function (doc, win) {
    var docEl = doc.documentElement,
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;

            docEl.style.fontSize = clientWidth + 'px';
            docEl.style.display = "none";
            docEl.clientWidth; // Force relayout - important to new Androids
            docEl.style.display = "";
        };

    // Abort if browser does not support addEventListener
    if (!doc.addEventListener) return;

    // Test rem support
    var div = doc.createElement('div');
    div.setAttribute('style', 'font-size: 1rem');

    // Abort if browser does not recognize rem
    if (div.style.fontSize != "1rem") return;

    win.addEventListener('resize', recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);