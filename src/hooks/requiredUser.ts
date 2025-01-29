import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export const requiredUsers = async()=>{
    const users =await currentUser()
    if(!users){
        redirect("/")
    }
}