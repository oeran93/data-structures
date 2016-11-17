var should = require('should')

describe('max heap', () => {

	it('grows after push', done => {
		var heap = require('../src/heap.js')()
		heap.push(3)
		heap.get_heap().length.should.equal(1)
		done()
	})

	it('does not push null elements', done => {
		var heap = require('../src/heap.js')()
		heap.push()
		heap.get_heap().length.should.equal(0)
		done()
	})

	it('orders heap after pushing', done => {
		var heap = require('../src/heap.js')()
		heap.push(1)
		heap.push(5)
		heap.push(10)
		heap.push(2)
		heap.get_heap()[0].should.equal(10)
		heap.get_heap()[1].should.equal(2)
		heap.get_heap()[2].should.equal(5)
		heap.get_heap()[3].should.equal(1)
		done()
	})

	it('shrinks after pop', done => {
		var heap = require('../src/heap.js')()
		heap.push(3)
		heap.pop()
		heap.get_heap().length.should.equal(0)
		done()
	})

	it('returns false if pop empty', done => {
		var heap = require('../src/heap.js')()
		heap.pop().should.equal(false)
		done()
	})

	it('returns biggest element when popping', done => {
		var heap = require('../src/heap.js')()
		heap.push(1)
		heap.push(-5)
		heap.push(10)
		heap.push(2)
		heap.push(-3)
		heap.pop().should.equal(10)
		done()
	})

	it('orders heap after popping', done => {
		var heap = require('../src/heap.js')()
		heap.push(1)
		heap.push(5)
		heap.push(10)
		heap.push(-2)
		heap.pop()
		heap.get_heap()[0].should.equal(5)
		heap.get_heap()[1].should.equal(1)
		heap.get_heap()[2].should.equal(-2)
		done()
	})

})

describe('min heap', () => {

	it('grows after push', done => {
		var heap = require('../src/heap.js')('min')
		heap.push(3)
		heap.get_heap().length.should.equal(1)
		done()
	})

	it('does not push null elements', done => {
		var heap = require('../src/heap.js')('min')
		heap.push()
		heap.get_heap().length.should.equal(0)
		done()
	})

	it('orders heap after pushing', done => {
		var heap = require('../src/heap.js')('min')
		heap.push(1)
		heap.push(5)
		heap.push(10)
		heap.push(2)
		heap.get_heap()[0].should.equal(1)
		heap.get_heap()[1].should.equal(2)
		heap.get_heap()[2].should.equal(10)
		heap.get_heap()[3].should.equal(5)
		done()
	})

	it('shrinks after pop', done => {
		var heap = require('../src/heap.js')('min')
		heap.push(3)
		heap.pop()
		heap.get_heap().length.should.equal(0)
		done()
	})

	it('returns false if pop empty', done => {
		var heap = require('../src/heap.js')('min')
		heap.pop().should.equal(false)
		done()
	})

	it('returns smallest element when popping', done => {
		var heap = require('../src/heap.js')('min')
		heap.push(1)
		heap.push(-5)
		heap.push(10)
		heap.push(2)
		heap.push(-3)
		heap.pop().should.equal(-5)
		done()
	})

	it('orders heap after popping', done => {
		var heap = require('../src/heap.js')('min')
		heap.push(1)
		heap.push(5)
		heap.push(10)
		heap.push(-2)
		heap.pop()
		heap.get_heap()[0].should.equal(1)
		heap.get_heap()[1].should.equal(5)
		heap.get_heap()[2].should.equal(10)
		done()
	})

})