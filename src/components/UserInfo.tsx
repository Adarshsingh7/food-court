import { FAKE_USER } from "./AuthRoute";
// import { useNavigate } from "react-router-dom";

function UserInfo() {
  // const navigate = useNavigate();
  // const handleDirect = () => {
  //   if (FAKE_USER.role === "admin") navigate("/allusers");
  //   else navigate("/updateprofile");
  // };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
        <p className="text-gray-500">Manage your profile information</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-semibold mb-2">
            Name
          </label>
          <div id="name" className="p-3 bg-gray-100 rounded-md">
            {FAKE_USER.userName}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-semibold mb-2">
            Email
          </label>
          <div id="email" className="p-3 bg-gray-100 rounded-md">
            {FAKE_USER.email}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-700 font-semibold mb-2">
            Phone Number
          </label>
          <div id="phone" className="p-3 bg-gray-100 rounded-md">
            (+91){FAKE_USER.phone}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="text-gray-700 font-semibold mb-2">
            Address
          </label>
          <div id="address" className="p-3 bg-gray-100 rounded-md">
            {FAKE_USER.address}
          </div>
        </div>
      </section>

      {/* <footer className="flex justify-around mt-8 w-flex-wrap flex-col text-center md:flex-row md:items-center">
        <Button additionalClasses="w-44 my-4">Edit Profile</Button>
        <Button additionalClasses="w-44 my-4" onClick={handleDirect}>
          {FAKE_USER.role === "user"
            ? "Your Order History"
            : "Manage all users"}
        </Button>
        <Modal>
          <Modal.Open opens="form">
            <Button
              additionalClasses={`w-44 my-4 ${
                FAKE_USER.role === "admin" ? "" : "hidden"
              }`}
            >
              Add more Product
            </Button>
          </Modal.Open>
          <Modal.Window name="form">
            <AddProductForm onClose={() => {}} />
          </Modal.Window>
        </Modal>
      </footer> */}
    </div>
  );
}

export default UserInfo;
