import React from 'react';
import './SuggestionForm.css';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SuggestionForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('🎉 Thanks! Your suggestion was sent.', {
      position: 'top-center',
      autoClose: 2500,
      theme: 'colored',
      transition: Slide,
    });

    // Delay actual submission so toast is visible
    setTimeout(() => {
      e.target.submit(); // manually submit the form
    }, 2700);
  };

  return (
    <section className="suggestion-section" id="suggest">
      <div className="suggestion-card animate-slide-in">
        <h2 className="suggestion-title">💡 Suggest a Dish</h2>
        <p className="suggestion-subtext">
          Got a craving? Let us know what you'd love to see on our menu!
        </p>

        <form
          className="suggestion-form"
          action="https://formsubmit.co/shruthicurrypoint@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://shruthicurrypoint.netlify.app/" />
          <input type="text" name="_honey" style={{ display: 'none' }} />

          <input
            type="text"
            name="dishName"
            placeholder="🍛 Your Dish Suggestion"
            required
          />

          <textarea
            name="reason"
            placeholder="🧡 Why do you love this dish?"
            rows="3"
          ></textarea>

          <input
            type="text"
            name="userName"
            placeholder="👤 Your Name (optional)"
          />

          <button type="submit">📩 Send Suggestion</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SuggestionForm;
