const { userDataRepository } = require("../repositorys/users.data.repository");

class UserController{
    
    getUsers(request, response){
        return response.json(userDataRepository.usersData);
    }

    putUsers(request, response){
        const {name} = request.body;
        const newUser = {
            id: userDataRepository.usersData.length + 1,
            name,
        };
        
        userDataRepository.usersData.push(newUser);

        return response.json(newUser);
    }

    deleteUsers(request, response){
        
        let jsonApiMessage = [];

        try {
            const {id} = request.params;
    
            const getAllUsers = userDataRepository.usersData;
            
            userDataRepository.usersData = getAllUsers.filter((item) =>item.id !== id);

            jsonApiMessage = {
                "code" : "200",
                "message" : `user ${id} deleted`
            }

        } catch (error) {
            jsonApiMessage = {
                "code" : "500 ",
                "message" : "Internal Server Error:"
            }
        }

        return response.json(jsonApiMessage);
    }

}

const userController = new UserController();

module.exports = {
    userController,
}