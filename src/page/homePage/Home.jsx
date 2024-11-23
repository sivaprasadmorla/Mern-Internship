import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm((prevState) => !prevState);
  };
  return (
    <div>
      <h1 className="bg-[#ffff00] p-1">Dashboard!!!</h1>
      <div className="w-screen h-[250px] flex flex-col justify-center items-center ">
        <h1 className="text-2xl">Welcome to Admin Panel !!!</h1> <br />
        <button
          className="bg-[#792989] px-[20px] py-1 rounded-md text-[#ffffff]"
          onClick={handleClick}
        >
          Create record
        </button>
      </div>
      {showForm && (
        <>
          <h1 className="text-center text-2xl font-bold">
            Create Employee Record!!
          </h1>
          <form className="mt-6 p-6 border rounded shadow-md max-w-md mx-auto">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-1 block w-full border border-gray-300 rounded"
                  placeholder="Enter the name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-1 block w-full border border-gray-300 rounded"
                  placeholder="Enter the email"
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  title="Please enter a valid email address"
                />
              </div>

              <div>
                <label
                  htmlFor="mobileno"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile No
                </label>
                <input
                  type="tel"
                  id="mobileno"
                  className="mt-1 p-1 block w-full border border-gray-300 rounded"
                  placeholder="Enter the mobile number"
                  maxLength="10"
                />
              </div>

              <div>
                <label
                  htmlFor="designation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Designation:
                </label>
                <select
                  id="designation"
                  className="mt-1 p-1 block w-full border border-gray-300 rounded"
                >
                  <option value="">Select the designation</option>
                  <option value="hr">Human Resources</option>
                  <option value="manager">Manager</option>
                  <option value="sales">Sales</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender:
                </label>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="mr-2"
                    />
                    Female
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Course:
                </label>
                <div className="flex flex-col mt-1">
                  <label className="flex items-center">
                    <input type="checkbox" value="html" className="mr-2" />
                    MCA
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" value="css" className="mr-2" />
                    BCA
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="javascript"
                      className="mr-2"
                    />
                    BSC
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="profileImage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Profile Image:
                </label>
                <input
                  type="file"
                  id="profileImage"
                  accept=".jpg,"
                  className="mt-1 p-1 block w-full border border-gray-300 rounded"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Home;
