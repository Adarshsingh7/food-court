// import { Button } from "@mui/material"
import { User } from "../pages/ManageUser";
import { Button } from "../ui/Button";

function UserList({ user }: { user: User }) {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex justify-between items-center flex-wrap">
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {user.userName}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {user.email}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {user.phone}
          </p>
        </div>
        <p className="my-4">{user.address}</p>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white my-2">
          <Button>Delete User</Button>
        </div>
      </div>
    </li>
  );
}

export default UserList;
