import {useForm, ValidationError} from "@formspree/react"

const ContactForm = () =>{


const [state, handleSubmit] = useForm('mbldbkwv');

if(state.succeeded){

return  <p>
  Thank for sending!
</p>
}



  return (
<form onSubmit={handleSubmit} className={"flex flex-col gap-4 "} >
        <input type="text" name={'name'} placeholder={"Enter your name"} className={"form-input bg-transparent rounded-lg w-full py-2 lg:py-3 px-4 lg:px-6 transition "} />
          <ValidationError prefix={"Name"} field={"name"} errors = {state.errors}/>

          <input type="text" name={'email'} placeholder={"Enter your email"} className={"form-input bg-transparent rounded-lg w-full py-2 lg:py-3 px-4 lg:px-6 transition "} />
          <ValidationError prefix={"Email"} field={"email"} errors = {state.errors}/>

<textarea 

name={"message"}
rows={3}
placeholder={"Enter your message"} className={"form-input bg-transparent rounded-lg w-full py-2 lg:py-3 px-4 lg:px-6 transition "}

/>
<ValidationError prefix={"Message"} field={"message"} errors = {state.errors}/>

<button type="submit" disabled = {state.submitting}  className={"text-sm px-5 py-3 flex w-fit gap-2 items-center font-semibold  rounded-full transition bg-primary hover:bg-primary2 "}>
  <span>Send Message</span>
</button>
</form>
  )
}







export const Contact = () => {
  return (

<section id={"Contact"} className="">
          <div className="container relative ">
            <div className="flex flex-col gap-6 border-t py-14 border-stone-800 ">

                <div>
                      <h2 className="heading-01 ">Contact</h2>
                </div>

                <div className="flex flex-col gap-6 lg:flex-row">
           <div className="py-6 pl-6 border-l borer-stone-800 md:pl-10 md:py-10">
              <div className="flex flex-col gap-8">
                <p className="p-light2">
                  Have a question? or just want to say HI? Drop me a message!
               </p>

                <ContactForm/>
             </div>
          </div>
          </div>

            </div>
          </div>
        </section>


    // <section id={"contact"} className="bg-background2">
    //   <div className="container ">
    //     <div className="flex flex-col gap-6 py-14 lg:flex-row lg:gap-8 ">
    //       <h2 className="heading-01">Contact</h2>

    //       <div className="flex flex-col gap-6 lg:flex-row">
    //         <div className="py-6 pl-6 border-l borer-stone-800 md:pl-10 md:py-10">
    //           <div className="flex flex-col gap-8">
    //             <p className="p-light2">
    //               Have a question? or just want to say HI? Drop me a message!
    //             </p>

    //             <ContactForm/>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};
