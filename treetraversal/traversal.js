class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

function inorder(root,array=[]){
    if(root==null){
        return 
    }
    inorder(root.left)
    console.log(root.data)
    inorder(root.right)
}

function preorder(root){
    if(root==null){
        return
    }
    console.log(root.data)
    preorder(root.left)
    preorder(root.right)
}

function postorder(root,array=[]){
    if(root==null){
        return
    }
    postorder(root.left)
    postorder(root.right)
    console.log(root.data)
}

let root = new Node(1)
root.left = new Node(12)
root.left.left = new Node(5)
root.left.right = new Node(6)
root.right = new Node(9)

console.log("Inorder Traversal")
inorder(root)

console.log("Pre-Order Traversal")
preorder(root)

console.log("Post-Order Traversal")
postorder(root)
