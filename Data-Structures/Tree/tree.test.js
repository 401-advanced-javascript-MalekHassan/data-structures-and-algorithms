const { Node } = require('./tree');
const { BinaryTree } = require('./tree');
const { BinarySearchTree } = require('./tree');

describe('Binary Tree tests', () => {
  it('can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree).toBeDefined();
  });

  it('can successfully instantiate a tree with a single root node', () => {
    const hassan = new Node('hassan');
    const tree = new BinaryTree(hassan);
    expect(tree.root.value).toBe('hassan');
  });

  it('can successfully add a left child and right child to a single root node', () => {
    const walid = new Node('walid');
    const abdullah = new Node('abdullah');
    const ahmad = new Node('ahmad', abdullah, walid);
    const tree = new BinaryTree(ahmad);
    expect(tree.root.left.value).toBe('abdullah');
    expect(tree.root.right.value).toBe('walid');
  });

  it('can successfully return a collection from a preorder traversal', () => {
    const meme = new Node('meme');
    const malek = new Node('malek');
    const majd = new Node('majd');
    const yahya = new Node('yahya');
    const walid = new Node('walid', majd, yahya);
    const abdullah = new Node('abdullah', malek, meme);
    const ahmad = new Node('ahmad', abdullah, walid);
    const tree = new BinaryTree(ahmad);
    expect(tree.preOrder()).toEqual([
      'ahmad',
      'abdullah',
      'malek',
      'meme',
      'walid',
      'majd',
      'yahya',
    ]);
  });

  it('can successfully return a collection from an inorder traversal', () => {
    const meme = new Node('meme');
    const malek = new Node('malek');
    const majd = new Node('majd');
    const yahya = new Node('yahya');
    const walid = new Node('walid', majd, yahya);
    const abdullah = new Node('abdullah', malek, meme);
    const ahmad = new Node('ahmad', abdullah, walid);
    const tree = new BinaryTree(ahmad);
    expect(tree.inOrder()).toEqual([
      'malek',
      'abdullah',
      'meme',
      'ahmad',
      'majd',
      'walid',
      'yahya',
    ]);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    const meme = new Node('meme');
    const malek = new Node('malek');
    const majd = new Node('majd');
    const yahya = new Node('yahya');
    const walid = new Node('walid', majd, yahya);
    const abdullah = new Node('abdullah', malek, meme);
    const ahmad = new Node('ahmad', abdullah, walid);
    const tree = new BinaryTree(ahmad);
    expect(tree.postOrder()).toEqual([
      'malek',
      'meme',
      'abdullah',
      'majd',
      'yahya',
      'walid',
      'ahmad',
    ]);
  });
});

describe('Binary Search Tree tests', () => {
  it('can successfully instantiate an empty BinarySearchTree', () => {
    const tree = new BinarySearchTree();
    expect(tree).toBeDefined();
  });

  it('can add values to the correct location in the BinarySearchTree', () => {
    const node1 = new Node(1);
    const tree = new BinarySearchTree(node1);
    tree.add(3);
    tree.add(4);
    tree.add(2);
    expect(tree.inOrder()).toEqual([1, 2, 3, 4]);
  });

  it('can successfully return true if a value is in the tree at least once', () => {
    const node1 = new Node(1);
    const tree = new BinarySearchTree(node1);
    console.log('TREE???', tree);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    expect(tree.contains(4)).toBe(true);
  });

  it('can successfully return false if a value is not in the tree at least once', () => {
    const node1 = new Node(1);
    const tree = new BinarySearchTree(node1);
    console.log('TREE???', tree);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    expect(tree.contains(8)).toBe(false);
  });
});
