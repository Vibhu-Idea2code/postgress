const getUsers="SELECT * FROM public.users";
const getUserById="Select * from users where id=$1";
const checkEmailEx="Select * from users s where s.email=$1";
// const addUser="INSERT INTO public.users( name, email)	VALUES ( $2, $3);"
// const addUser="insert into users (name,email) values($4,$5,$6)";
module.exports={
    getUsers,
    getUserById,
    checkEmailEx,
    // addUser
}
