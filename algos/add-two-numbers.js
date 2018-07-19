function ListNode(val) {
  this.val = val;
  this.next = null;
}

let addTwoNumbers = function (l1, l2) {
  let sum = 0, carry = 0, result = null, temp = null, prev = null;;
  while(l1 || l2) {
    let num1 = 0, num2 = 0;
    //incase one list is shorter than the other list
    if(l1) num1 = l1.val;
    if(l2) num2 = l2.val;
    //carry if addition is over >= 10
    sum = carry + num1 + num2;
    if(sum >= 10) {
      // each node value is only going to be single digit value
      carry = 1; //carry is gonna be 1 regardless because 9 + 9 = 18
    }
    else {
      carry = 0;
    }
    sum = sum % 10;
    //create new temp node;
    temp = new ListNode(sum);
    //check for beginning of linked list
    if(result === null) {
      result = temp;
    }
    else {
      prev.next = temp;
    }
    prev = temp;
    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
  }
  //edge case incase if list only has one digit each and it has carry
  //or last number has carry
  if(carry > 0) {
    prev.next = new ListNode(carry);
  }
  return result;
};

let list = new ListNode(5);
let nodeB = list.next = new ListNode(4);
let nodeC = nodeB.next = new ListNode(3);

let list2 = new ListNode(5);
let nodeD = list2.next = new ListNode(6);
let nodeE = nodeD.next = new ListNode(4);

// let list = new ListNode(1);
// let nodeB = list.next = new ListNode(8);

// let list2 = new ListNode(0);
addTwoNumbers(list, list2);

