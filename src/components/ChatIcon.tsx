"use client"

import { useEffect } from "react"

const ChatIcon = () => {
    useEffect(()=>{
        (function(
           w:Window & {chatbotConfig?:[string,string,{apiHost:string}]},
           d,
           s,
           ...args
        ){
            const div = d.createElement("div")
            div.id = "aichatbot"
            d.body.appendChild(div)
            // assign chatbotConfig to window
            w.chatbotConfig = args as [string,string,{apiHost:string}]
            // locate the first script tag and insert the chatbot script
            const f = d.getElementsByTagName(s)[0]
            const j = d.createElement(s) as HTMLScriptElement
            j.defer = true
            j.type="module"
            j.src  ="https://aichatbot.sendbird.com/index.js"
            f.parentNode?.insertBefore(j,f )
        })(
            window,
            document,
            "script",
            "CE65899A-41D8-473C-8870-406BCEC4F256",
            "gmqECEQgR4CoOZVzVMecy",
            {
              apiHost:"https://api-CE65899A-41D8-473C-8870-406BCEC4F256.sendbird.com"
            }
        )
        return()=>{
            const div = document.getElementById("aichatbot")
            if(div){
               document.body.removeChild(div)
            }
        }
    },[])
  return (
    <div>ChatIcon</div>
  )
}

export default ChatIcon