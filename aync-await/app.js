const users = [{
    id : 1,
    name : "Pragya",
    schoolId : 101
},{
    id : 2,
    name : "xyz",
    schoolId : 110
    
}]

const grades = [];

const getUser = (id) => {
    return new Promise((resolve,reject) => {
        console.log(users);
       const u =  users.find((user) => {
            user.id === id; 
        });
            
        if(u) {
            resolve(u);
        } else {
            reject('unable to find user');
        }
    });
};


getUser(1).then((user) => {
    console.log(user);
}).catch((e) => {
    console.log(e);
})