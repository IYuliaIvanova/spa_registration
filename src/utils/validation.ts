export const validation = (id: string, value: string, setError: (error: (string | boolean)) => void) => {
    const data = require('../stubs/schema.json'); 

    for (const key in data) {
        if (key === id){
            if(data[key].required && key !== "sex" && key !== "hobby"){
                if(data[key].regExp){
                    const reg = new RegExp(data[key].regExp)
                    const testValue = value.split(/[ ()-]/).join("")
    
                    if(!reg.test(testValue)){
                        setError("Wrong input!")
                    } else {
                        setError(false)
                    }
                }
                else if(data[key].minLength > value.length || data[key].maxLength < value.length){
                    setError(`Min length = ${data[key].minLength} and max length = ${data[key].maxLength}`)
                }
                else if(data[key].minAge > value || data[key].maxAge < value){
                    setError(`Min age = ${data[key].minAge} and max age = ${data[key].maxAge}`)
                }
                else {
                    setError(false)
                }
            }
            else if((id === "sex" || id ==="hobby") && data[key].required){
                setError("Required!")
            }
            else {
                setError(false)
            }
        }
        
    }
}