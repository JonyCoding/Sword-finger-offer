//暴力解法
/*
function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length == 0){
        return 0
    }
    for(let i = 0; rotateArray[i];i++){
        if(rotateArray[i] > rotateArray[i+1]){
            return rotateArray[i+1];
        }
    }
}
*/
//正确的解法——二分查找
function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length == 0){
        return 0
    }
    var left = 0,
        right = rotateArray.length-1,
        mid = 2;
    while(left<right){
        if (rotateArray[left] < rotateArray[right]) {
            //如果最左边小于最右边，那就说明根本木有旋转
                return rotateArray[left];
            }
        //取中间位置指针
        mid = (right+left)/2;
        //如果中间的，大于最左边的，说明最小值在中间的右边，那把最左边的指针移到中间位置的下一个位置
        if(rotateArray[mid] > rotateArray[left]){
            left = mid+1;
        }
        //如果中间的，小于最右边的，说明最小值在中间的左边【789123456】
        else if(rotateArray[mid] < rotateArray[right]){
            right = mid;
        }else{
            left++;
        }
    }
     return rotateArray[left];
}