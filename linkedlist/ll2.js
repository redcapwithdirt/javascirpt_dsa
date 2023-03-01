
class Node{
    constructor(val){
        this.data = val
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null
    }

    printlist(){
        let n = this.head
        while(n!=null){
            console.log(n.data)
            n = n.next
        }
    }
}

ll = new LinkedList()
ll.head = new Node(1)
ll.head.next = new Node(10)
ll.head.next.next = new Node(11)
ll.head.next.next.next = new Node(100)

ll.printlist()