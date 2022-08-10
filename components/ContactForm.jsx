import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function ContactForm() {
	const postUrl = `https://gmail.us1.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [service, setService] = useState("");
	const [subject, setSubject] = useState("");
	const [body, setBody] = useState("");
	const [error, setError] = useState("");

	const submitHandler = (e, subscribe, status) => {
		e.preventDefault();
		setError("");
		console.log(name.length, phone.length, email.length, service.length);

		if (name.length < 1) {
			setError("name is necessary!");
		} else if (phone.length < 10) {
			setError("Please enter number of (11 digits atleast) ");
		} else if (service.length < 1) {
			setError("Please select a service!");
		} else {
			console.log("inside", error.length);
			subscribe({
				MERGE1: name,
				MERGE4: phone,
				MERGE0: email,
				MERGE6: service,
				MERGE2: subject,
				MERGE3: body,
			});

		}

		if (status === "success"){
			setName("");
			setPhone("");
			setEmail("");
			setService("");
			setSubject("");
			setBody("");
		}
	};

	return (
		<MailchimpSubscribe
			url={postUrl}
			render={({ subscribe, status, message }) => (
				<div className=" bg-[#fff] rounded-xl p-4 md:p-10 ">
					<form>
						<div className="md:flex justify-between py-4">
							<div>
								<label
									className="text-[#34495E] my-6 md:py-3 text-[20px] "
									htmlFor="name"
								>
									Name *
								</label>

								<input
									className="block p-2 border rounded-xl text-[20px] w-[100%] md:w-[90%] "
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
									placeholder="John Stuart"
								/>
							</div>
							<div>
								<label
									className="text-[#34495E] py-3 text-[20px] "
									htmlFor="name"
								>
									Phone *
								</label>

								<input
									className="block p-2 border rounded-xl text-[20px] w-[100%] md:w-[90%] "
									type="number"
									required
									placeholder="(123)-456-7890"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
						</div>
						<div className="md:flex justify-between py-4">
							<div>
								<label
									className="text-[#34495E] py-3 text-[20px]"
									htmlFor="name"
								>
									Email address *
								</label>
								<input
									className="block p-2 border rounded-xl text-[20px] w-[100%] md:w-[90%]"
									type="email"
									required
									placeholder="name@company.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label
									className="text-[#34495E] py-3 text-[20px]"
									htmlFor="name"
								>
									Service interested in *
								</label>
								<select
									className="block p-2 border rounded-xl outline-none text-[#34495E] text-[20px] w-[100%] md:w-[90%]"
									required
									placeholder="(123)-456-7890"
									onChange={(e) => setService(e.target.value)}
								>
									<option value="Search Engine Optimaization">
										Search Engine Optimaization
									</option>
									<option value="Web Design">
										Web Design
									</option>
									<option value="Content Marketing">
										Content Marketing
									</option>
									<option value="Website management">
										Website Management
									</option>
								</select>
							</div>
						</div>
						<div className="py-4 ">
							<div>
								<label
									className="text-[#34495E] py-3 text-[20px]"
									htmlFor="subject"
								>
									Subject
								</label>
								<input
									className="block p-2 border rounded-xl outline-none text-[#34495E] text-[20px] w-[100%] "
									type="text"
									placeholder="Quote request for"
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
								/>
							</div>
						</div>
						<div className="py-4 ">
							<div>
								<label
									className="text-[#34495E] py-3 text-[20px]"
									htmlFor="subject"
								>
									How can we help?
								</label>
								<textarea
									className="block p-2 border rounded-xl outline-none text-[#34495E] text-[20px] w-[100%] "
									type="text"
									placeholder="I need help with the next problem"
									value={body}
									onChange={(e) => setBody(e.target.value)}
								></textarea>
							</div>
						</div>
						{status === "sending" && <div>sending...</div>}
						{status === "error" && (
							<div
								className="text-[red]"
								dangerouslySetInnerHTML={{ __html: message }}
							/>
						)}
						{status === "success" && (
							<div className="text-green">
								Thank you! Your message has been sent!
							</div>
						)}

						{error.length > 0 && (
							<div className="text-[red]">{error}</div>
						)}

						<div className="py-4 ">
							<div>
								<button
									onClick={(e) => submitHandler(e, subscribe)}
									className="green_rounded_btn"
								>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			)}
		/>
	);
}
