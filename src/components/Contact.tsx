function Contact() {
  return (
    <div className="contact-us flex flex-col items-center justify-center m-0 px-10">
      <table className="w-full md:w-1/4 ">
        <td>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" />
        </td>
        <td>
          <label htmlFor="number">Contact Number</label>
          <input type="text" id="number" />
        </td>
        <td>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" />
        </td>
        <td>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" placeholder="Leave us a message" />
        </td>
      </table>
      <button>Submit</button>
    </div>
  );
}

export default Contact;
