// (function (window) {
//     function insertionSort(arr) {
//         let newArr = arr.concat();
//         let n = arr.length;
//         let middleValue = null;
//         for (let i = 1; i < n; i++) {
//             //寻找元素arr[i]合适的插入位置
//             for (let j = i; j > 0 && newArr[j] < newArr[j - 1]; j--) {
//                 middleValue = newArr[j];
//                 newArr[j] = newArr[j - 1];
//                 newArr[j - 1] = middleValue;
//             }
//         }
//         return newArr;
//     }
//     window.insertionSort = insertionSort;
// })(window)

(function (window) {
    function insertionSort(arr) {
        let newArr = arr.concat();
        let n = arr.length;
        let middleValue = null;
        for (let i = 1; i < n; i++) {
            //寻找元素arr[i]合适的插入位置
            let copeValue = newArr[i];
            let j;      //j保存元素copeValue应该插入的位置
            for (j = i; j > 0 && newArr[j - 1] > copeValue; j--) {
                newArr[j] = newArr[j-1];
            }
            newArr[j] = copeValue;
        }
        return newArr;
    }
    window.insertionSort = insertionSort;
})(window)