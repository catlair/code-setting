/**
 * 获取滚动条的位置
 */
function getScrollOffset() {
    var supportPageOffset = window.pageXOffset !== undefined;
    return {
        x: supportPageOffset ? window.pageXOffset : document.documentElement.scrollLeft + document.body.scrollLeft,
        y: supportPageOffset ? window.pageYOffset : document.documentElement.scrollTop + document.body.scrollTop
    }
};