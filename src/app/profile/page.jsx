import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-5">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-gray-200">
        <figure className="px-10 pt-10">
          {/* ইউজার ইমেজ */}
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {/* এখানে আপনার আসল ছবির লিঙ্ক দিন */}
              <img src="https://via.placeholder.com/150" alt="Profile" />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          {/* আপনার প্রফেশনাল নাম */}
          <h2 className="card-title text-2xl font-bold">Yusuf Mia</h2>
          <p className="text-gray-500">yusuf.mia@example.com</p>
          
          <div className="divider text-gray-400 text-sm">প্রোফাইল সেটিংস</div>
          
          <div className="flex flex-col w-full gap-2">
            <button className="btn btn-outline btn-primary btn-sm">তথ্য পরিবর্তন করুন</button>
            <button className="btn btn-error btn-sm text-white"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;