'use client';
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const [newName, setNewName] = useState("");
  const [newPhoto, setNewPhoto] = useState("");
  const router = useRouter();

  if (isPending) return <p className="text-center mt-20">Loading...</p>;
  if (!session) return router.push("/login");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await authClient.updateUser({
        name: newName || session.user.name,
        image: newPhoto || session.user.image,
      });
      alert("profile is updeted");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-5">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-gray-200">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={session.user.image || "https://via.placeholder.com/150"} alt="Profile" />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{session.user.name}</h2>
          <p className="text-gray-500">{session.user.email}</p>
          
          <div className="divider text-gray-400 text-sm">update information</div>
          
          <form onSubmit={handleUpdate} className="flex flex-col w-full gap-3">
            <input 
              type="text" 
              placeholder="new name" 
              className="input input-bordered input-sm w-full"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="new photo link" 
              className="input input-bordered input-sm w-full"
              value={newPhoto}
              onChange={(e) => setNewPhoto(e.target.value)}
            />
            <button type="submit" className="btn btn-primary btn-sm">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;