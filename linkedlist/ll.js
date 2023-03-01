// let head

class Node{
    constructor(val){
        this.val = val
        this.next = null

    }
}

function printlist(head){
    let n = head
    while(n!=null){
        console.log(n.val)
        n = n.next
    }
}


let head = new Node(1)
let second = new Node(2)
let third = new Node(3)

// head = first 
head.next = second
second.next = third 

printlist(head)