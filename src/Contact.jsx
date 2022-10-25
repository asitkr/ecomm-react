import React from 'react';
import styled from 'styled-components';

function Contact() {

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className='common-heading'>Contact page</h2>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17116.17973021697!2d85.13863468997022!3d25.597154619868814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585fff5af727%3A0xe553ec95b9179b2f!2sSri%20Mahavir%20Mandir!5e0!3m2!1sen!2sin!4v1664901997742!5m2!1sen!2sin"
        width="100%" 
        height="400" 
        style={{border: 0}}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade" />

        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xnqrvogp" method="post" className='contact-inputs'>
              <input type="text" name='username' autoComplete='off' placeholder='username' required />
              <input type="email" name="Email" autoComplete='off' placeholder='email' required />
              <textarea name="Message" placeholder='Enter your message' cols="30" rows="10" autoComplete='off' required></textarea>
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
    </Wrapper>
  )
}

export default Contact;