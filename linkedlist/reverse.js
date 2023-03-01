class Node{
    constructor(val){
        this.data = val
        this.next = null
    
    }
}

class Linkedlist{
    constructor(){
        this.head = null
    }

    printlist(){
        let n= this.head 
        while(n!=null){
            console.log(n.data)
            n = n.next 
        }


    }

    reverse(){
        let current = this.head 
        let prev = null
        while(current!=null){
            let nex = current.next 
            current.next = prev 
            prev = current 
            current = nex 
        }
        this.head = prev
    }
}


ll = new Linkedlist()
ll.head = new Node(1)
ll.head.next  = new Node(2)
ll.head.next.next = new Node(3)
ll.head.next.next.next = new Node(4)
ll.head.next.next.next.next = new Node(5)

console.log("List:")
ll.printlist()

console.log("Reversed List:")
ll.reverse()
ll.printlist()
