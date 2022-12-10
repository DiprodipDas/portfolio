// import { JotFormEmbed } from 'jotform-react';
import React from 'react';


const Contact = () => {
    const URL = "https://form.jotform.com/223433783396060"
    
    return (
        //   <div>
        //     <JotFormEmbed>
        //     formURL="https://form.jotform.com/223433783396060"
        //     </JotFormEmbed>
        //   </div>
        <div className='h-96 mt-12 mb-96 '>
            <iframe title="my form" className='w-full h-[728px]' src={URL}></iframe>
        </div>
    );
};

export default Contact;