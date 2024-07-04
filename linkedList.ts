interface ILinkedList<Type> {
	head: ListNode<Type> | null
	tail: ListNode<Type> | null
	size: Number

	getHead(): ListNode<Type> | null
	getTail(): ListNode<Type> | null
	append(value: Type): ListNode<Type>
	delete(value: Type): boolean
	find(value: Type): ListNode<Type> | null
	toArray(): Type[]
	shift(value: Type): ListNode<Type>
	isEmpty(): boolean
	clear(): boolean
	printInfo(): void
}

interface IListNode<Type> {
	nextNode: ListNode<Type> | null
	value: Type
}

class LinkedList<Type> implements ILinkedList<Type> {
	public tail: ListNode<Type> | null
	public head: ListNode<Type> | null

	public size: number = 0

	constructor() {
		this.head = null
		this.tail = this.head
	}

	getHead(): ListNode<Type> | null {
		return this.head
	}

	getTail(): ListNode<Type> | null {
		return this.tail
	}

	append(value: Type): ListNode<Type> {
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

	delete(value: Type): boolean {
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

	find(value: Type): ListNode<Type> | null {
		let currentNode = this.head

		while (currentNode) {
			if (currentNode.value === value) {
				return currentNode
			}

			currentNode = currentNode.nextNode
		}

		return null
	}

	toArray(): Array<Type> {
		const linkedListItems: Array<Type> = []
		let currentNode = this.head

		while (currentNode) {
			linkedListItems.push(currentNode.value)
			currentNode = currentNode.nextNode
		}

		return linkedListItems
	}

	shift(value: Type): ListNode<Type> {
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

class ListNode<Type> implements IListNode<Type> {
	public nextNode: ListNode<Type> | null = null

	constructor(public value: Type) {}
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
