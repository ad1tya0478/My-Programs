const strs = "(){}";

var isValid = function(s) {
        let flag = false;
    for(let i=0;i<s.length;i++){
        if(s[i] === '('){
                if(s[i+1] === ')'){
                flag = true;
            } else {
                flag = false;
                continue;
            }
        } else if(s[i] === '['){
            if(s[i+1]===']'){
                flag = true;
            } else {
                    flag = false;
                continue;
            }
        } else if(s[i]==='{'){
            if(s[i+1]==='}'){
                    flag = true;
                } else {
                        flag = false;
                continue;
            }
        } else if(s[i]===')' && flag!=true) {
            flag = false;
        } else if(s[i]===']' && flag!=true){
                flag = false;
        } else if(s[i]==='}' && flag!=true){
            flag = false;
        }
    }
    return flag;
};