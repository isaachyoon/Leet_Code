var levelOrderBottom = function(root) {
  let res = [];
  levelOrderBottomHelper(root, 0, res);
  let solution = [];
  for (let i = res.length - 1; i >= 0; i--) {
    solution.push(res[i]);
  }
  return solution;
};

function levelOrderBottomHelper(root, ind, res) {
  if(!root) {
    return;
  }

  if (res[ind] === undefined) {
    res[ind] = [];
  }
  res[ind].push(root.val);
  levelOrderBottomHelper(root.left, ind+1, res);
  levelOrderBottomHelper(root.right, ind+1, res)
}

// var levelOrderBottom = function(root) {
//   let res = [];
//   let queue = [];
//   queue.push(root)
//   while (queue.length > 0) {
//     let qLen = queue.length;
//     let temp = [];
//     console.log(qLen);
//     for (let i = 0; i < qLen ; i++) {
//       let parent = queue.shift();
//       temp.push(parent.val);
//       if(parent.left) {
//         queue.push(parent.left);
//       }
//       if(parent.right) {
//         queue.push(parent.right);
//       }
//     }
//     res.splice(0,0,temp);
//   }
//   return res;
// };

function node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let a = new node('a');
let b = new node('b');
let c = new node('c');
let d = new node('d');
let e = new node('e');

a.left = b;
a.right = c;
c.left = d;
c.right = e;

let res = levelOrderBottom(a);
console.log(res)
