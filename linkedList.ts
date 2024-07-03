type nodeOrNull = ListNode | null

interface ILinkedList {
	head: nodeOrNull
	tail: nodeOrNull
	size: Number

	getHead(): nodeOrNull
	getTail(): nodeOrNull
	append(value: any): ListNode
	delete(value: any): boolean
	find(value: any): nodeOrNull
	toArray(): any[]
	shift(value: any): ListNode
	isEmpty(): boolean
	clear(): boolean
	printInfo(): void
}

interface IListNode {
	nextNode: nodeOrNull
	value: any
}

class LinkedList implements ILinkedList {
	public tail: nodeOrNull
	public head: nodeOrNull

	public size: number = 0

	constructor() {
		this.head = null
		this.tail = this.head
	}

	getHead(): nodeOrNull {
		return this.head
	}

	getTail(): nodeOrNull {
		return this.tail
	}

	append(value: any): ListNode {
		const newListNode = new ListNode(value)

		if (this.isEmpty()) {
			this.head = newListNode
			this.tail = newListNode
		} else {
			this.tail!.nextNode = newListNode
			this.tail = newListNode
		}

		this.size++

		return this.tail
	}

	delete(value: any): boolean {
		let currentNode = this.head
		let prevNode = currentNode

		while (currentNode) {
			if (currentNode.value === value) {
				if (currentNode === this.head) {
					this.head = currentNode.nextNode
				} else if (currentNode === this.tail) {
					prevNode!.nextNode = null

					this.tail = prevNode
				} else {
					prevNode!.nextNode = currentNode.nextNode
				}

				this.size--

				return true
			}

			prevNode = currentNode
			currentNode = currentNode.nextNode
		}

		return false
	}

	find(value: any): nodeOrNull {
		let currentNode = this.head

		while (currentNode) {
			if (currentNode.value === value) {
				return currentNode
			}

			currentNode = currentNode.nextNode
		}

		return null
	}

	toArray(): any[] {
		const linkedListItems: any[] = []
		let currentNode = this.head

		while (currentNode) {
			linkedListItems.push(currentNode.value)
			currentNode = currentNode.nextNode
		}

		return linkedListItems
	}

	shift(value: any): ListNode {
		const newListNode = new ListNode(value)
		const isEmpty = this.head ? false : true

		newListNode.nextNode = this.head

		this.head = newListNode
		this.size++

		if (isEmpty) this.tail = this.head

		return this.head
	}

	isEmpty(): boolean {
		return this.head ? false : true
	}

	clear(): boolean {
		if (this.head) {
			this.head = null
			this.tail = null
			this.size = 0
		}

		return true
	}

	printInfo(): void {
		let currentNode = this.head

		if (currentNode) {
			console.log(`Element: ${currentNode.value}`)

			while (currentNode) {
				if (currentNode.nextNode) {
					console.log(`Element: ${currentNode.nextNode.value}`)
				}

				currentNode = currentNode.nextNode
			}
		} else {
			console.log("List is empty")
		}
	}
}

class ListNode implements IListNode {
	public nextNode: nodeOrNull = null

	constructor(public value: any) {}
}

/*
append() - Adds an item to the end of the list
delete() - Removes an item from the list by value
find() - Searches for an item in the list by value
toArray() - Outputs a Linked List to an array
shift() - Adds an item to the top of the list
printInfo() - Outputs the value of each item in the list
isEmpty() - Checks if the list is empty
clear() - Clear the list
*/
