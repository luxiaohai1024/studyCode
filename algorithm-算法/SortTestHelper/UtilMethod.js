(function (window) {
    var MyUtilMethod = {
        //生成有n个元素的随机数组，每个元素的随机范围为[rangeL,rangeR]
        "generateRandomArray": function (n, rangeL, rangeR) {
            var arr = [];
            for (var i = 0; i < n; i++) {
                arr[i] = Math.round(Math.random() * (rangeR - rangeL) + rangeL);
            }
            return arr;
        },
        //打印数组的函数
        "printArray": function (idName,arr) {
            var arrStr = '';
            var len = arr.length
            for (var i = 0; i < len; i++) {
                arrStr += (`<li>${arr[i]}</li>`);
            }
            $('#' + idName).append(arrStr);
        },
        //判断数组是否是已经排序的
        "isSorted" : function (arr) {
            var n = arr.length;
            for(var i=0; i < n-1; i++){
                if(arr[i] > arr[i+1]){
                    return false;
                }
            }
            return true;
        },
        //测试代码性能的函数
        "testSort" : function(methodName, methodFun, arr, showDivId){
            var start = new Date().getTime();
            methodFun(arr);
            var end = new Date().getTime();
            if(this.isSorted(arr)){
                $('#' + showDivId).append(`${methodName} -->${end - start}`);
            } else {
                $('#' + showDivId).append(`fail to Sort`);
            }
        }
     };
    window.MyUtilMethod = MyUtilMethod;
})(window);