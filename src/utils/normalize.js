export const completedId = (todos={})=>{
    let list = []; 
    let claves = Object.keys(todos);
    for (let i = 0; i < claves.length; i++) {
        let clave = claves[i];
        if(todos[clave].completed == true){
            list.push(clave);
        }
    }
    return list;

}

export const activeId =  (todos={}) =>{
    let list = []; 
    let claves = Object.keys(todos);
    for (let i = 0; i < claves.length; i++) {
        let clave = claves[i];
        if(todos[clave].completed == false){
            list.push(clave);
        }
    }
    return list;
}