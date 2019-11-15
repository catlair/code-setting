/**
 * 获取滚动条的位置
 * 兼容ie
 */
function getScrollOffset() {
    var supportPageOffset = window.pageXOffset !== undefined;
    return {
        x: supportPageOffset ? window.pageXOffset : document.documentElement.scrollLeft + document.body.scrollLeft,
        y: supportPageOffset ? window.pageYOffset : document.documentElement.scrollTop + document.body.scrollTop
    }
};


/**
 * 获取元素的CSS属性
 * 兼容ie
 * @param {*} elem 元素
 * @param {string} prop 属性
 */
function getStyle(elem, prop) {
    return window.getComputedStyle ? window.getComputedStyle(elem, null)[prop] : elem.currentStyle[prop];
}

/**
 * 给元素绑定上事件
 * 兼容ie
 * @param {*} elem 元素
 * @param {String} type 事件类型
 * @param {Function} handle 绑定函数
 */
function addEvent(elem, type, handle) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, function () {
            handle.call(elem);
        })
    } else {
        elem[on + type] = handle;
    }
}

function removeEvent(elem, type, handle) {
    if (elem.addEventListener) {
        elem.removeEventListener(type, handle, false);
    } else if (elem.attachEvent) {
        elem.deathEvent('on' + type, function () {
            handle.call(elem);
        })
    } else {
        elem[on + type] = null;
    }
}


/**
 * 拖动元素
 * 不兼容ie8-
 * @param {*} elem 元素
 */
function drag(elem) {
    var x = 0;
    var y = 0;
    addEvent(elem, 'mousedown', onMove);
    addEvent(elem, 'mouseup', reMove);

    function onMove(e) {
        var evt = e || window.event;
        x = evt.clientX - elem.offsetLeft;
        y = evt.clientY - elem.offsetTop;
        addEvent(document, 'mousemove', mouseMove);
    }

    function reMove() {
        removeEvent(document, 'mousemove', mouseMove);
    }

    function mouseMove(e) {
        var evt = e || window.event;
        elem.style.left = evt.clientX - x + 'px';
        elem.style.top = evt.clientY - y + 'px';
    }
}