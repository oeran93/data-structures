/*
* @file
* 
* Simple implementation of a binary search tree data structure
*
* Allows search, insert and delete
*/
module.exports = function () {

  var public = {}

  root_node = null

  _node = {
    data: null,
    left: null,
    right: null,
    parent: null
  }

  /*
  * Creates a new node
  * @param data {string,number} data
  * @param parent {object} parent node
  *   default: null
  */
  function create_node (data, parent = null) {
    var n_node = Object.create(_node)
    n_node.data = data
    n_node.parent = parent
    return n_node
  }

  /*
  * Finds the node containing the specified data and returns it
  * @param data {string,number} data to search for
  * @param node {object} node to start from
  * @return {boolean,object} false if not found, the node containing 
  * the data otherwise
  */
  public.search = function (data, node = root_node) {
    if (!node) return false
    if (node.data === data) {
      return node
    } else if (data < node.data) {
      return this.search(data, node.left)
    }
    return this.search(data, node.right)
  }

  /*
  * Inserts data in a node in the appropriate position
  * @param data {string,number} 
  *   data to insert
  */
  public.insert = function (data, node = root_node) {
    if (!node) {
      root_node = create_node(data)
    } else {
      if (data < node.data) {
        if (!node.left) {
          node.left = create_node(data,node)
        } else {
          return public.insert(data, node.left)
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = create_node(data,node)
        } else {
          return public.insert(data, node.right)
        }
      }
    }
  }

  /*
  * finds smallest node in a tree
  * @param node {object} root node of tree or subtree
  * @return {boolean,object} false if it did not find it or the smallest node
  */
  function findSmallest (node) {
    if (!node) return false
    else if (!node.left) return node
    return findSmallest(node.left)
  }

  /*
  * Deletes a node with 0 or one child
  * @param node {object} node with one child
  */
  function delete_not_two (node) {
    if (node.data < node.parent.data) {
      node.parent.left = node.left ? node.left : node.right
    } else {
      node.parent.right = node.left ? node.left : node.right
    }
  }

  /*
  * Deletes a node with two children
  * @param node {object} node with two children
  */
  function delete_two (node) {
    var rep = findSmallest(node.right)
    var data = rep.data
    delete_not_two(rep)
    node.data = data
  }

  /*
  * Deletes a node from the tree
  * @param data {string} data contained by the node to delete
  */
  public.delete = function (data) {
    var node = this.search(data)
    if (node.left && node.right) {
      delete_two(node)
    } else {
      delete_not_two(node)
    }
  }

  /*
  * Prints the inorder traversal of the tree
  * @param node {object} root node
  */
  public.inorder_traversal = function (node = root_node) {
    if (!node) return
    this.inorder_traversal(node.left)
    console.log(node.data)
    this.inorder_traversal(node.right)
  }

  return public
}
