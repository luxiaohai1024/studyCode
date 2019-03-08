(function (window) { 
    function SelectionSort (arr) {
        let newArr = arr.concat();
        let n = arr.length;
        let middleValue = null;
        for (let i=0; i<n; i++){
            //寻找[i, n)区间里的最小值
            let minIndex = i;
            for(let j = i + 1; j<n; j++){
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
