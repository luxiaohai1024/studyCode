(function (window) {
    function insertionSort(arr) {
        let newArr = arr;
        let n = arr.length;
        let middleValue = null;
        for (let i = 1; i < n; i++) {
            //寻找元素arr[i]合适的插入位置
            for (let j = i; j > 0 && newArr[j] < newArr[j - 1]; j--) {
                middleValue = newArr[j];
                newArr[j] = newArr[j - 1];
                newArr[j - 1] = middleValue;
            }
        }
        return newArr;
    }
    window.insertionSort = insertionSort;
})(window)