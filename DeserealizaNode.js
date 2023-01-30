/**
Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

const serialize = (root) => {
  const vals = [];
  
  const encode = node => {
    if (node) {
      vals.push(node.val.toString());
      encode(node.left);
      encode(node.right);
    } else {
      vals.push('-')
    }
  }
  
  encode(root);
  
  return vals.toString();
}

const deserialize = (serializedBt) => {
  const vals = serializedBt.split(',');
  
  const decode = () => {
    const val = vals.shift();
    
    if (val === '-') return;
    
    const node = {
      val,
    };
    
    node.left = decode();
    node.right = decode();
    
    return node;
  }
  
  return decode();
}

// Test
class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const leftNode = new Node('left', new Node('left.left'));
const rightNode = new Node('right');
const node = new Node('root', leftNode, rightNode);

const serializedBt = serialize(node);
deserialize(serializedBt);
 
 
 