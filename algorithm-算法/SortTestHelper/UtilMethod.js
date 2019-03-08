(function (window) {
    var MyUtilMethod = {
        //生成有n个元素的随机数组，每个元素的随机范围为[rangeL,rangeR]
        "generateRandomArray": function (n, rangeL, rangeR) {
            var arr = [];
            for (var i = 0; i < n; i++) {
                arr[i] = Math.round(Math.random() * (rangeR - rangeL + 1) + rangeL);
            }
            return arr;
        },
        //打印数组的函数
        "printArray": function (idName,arrName) {
            var arrStr = '';
            for (var i = 0; i < n; i++) {
                arrStr += (`<li>${arrName[i]}</li>`);
            }
            $('#' + idName).append(arrStr);
        }
    };
    window.MyUtilMethod = MyUtilMethod;
})(window);