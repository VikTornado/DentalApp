import React from 'react';

const Contacts = () => {
    return (
        <div id={"contacts"} className={"pt-10"}>
            <iframe
                src="
                https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.6335841352425!2d22.285302516445324!3d48.61685667926472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919acbf9217e3%3A0x584e2a566e7e565b!2z0LLRg9C70LjRhtGPINCS0LDRgdC40LvRjyDQkdCw0LvQvtCz0LAsIDLQnCwg0KPQttCz0L7RgNC-0LQsINCX0LDQutCw0YDQv9Cw0YLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgODgwMDA!5e0!3m2!1suk!2sua!4v1680454100452!5m2!1suk!2sua"
                width="100%"
                height="450"
                style={{border: "0"}}
                allowFullScreen=""
                loading="lazy"
            />
        </div>
    );
};

export default Contacts;