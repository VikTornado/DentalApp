import React from 'react';

const FormPage = () => {
    return (
        <div className={"max-w-[700px] m-auto py-16 flex flex-col p-4"}>
            <form className={"w-full flex flex-col "} method={"POST"} action="https://getform.io/f/3773d6e6-465b-4bed-8d00-f19a83305a64">
                <input className={"border rounded my-1 py-1"} type="text" name={"name"} placeholder={"Name"}/>
                <input className={"border rounded my-1 py-1"} type="email" name={"name"} placeholder={"Email"}/>
                <input className={"border rounded my-1 py-1"} type="subject" name={"subject"} placeholder={"Subject"}/>
                <textarea className={"border"} name="message" id="" cols="30" rows="10" placeholder={"Message"}>Message</textarea>
                <button className={"flex flex-col m-auto text-center items-center bg-blue-400 px-4 py-2 mt-2 rounded"} type={"submit"}>Submit</button>
            </form>
        </div>
    );
};

export default FormPage;


