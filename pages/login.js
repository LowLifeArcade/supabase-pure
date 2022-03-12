import React from 'react';
import supabase from '../utlis/supabase';

const LoginPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    await supabase.auth.signIn({ email });
    console.log('submited', email)
  };
  // test
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="outline p-3" />
        <button className="outline p-3" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
