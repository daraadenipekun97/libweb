import React, {useState, useEffect} from 'react'

const useUpdateProfileWarning = (
    message = 'Please update your profile first'
) => {

    const [isDirty, setDirty] = useState(false);

    useEffect(() => {
        //detecting browser closing
        window.onbeforeunload = isDirty && (()=> message)
    
      return () => {
        window.onbeforeunload = null
      }
    }, [isDirty])


const routerPrompt = isDirty && alert(message);
    

  return [routerPrompt, ()=> setDirty(true), () => setDirty(false)]
}

export default useUpdateProfileWarning