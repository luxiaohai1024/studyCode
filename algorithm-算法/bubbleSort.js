(function (window) {
    function bubbleSort(arr) {
        let newArr = arr.concat();
        let i = arr.length,
            j;
        let tempExchangVal;
        while (i > 0) {
            for (j = 0; j < i - 1; j++) {
                if (newArr[j] > newArr[j + 1]) {
                    tempExchangVal = newArr[j];
                    newArr[j] = newArr[j + 1];
                    newArr[j + 1] = tempExchangVal;
                }
            }
            i--;
        }
        return newArr;
    }
    window.bubbleSort = bubbleSort;
})(window)