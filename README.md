# Static/dynamic typed Linked List realization on TypeScript

### **Methods:**

*append()* - **Adds an item to the end of the list**\
*delete()* - **Removes an item from the list by value**\
*find()* - **Searches for an item in the list by value**\
*toArray()* - **Outputs a Linked List to an array**\
*shift()* - **Adds an item to the top of the list**\
*printInfo()* - **Outputs the value of each item in the list**\
*isEmpty()* - **Checks if the list is empt**
*clear()* - **Clear the list**

### **Usage example**

> Dynamic

```TS
const linkedList = new LinkedList()

linkedList.append("World!")
linkedList.shift("Hello")

linkedList.printInfo()
linkedList.clear()
```
> Static

```TS
const linkedList = new LinkedList<number>()

linkedList.append(5)
linkedList.append(10)

linkedList.printInfo()
linkedList.clear
```
