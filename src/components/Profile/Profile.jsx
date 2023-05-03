import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user,logOutUser,updateUserNamePhoto } = useContext(AuthContext);
  const [edit,setEdit] = useState(false)
  const navigate = useNavigate();
  console.log(user);
const handleLogout = ()  => {
    toast.success("log out success")
    logOutUser()
}
const handleUpdateProfile = (e) => {
e.preventDefault()
const form = e.target;
const name = form.name.value;
const photo = form.photo.value;
updateUserNamePhoto(user,name,photo)
.then(() => {
    toast.success("user Update Success")
navigate("/",{replace:true})
})
}
  return (
    <div className="container">
      <div className="card  mx-auto my-32 md:w-96 py-5 bg-orange-100 shadow-xl">
        <div className="mx-auto">
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
        </div>
        <div className="text-center">
            <button className="text-xl" onClick={() => setEdit(!edit)}><FaEdit></FaEdit></button>
            {
                edit && <form onSubmit={handleUpdateProfile}>
                <input required type="text" placeholder="Enter Your Name" name="name" className="input mt-3 input-bordered input-warning w-full max-w-xs" />
    
                <input required type="text" placeholder="Enter Your Photo Url" name="photo" className="input mt-3 input-bordered input-warning w-full max-w-xs" />
                <button type="submit" className="btn mt-5">Update</button>
                </form>
            }
        </div>
        <div className=" flex flex-col space-y-3 items-center text-center">
          <h2 className="card-title">{user?.displayName}</h2>
          <p>{user?.email}</p>
          <div className="card-actions">
            <button onClick={handleLogout} className="btn primary-btn">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
