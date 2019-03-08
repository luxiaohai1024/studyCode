(function (window) {
    function ShellSort(arr) {
        let newArr = arr.concat();
        let n = arr.length;
        let gap, i, j;
        let temp;
        for (gap = n >> 1; gap > 0; gap >>= 1) {
            //有符号右移 a >> b;将 a 的二进制表示向右移 b (< 32) 位，丢弃被移出的位。
            for (i = gap; i < n; i++) {
                temp = newArr[i];
                for (j = i - gap; j >= 0 && newArr[j] > temp; j -= gap)
                    newArr[j + gap] = newArr[j];
                newArr[j + gap] = temp;
            }
        }
        return newArr;
    }
    window.ShellSort = ShellSort;
})(window);