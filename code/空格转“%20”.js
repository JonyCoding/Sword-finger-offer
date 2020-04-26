//js内置函数
function replaceSpace(str)
{
    // write code here\
   // return str.replace(/ /g,"%20");
}

//自己实现
function replaceSpace(str)
{
    // write code here\
   // return str.length;
    if(!str || str.length == 0){
        return ""
    }
    var str1 = "";
    for(let i = 0;i<str.length;i++){
        if(str[i] == " "){
            str1 += "%20"
        }else{
             str1 += str[i]
        }
    }
    return str1;
}