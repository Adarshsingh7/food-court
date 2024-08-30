import UserList from "../components/UserList";

export interface User {
    id: number;
    userName: string;
    email: string;
    phone: number;
    address: string,
    role: string;
}

const ALL_USERS: User[] = [
    {
        id: 1,
        userName: 'John Doe',
        email: 'john.doe@example.com',
        phone: 1234567890,
        address: '223 ani. dsad',
        role: 'user',

    },
    {
        id: 2,
        userName: 'Neil Sims',
        email: 'neilsims@gmail.com',
        phone: 9876543210,
        address: '223 andew, rewr',
        role: 'user',
    },
    {
        id: 3,
        userName: 'Jane Doe',
        email: 'janedoe@yahoo.com',
        address: '23, GB Road',
        phone: 5555555555,
        role: 'user'
    },
    {
        id: 4,
        userName: 'Lana Bryd',
        email: 'lanabryd@gmail.com',
        address: '23, Teri mosi k ghr',
        phone: 1111111111,
        role: 'user'
    }
]

function ManageUser() {
    return (
        <div className="flex justify-center items-center m-4">
            <div className="w-screen p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">All Customers</h5>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {ALL_USERS.map(user => <UserList key={user.id} user={user}/>)}                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ManageUser
