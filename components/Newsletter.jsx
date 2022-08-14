import React, {useState} from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
export default function Newsletter() {
    const [email, setEmail] = useState("")

    const postUrl = `https://humbletitan.us9.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`
  return (
    <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
            <div className="md:flex items-center justify-around my-10 p-4 md:p-10 w-[100%] shadow-sm shadow-[#888] rounded-xl  text-[#023A51]">
                <div >
                    <p className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px]  py-10  ' >Join to newsletter<span className='text-[#2cbc63]' >.</span></p>
                    <p className='text-[20px]' >Don’t miss out on the latest from Humble Titan.</p>
                </div>
                <div className=' '>
                    <h2 className='text-[24px] font-bold py-6 ' >Hear from us first</h2>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} className='block outline-[#2cbc63] border p-2 rounded-xl text-[20px] w-[100%]' type="text" placeholder='Enter your email' />
                    {status === "sending" && (
                            <div>
                                sending...
                            </div>
                        )}
                        {status === "error" && (
                            <div
                                className="text-[red]"
                                dangerouslySetInnerHTML={{ __html: message?.slice(3) }}
                            />
                        )}
                        {status === "success" && (
                            <div className="text-green">
                                Thank you for Subscribing!
                            </div>
                        )}

                    <button onClick={(e)=> {
                        e.preventDefault()
                        subscribe({MERGE0: email})
                        if(status === "success"){
                            setEmail("")
                        }
                    }} className='green_rounded_btn my-10 px-10' >Subscribe</button>
                </div>
            </div>
          )}
    />
  )
}
