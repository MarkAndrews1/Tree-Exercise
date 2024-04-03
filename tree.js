class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }


  sumValues() {
    const traverseAndSum = (node) => {
      if (node === null) {
          return 0;
      }

      let sum = node.val;
      for (const child of node.children) {
          sum += traverseAndSum(child);
      }
      return sum;
    };


    return traverseAndSum(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens() {
    const countEvensHelper = (node) => {
      if (node === null) {
        return 0;
      }
      let count = node.val % 2 === 0 ? 1 : 0;
      for (const child of node.children) {
        count += countEvensHelper(child);
      }
      return count;
    };

    return countEvensHelper(this.root);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const numGreaterHelper = (node, lowerBound) => {
      if (node === null) {
        return 0;
      }
      let count = node.val > lowerBound ? 1 : 0;
      for (const child of node.children) {
        count += numGreaterHelper(child, lowerBound);
      }
      return count;
    };

    return numGreaterHelper(this.root, lowerBound);
  }
}

module.exports = { Tree, TreeNode };
