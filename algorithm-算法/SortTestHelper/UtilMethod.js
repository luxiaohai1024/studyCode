(function (window) {
    let MyUtilMethod = {
        //生成有n个元素的随机数组，每个元素的随机范围为[rangeL,rangeR]
        "generateRandomArray": function (n, rangeL, rangeR) {
            let arr = [];
            for (let i = 0; i < n; i++) {
                arr[i] = Math.round(Math.random() * (rangeR - rangeL) + rangeL);
            }
            return arr;
        },
        //打印数组的函数
        "printArray": function (idName,arr) {
            let arrStr = '';
            let len = arr.length
            for (let i = 0; i < len; i++) {
                arrStr += (`<li>${arr[i]}</li>`);
            }
            $('#' + idName).append(arrStr);
        },
        //判断数组是否是已经排序的
        "isSorted" : function (arr) {
            let n = arr.length;
            for(let i=0; i < n-1; i++){
                if(arr[i] > arr[i+1]){
                    return false;
                }
            }
            return true;
        },
        //测试代码性能的函数
        "testSort" : function(methodName, methodFun, arr, showDivId){
            let start = new Date().getTime();
            let newArr = methodFun(arr);
            let end = new Date().getTime();
            if(this.isSorted(newArr)){
                $('#' + showDivId).append(`${methodName} -->${end - start}`);
            } else {
                $('#' + showDivId).append(`fail to Sort`);
            }
        },
        //拷贝数组
        "copeArray" : function (arr) {
            return arr.slice();
        }
     };
    window.MyUtilMethod = MyUtilMethod;
})(window);