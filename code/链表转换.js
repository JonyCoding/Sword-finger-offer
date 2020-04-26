/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    var arr = [];
    while(head){
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
}