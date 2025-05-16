import React from "react";

const Card = ({ post, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div>
      <div className="fixed inset-0 !z-50 overflow-y-auto myanimation">
        <div className="flex min-h-screen items-center justify-center p-4 text-center">
          <div className="fixed inset-0 bg-black/25" onClick={onClose} />

          <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 animate-in fade-in slide-in-from-top-5">
            <h1 className="text-center"> {post.title} </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
