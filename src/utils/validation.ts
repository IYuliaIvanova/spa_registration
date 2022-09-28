export const validation = (id: string, value: string, setError: (error: (string | boolean)) => void) => {
    const data = require('../stubs/schema.json'); 

    for (const key in data) {
        if (key === id){
            if(data[key].required){
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
                else {
                    setError(false)
                }
            }
        }
        
    }
}