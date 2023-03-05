function priority(check){
    if(check=="^"){
        return 3
    }
    else if(check=="*" || check=="/"){
        return 2
    }
    else if(check=="+" || check=="-"){
        return 1
    }
}

function infixtopostfix(string){
    let postfix = ""
    let stack = []
    let top = -1

    for(let i = 0;i<string.length;i++){
        
        if(string[i]=="*" || string[i]=="+" || string[i]=="^" || string[i]=="/" || string[i]=="-"){
            if(stack.length ==0){
                stack.push(string[i])
                top++
            }
            else{
                if(priority(stack[top])>=priority(string[i])){
                    while(stack.length != 0){
                        let a = stack.pop()
                        top--
                        postfix += a
                    }
                    stack.push(string[i])
                    top++
                }
                else{
                    stack.push(string[i])
                    top++
                }

            }
        }
        else if(string[i]=="("){
            stack.push(string[i])
            top++
        }
        else if(string[i]==")"){
            while(stack[top]!="("){
                let a=stack.pop()
                top--
                postfix += a
            }
            stack.pop()
            top--
        }-
        else{
            postfix += string[i]
        }
             
    }

    while(stack.length != 0){
        let a= stack.pop()
        top--
        postfix += a
    }

    return postfix
}


let string = "A^B*C/(D*E-F)"
let ans = infixtopostfix(string)
console.log(ans)