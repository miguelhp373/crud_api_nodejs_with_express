let usersData = [];

class UserDataRepository{
    usersData = [
                    {
                        "id" : 1,
                        "name": "Miguel Henrique"
                    },
                    {
                        "id" : 2,
                        "name": "Gabriel"
                    },
                    {
                        "id" : 3,
                        "name": "Felipe"
                    },
                    {
                        "id" : 4,
                        "name": "Carlos"
                    }
    ]
    
}

const userDataRepository = new UserDataRepository();

module.exports = {
    userDataRepository,
}