function ListNode(val) {
  this.val = val;
  this.next = null;
}

let removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy, second = dummy;
  for (let i = 0; i < n + 1 ; i++) {
    first = first.next;
  }
  while(first) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
};

let node = new ListNode(1);
let a = node.next = new ListNode(2);
let b = a.next = new ListNode(3);
let c = b.next = new ListNode(4);

removeNthFromEnd(node, 4);