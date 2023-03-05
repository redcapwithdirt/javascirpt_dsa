class Stack{
    constructor(){
        this.stack = []
        this.top = -1
    }

    add(val){
        if(this.isFull()){
            return -1
        }
        this.stack.push(val)
        this.top++
    }

    delete(){
        if(this.isEmpty()){
            return -1
        }
        this.top--
        return this.stack.pop()
    }

    isEmpty(){
        if(this.top==-1){
            return true
        }
        else{
            return false
        }
    }

    isFull(){
        if(this.top==10){
            return true
        }
        else{
            return false
        }
    }

    print(){
        console.log(this.stack)
    }

}

let stack = new Stack()
stack.add(1)
stack.add(10)
stack.add(15)
stack.add(20)

stack.print()

stack.delete()
stack.print()
stack.delete()
stack.print()

stack.delete()
stack.delete()
if(stack.isEmpty()){
    console.log("Empty")
}
else{
    console.log("Not Empty")
}

stack.add(45)
stack.add(1)
if(stack.isEmpty()){
    console.log("Empty")
}
else{
    console.log("Not Empty")
}

