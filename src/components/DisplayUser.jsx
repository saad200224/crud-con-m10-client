import { useLoaderData } from "react-router-dom";

const DisplayUser = () => {

    const users = useLoaderData();
    console.log(users)


    return (
        <div>
            <h2>User: {users.length}</h2>
            <h2>hello</h2>
            {
                users.map((user) => (
                    <div key={user._id}>
                        <h1>{user.name}</h1>
                    </div>))
            }
        </div>
    );
};

export default DisplayUser;