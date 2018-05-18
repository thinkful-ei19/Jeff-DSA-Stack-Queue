
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next; 
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return;
    }
    this.top = new _Node(data, this.top);
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}
function is_palindrome(stack) {
  let tempStack = new Stack();
  stack = stack.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  for(let i = 0; i < stack.length; i++) {
    tempStack.push(stack[i]);
  }

  for (let i = 0; i < stack.length; i++) {
    let currentLetter = tempStack.pop();
    if (currentLetter !== stack[i]) {
      return false;
    } 
  }
  return true;
}
function peek(stack) {
  if (!stack.top) return 'The stack is empty';
  return stack.top.data;
}

function display(stack) {
  if (!stack.top) return 'The stack is empty';

  let current = stack.top;

  while (current) {
    console.log(current.data);
    current = current.next;
  }
}
function matchParentheses(str){
  let newStack = new Stack();
  let counter = 0;
  for(let i =0; i<str.length; i++){
      if(str[i] === '('){
          newStack.push(str[i]);
          counter++;
      }
      if(str[i] === ')' && !newStack.top){
          return new Error(`Missing an open parenthesis at ${counter}`);
      }
      if(str[i] === ')'){
          newStack.pop();
          counter++;
      }
      if(newStack.top === '('){
          return new Error(`Missing closing parenthesis at ${counter}`);
      }
  }
  return true;

}
function sortStack(stack){
  let holderStack = new Stack();
  if(!stack.top){
      return;
  } 
  for(let i =0; i< stack.length; i++){

  }
}
function main(){
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spoch');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.pop();
  starTrek.pop();
  
  console.log(JSON.stringify(matchParentheses('((()))'))); 
  peek(starTrek)
  display(starTrek)
}
main()