import React from 'react';

const FormPage = () => {
    return (
        <div className={"max-w-[700px] m-auto py-16 flex flex-col px-4"}>
            <div className={"text-center"}>
                <h2>Наші контакти</h2>
                <p className='left-0'>вул. Василя Балога, 2з., Ужгород, Україна</p>
                <p className='left-0'>тел: +38095 639 1179</p>
            </div>

            <form className={"w-full flex flex-col"} method={"POST"} encType={"multipart/form-data"}
                  action="https://getform.io/f/3773d6e6-465b-4bed-8d00-f19a83305a64">
                <input className={"border rounded my-1 py-1 px-4"} type="text" name={"name"} placeholder={"Name"}/>
                <input className={"border rounded my-1 py-1 px-4"} type="email" name={"name"} placeholder={"Email"}/>
                <input className={"border rounded my-1 py-1 px-4"} type="subject" name={"subject"} placeholder={"Subject"}/>
                <textarea className={"border px-4"} name="message" id="" cols="20" rows="5"
                          placeholder={"Message"}></textarea>
                <button className={"flex flex-col m-auto text-center items-center bg-blue-400 px-4 py-2 mt-2 rounded"}
                        type={"submit"}>Submit
                </button>
            </form>
        </div>
    );
};

export default FormPage;


