(function (window) { 
    function SelectionSort (arr) {
        var newArr = arr;
        var n = arr.length;
        var middleValue = null;
        for (var i=0; i<n; i++){
            //寻找[i, n)区间里的最小值
            var minIndex = i;
            for(var j = i + 1; j<n; j++){
                if(newArr[j] < newArr[minIndex]){
                    minIndex = j;
                }
            }
            if(i != minIndex){
                middleValue = newArr[i];
                newArr[i] = newArr[minIndex];
                newArr[minIndex] = middleValue;
            }
        }
        return newArr;
    }
    window.SelectionSort = SelectionSort;
 })(window)
