import axios from "axios";

export const JsonPlaceholderService = {
    async getUsersData() {
        try {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return {data}
        }catch (error){
            console.error({message: error})
        }
    }
}