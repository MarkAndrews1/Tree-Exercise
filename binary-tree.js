/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

        const calculateMinDepth = (node, depth) => {
          if (node === null) {
              return depth; 
          }

          const leftDepth = calculateMinDepth(node.left, depth + 1);
          const rightDepth = calculateMinDepth(node.right, depth + 1);

          return Math.min(leftDepth, rightDepth);
      };

      if (this.root === null) {
          return 0;
      }

      return calculateMinDepth(this.root, 1);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const calculateMaxDepth = (node, depth) => {
      if (node === null) {
          return depth; 
      }

      const leftDepth = calculateMaxDepth(node.left, depth + 1);
      const rightDepth = calculateMaxDepth(node.right, depth + 1);

      return Math.max(leftDepth, rightDepth);
  };

  if (this.root === null) {
      return 0;
  }

  return calculateMaxDepth(this.root, 1);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    const calculateMaxSum = (node) => {
      if (node === null) {
          return 0; 
      }

      const leftSum = Math.max(0, calculateMaxSum(node.left));
      const rightSum = Math.max(0, calculateMaxSum(node.right));

      maxPathSum = Math.max(maxPathSum, node.value + leftSum + rightSum);

      return node.value + Math.max(leftSum, rightSum);
  };


  let maxPathSum = Number.NEGATIVE_INFINITY;


  if (this.root === null) {
      return 0;
  }

  calculateMaxSum(this.root);

  return maxPathSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null; 

    const inorderTraversal = (node) => {
        if (node === null) {
            return;
        }

        inorderTraversal(node.left);

        if (node.value > lowerBound && (result === null || node.value < result)) {
            result = node.value;
        }

        inorderTraversal(node.right);
    };

    inorderTraversal(this.root);

    return result;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
