/**
 * 二分查找如何确定左边界和右边界
 * 
 */

 let search  = (arr,target) => {
   let begin = 0;
   // 搜索区间变为了 [begin,end]这是一个闭区间
   let end = arr.length - 1;
   // 因为闭区间，所以到了begin 等于 end时，其实区间还有一个值要
   //判断。因此只有 begin > end 的时候才能停止
   while(begin <= end) {
     // 位运算，无符号右移一位，同 Math.floor((begin + end) /2 )
     let mid = (begin  + end) >>> 1;
     if(arr[mid] == target) {
       return mid;
     } else if(arr[mid] > target) {
       // 因为是闭区间，搜索范围变为了[left, mid -1]
       end = mid - 1;
     }
     else if (arr[mid] < target) {
       begin = mid + 1; // 搜索范围变为 [mid+1,end]
     }
   }
   return -1;
 }

 /**
  * 真题： 在排序数组中 查找元素的第一个和最后一个位置
  * 给定一个按照升序排列的整数数组，和一个目标target.找出给定目标值在数组中的
  * 开始位置和结束位置，
  * 算法时间复杂度必须是O(log n) 级别
  * 如果数组中不存在目标值，则返回 [-1,-1]
  * 例子 ：
  * 输入 nums = [5,7,7,8,8,9], target = 8
  * 输出 [3,4]
  * 解析： O(log n) 级别的时间复杂度，说白了就是 二分法查找，我们需要
  * 用二分法查找的方式找到目标值最左边的位置和最右边的位置。
  */

var searchRange = function(nums,target) {
  // 寻找左边界位置
  let left = 0;
  let mid;
  let right = nums.length;
  while(left < right) {
    mid = (left + right) >>> 1;
    if(nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] == target){
      right = mid;
    }
  }
  let leftIndex = -1,rightIndex = -1;
  if(left == nums.length) return [-1,-1];
  else leftIndex = nums[left] == target ? left : -1;

  // 寻找右边界
  left = 0; right = nums.length;
  while(left < right) {
    mid = (left + right) >>> 1;
    if(nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] == target) {
      left = mid + 1;
    }
  }
  if (left == 0) return [-1,-1];
  else rightIndex = nums[left -1] == target ? left -1 : -1;
  return [leftIndex,rightIndex];
};