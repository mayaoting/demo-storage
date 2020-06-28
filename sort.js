// 插入排序，时间复杂度为 O(n **2)


Array.prototype.sort = function(comparefn) {
  let array = Object(this);
  let length = array.length >>> 0;
  return InnerArraySort(array,length,comparefn);
}
const InnerArraySort = (array,length,comparefn) => {
  // 比较函数未传入
  if (Object.prototype.toString.call(comparefn) !== "[object Function]") {
    comparefn = function(x,y) {
      if(x === y) return 0;
      x = x.toString();
      y = y.toString();
      if(x == y) return 0;
      else return x < y ? -1 : 1;
    }
  }
  const insertSort = (arr,start = 0,end) => {
    end = end || arr.length;
    for(let i=start;i<end;i++) {
      let e = arr[i];
      let j;
      for(j = i; j > start && arr[j-1] > e;j--) {
        arr[j] = arr[j-1];
      }
      arr[j] = e;
    }
    return;
  }
  const getThirdIndex = (a,from,to) => {
    let tmpArr = [];
    //递增量，200-215 之间，因为任何正数和15做与操作，不会超过15，当然是大于0的
    let increment = 200 + ((to - from) & 15);
    let j = 0;
    from += 1;
    to -= 1;
    for (let i = from;i < to;i += increment) {
      tmpArr[j] = [i,a[i]];
      j++;
    }
    // 把临时数组排序，取中间的值，确保哨兵的值接近平均位置
    tmpArr.sort(function(a,b) {
      return comparefn(a[1],b[1]);
    });
    let thirdIndex = tmpArr[tmpArr.length >> 1][0];
    return thirdIndex;
  }
  const _sort = (a,b,c) => {
    let arr = [a,b,c];
    insertSort(arr,0,3);
    return arr;
  }
  const quickSort = (a,from,to) => {
    // 哨兵位置
    let thirdIndex = 0;
    while(true) {
      if(to - from <= 10) {
        insertSort(a,from,to);
        return;
      }
      if(to - from > 1000) {
        thirdIndex = getThirdIndex(a,from,to);
      } else {
        thirdIndex = from + ((to - from) >> 2);
      }
      // 为了再次确保thirdIndex 不是最值，把这三个值排序
      [a[from],a[thirdIndex],a[to-1]] = _sort(a[from],a[thirdIndex],a[to-1]);
      let pivot = a[thirdIndex];
      // 现在正式把thirdIndex 作为哨兵
      [a[from],a[thirdIndex]] = [a[thirdIndex],a[from]];
      // 正式进入快排
      let lowEnd = from + 1;
      let highStart = to - 1;
      a[thirdIndex] = a[lowEnd];
      a[lowEnd] = pivot;
      for(let i=lowEnd + 1;i<highStart;i++) {
        let element = a[i];
        let order = comparefn(element,pivot);
        if(order < 0) {
          a[i] = a[lowEnd];
          a[lowEnd] = element;
          lowEnd++;
        } else if(order > 0) {
          do{
            highStart--;
            if(highStart === i) break;
            order = comparefn(a[highStart],pivot);
          }while (order > 0);
          a[i] = a[highStart];
          a[highStart] = element;
          if(order < 0) {
            element = a[i];
            a[i] = a[lowEnd];
            a[lowEnd] = element;
            lowEnd++;
          }
        }
      }
      // 永远切分大区间
      if(lowEnd - from > to - highStart) {
        // 单独处理小区间
        quickSort(a,highStart,to);
        // 继续切分lowEnd ~ from 这个区间
        to = lowEnd;
      } else if(lowEnd - from <= to - highStart) {
        quickSort(a,from,lowEnd);
        from = highStart;
      }
    }
  }
  quickSort(array,0,length);
}

let arr = [12,3,4,1,22];
let newarr = arr.sort();
console.log(newarr);