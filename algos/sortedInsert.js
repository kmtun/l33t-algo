function sortedInsert(stack, element) {
  const tempStack = new Stack();
  // pop stack until element is in the right position
  // store removed elements
  while (stack.peek() < element) {
    tempStack.push(stack.pop());
  }
  // push element into stack
  stack.push(element);
  // push all the removed elements back into stack
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
  // return stack
  return stack;
}