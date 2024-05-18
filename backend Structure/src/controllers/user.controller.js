import axios from "axios"

const getAllUsers  = async (req,res) => {
    try {

        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return res.status(201).send(response.data)
        
    } catch (error) {
        
        console.log("Error in users ",error.message)
        
    }
}



export {
    getAllUsers,
}