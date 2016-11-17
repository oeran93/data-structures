/*
* @file
* 
*	pass in 'max' or 'min' to get a max or min heap
* max-heap by default
*
* INDEX IS INTENDED TO START AT 1 EXCEPT WHEN ACCESSING HEAP ARRAY
*/
module.exports = function (order = 'max') {

		var public = {}

		var heap = []

		public.get_heap = () => heap
		public.set_heap = (h) => heap = h

		/* 
		* determines if parent and child are in the wrong order
		* changes depending on min or max heap
		*/ 
		var wrong = order === 'max' ? (a, b) => a < b : (a, b) => a > b

		/*
		* calculates the parent of the given node
		* @param index {Number} index of the child
		* @return {Number} parent index
		*/
		function parent (index) {
			return  Math.floor(index/2)
		}

		/*
		* calculates the left child of the given node
		* @param index {Number} index of the parent
		* @return {Number} left child index
		*/
		function left (index) {
			return index*2 > heap.length ? false : index*2
		}

		/*
		* calculates the right child of the given node
		* @param index {Number} index of the parent
		* @return {Number} right child index
		*/
		function right (index) {
			return (index*2)+1 > heap.length ? false : (index*2)+1
		}

		/*
		* swaps two numbers in the heap
		* @param a {Number} index of first number
		* @param b {Number} index of second number 
		* @return {boolean} false if it could not swap the numbers. True otherwise
		*/
		function swap (a, b) {
			if (a > heap.length || b > heap.length) return false
			var temp = heap[a-1]
			heap[a-1] = heap[b-1]
			heap[b-1] = temp
			return true
		}

		/*
		* pushes an item on the heap and puts it in order
		* @param data {data} data to push in the heap
		* @return {boolean} false if it could not push the data. True otherwise
		*/
		public.push = function (data = null) {
			if (data == null) return false
			heap.push(data)
			order_push()
			return true
		}

		/*
		* orders the item at index on the heap recursively.
		* swaps it with parent if it is bigger/smaller
		* @param index {Number} index of the item to order
		*/
		function order_push (index = heap.length) {
			if (index == 1) return
			if (wrong(heap[parent(index)-1], heap[index-1])) {
				swap(parent(index),index)
				order_push(parent(index))
			}
		}

		/*
		* pops an item from the heap and re orders the heap
		* @return {boolean, data} false if heap was empty. data of root node
		*/
		public.pop = function () {
			if (heap.length == 0) return false
			var res = heap[0]
			heap[0] = heap[heap.length-1]
			heap = heap.slice(0,-1)
			order_pop()
			return res
		}

		/*
		* orders the item at index on the heap recursively.
		* swaps it with biggest child untill it is bigger than both childs
		* @param index {Number} index of the item to order
		*/
		function order_pop (index = 1) {
			if (left(index) && right(index)) {
				if (heap[left(index)-1] > heap[right(index)-1]) {
					swap(index,left(index))
					order_pop(left(index))
				} else {
					swap(index,right(index))
					order_pop(right(index))
				}
			} else if (right(index)) {
				swap(index,right(index))
				order_pop(right(index))
			} else if (left(index)) {
				swap(index,left(index))
				order_pop(left(index))
			}
		}

		return public

}