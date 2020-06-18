// 手写数组的splice() 方法
/**
 * splice(position,count) 表示从position索引的位置开始，删除count个元素
 * splice(position,0,ele1,ele2) 表示从position索引的元素后面插入一些列元素
 * splice(position,count,ele1,ele2) 表示从position索引的位置开始，删除count
 * 个元素，然后在插入一系列元素
 * 返回值为被删除元素组成的数组
 */
Array.prototype.splice = function(startIndex,deleteCount,...addElements) {
  let argumentsLen = arguments.length;
  let array = Object(this);
  let len = array.length;
  let deleteArr = new Array(deleteCount);

  startIndex = computeStartIndex(startIndex,len);
  deleteCount = computeDeleteCount(startIndex,len,deleteCount,argumentsLen);
  // 拷贝删除元素
  sliceDeleteElements(array,startIndex,deleteCount,deleteArr);
  //移动删除元素后面的元素
  movePostElements(array,startIndex,len,deleteCount,addElements);

  // 判断sealed 对象和 frozen 对象 即 密封对象和冻结对象
  if(Object.isSealed(array) && deleteCount !== addElements.length) {
    throw new TypeError('the Object is a sealed object')
  } else if(Object.isFrozen(array) && (deleteCount > 0 || addElements.length > 0)) {
    throw new TypeError('the object is a frozen object!');
  }
  // 插入新元素
  for (let i=0;i<addElements.length;i++) {
    array[startIndex + i] = addElements[i];
  }

  array.length = len - deleteCount + addElements.length;
  return deleteArr;

}
// 先拷贝删除的元素
const sliceDeleteElements = (array,startIndex,deleteCount,deleteArr) => {
  for(let i=0;i<deleteCount;i++) {
    let index = startIndex + i;
    if(index in array) {
      let current = array[index];
      deleteArr[i] = current;
    }
  }
}

// 然后对删除元素后面的元素进行挪动，挪动分为三种情况
/**
 * 添加的元素和删除的元素刚好相等
 * 添加的元素个数小于删除的元素个数
 * 添加的元素个数大于删除元素的个数
 */
const movePostElements = (array,startIndex,len,deleteCount,addElements) => {
 if(deleteCount === addElements.length) return;
 // 如果添加的元素和删除的元素个数不相等，则移动后面的元素
 if(deleteCount > addElements.length) {
   // 删除的元素比新增的元素多，那么后面的元素整体向前挪动
   // 一共需要挪动len-startIndex - deleteCount 个元素
   for(let i = startIndex + deleteCount;i<len;i++) {
     let fromIndex = i;
     let toIndex = i - (deleteCount - addElements.length);
     if(fromIndex in array) {
       array[toIndex] = array[fromIndex];
     } else {
       delete array[toIndex];
     }
   }
   // 这里把后面的元素向前挪，相当于数组长度减小了，需要删除冗余元素
   // 目前长度为 len + addElements -deleteCount;
   for(let i = len -1;i>=len + addElements.length - deleteCount;i--) {
     delete array[i];
   }
 }
// 当添加元素个数大于删除元素个数时 
 if(deleteCount < addElements.length) {
  // 删除的元素比新增的元素少，那么后面的元素整体向后挪动
  for(let i = len -1;i> startIndex + deleteCount;i--) {
    let fromIndex = i;
    // 将要挪动到的目标位置
    let toIndex = i+(addElements.length - deleteCount);
    if(fromIndex in array) {
      array[toIndex] = array[fromIndex];
    } else {
      delete array[toIndex];
    }
  }
 }
}
// 当用户传来非法的startIndex 和 deleteIndex 或者负索引的时候，需要做特殊处理
const computeStartIndex = (startIndex,len) => {
  if(startIndex < 0) {
    return startIndex + len > 0 ? startIndex + len : 0;
  }
  return startIndex >= len ? len : startIndex;
}
const computeDeleteCount = (startIndex,len,deleteCount,argumentsLen) => {
  // 删除数目没有传，默认删除startIndex 及后面的所有
  if(argumentsLen === 1) {
    return len - startIndex;
  }
  // 删除数目过小
  if(deleteCount < 0) {
    return 0;
  }
  // 删除数目过大
  if(deleteCount > len - deleteCount) {
    return len - startIndex;
  }
  return deleteCount;
}

let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(2, 1, "drum",'sb');
console.log(removed)
console.log(myFish);