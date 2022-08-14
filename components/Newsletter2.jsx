import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
export default function Newsletter() {
  const [email, setEmail] = useState("");

  const postUrl = `https://humbletitan.us9.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;
  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <div className="my-10 py-10 bg-[#e0ecf0]  ">
          <p className="text-[24px] text-[#023A51] text-center font-bold ">
            Hear from us first
          </p>
          <div className="px-4">
            <input
              className="block p-2 my-5 border rounded-lg text-[20px] w-[100%]"
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />

            {status === "sending" && <div>sending...</div>}
            {status === "error" && (
              <div
                className="text-[red]"
                dangerouslySetInnerHTML={{ __html: message?.slice(3) }}
              />
            )}
            {status === "success" && (
              <div className="text-green">Thank you for Subscribing!</div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                subscribe({ MERGE0: email });
                if (status === "success") {
                  setEmail("");
                }
              }}
              className="green_rounded_btn"
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    />
  );
}
