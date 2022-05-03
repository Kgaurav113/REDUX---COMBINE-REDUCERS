export const loaddata=(key)=>{
    try{
        let load=localStorage.getItem(key)
        console.log(load,"local")
        load=JSON.parse(load)
        return load
    }

    catch(e){
        return undefined
    }

}
export const savedata=(key,payload)=>{
    localStorage.setItem(key,JSON.stringify(payload))
}