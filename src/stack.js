/*
* @file
* 
* Simple implementation of a stack data structure
* If size is not specified it will assume an infinite stack
*
* If stack is full or empty and a push or pop or peek operation is attempted,
* no error is thrown but a message alerting of the stack state is printed
*/

module.exports = function (size) {
  
  public = {}
  var store = []

  /*
  * pushes an item on stack
  *
  * @param {object} item
  *	item to be pushed on stack
  */
  public.push =  function (item) {
    if (this.isFull()) {
      console.log('stack is full')
    } else {
      store[store.length] = item
    }
  }

  /*
  * pops item on top of the stack
  *
  * @return
  *	the item on top of the stack
  */
  public.pop = function () {
    if (this.isEmpty()) {
      console.log('stack is empty')
    } else {
      var item = store[store.length - 1]
      store.splice(store.length - 1, 1)
      return item
    }
  }

  /*
  * shows the item on top of the stack
  *
  * @return
  *	item on top of the stack 
  */
  public.peek = function () {
    if (this.isEmpty()) {
      console.log('stack is empty')
    } else {
      return store[store.length - 1]
    }
  }

  /*
  * check if stack if full. If no size was specified it returns false
  *
  * @return
  *	true if stack is full, false otherwise
  */
  public.isFull = function () {
    if (size && store.length >= size) {
      return true
    }
    return false
  }

  /*
  * check if stack if empty
  *
  * @return
  *	true if stack is empty, false otherwise
  */
  public.isEmpty = function () {
    return !store.length
  }

  /*
  * prints the current state of the stack
  */
  public.show = function () {
    console.log(store.slice().reverse())
  }

  return public
  
}
