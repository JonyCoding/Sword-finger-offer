//暴力解法
/*
function Find(target, array)
{
                // write code here
    let i,j;
    for(i = 0; i<array.length; i++){
        for(j = 0; j<array.length;j++ ){
            if(array[i][j] === target){
                return true;
            }
        }
    }
    return false;
}
*/
// 从左下角查找，降低时间复杂度
function Find(target, array)
{
   // write code here
    let i = 0;
    let j = (array.length-1);
    while(j >= 0 && i < array[0].length){
        if(array[i][j] < target){
            i++;
        }else if(array[i][j] > target){
            j--;
        }else{
            return true
        }
    }
    return false;
}