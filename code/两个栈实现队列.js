var stack1 = [];
var stack2 = [];
function push(node)
{
    // write code here
    stack1.push(node)
}
function pop()
{
    // write code here
    //如果队列2不是空的先清空
    while(stack2.length){
        stack2.pop();
    }
    //将栈1中的元素一次push到栈2
    while(stack1.length){
        stack2.push(stack1.pop());
        }
    //取出第一个元素
    var num = stack2.pop();
    //再将栈2中的元素pop()回栈1
    while(stack2.length){
        stack1.push(stack2.pop());
        }
    //返回取出的那个元素，即完成了一次pop()
    return num;
    //实际上栈2 只是起到了一个缓冲取反的作用，并不真的储存元素
}
