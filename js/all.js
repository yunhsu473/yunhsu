//來源網站：cssanimation.rocks

//requestAnimationFrame: 視覺更新(用來取代 setTimeout)
var scroll = window.requestAnimationFrame ||
    // IE Fallback (設定為每秒更新頁面 60 次)
    function (callback) {
        window.setTimeout(callback, 1000 / 60)
    };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

//如果元素進入頁面，則加上 CSS 效果(opacity 由 0 到 1)
function loop() {
    Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
//檢查元素是否進入頁面
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 &&
            rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}