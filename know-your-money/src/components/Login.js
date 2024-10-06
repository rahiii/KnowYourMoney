import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add logic to handle login, e.g., API calls for authentication
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '20%',
    margin: '10% auto',
    padding: '5%',
    border: '1em solid #ccc',
    borderRadius: '5%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    marginBottom: '5%',
  },
  input: {
    width: '90%',
    padding: '8%',
    marginTop: '5%',
  },
  button: {
    width: '108%',
    padding: '10%',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5%',
    cursor: 'pointer',
  },
};

export default Login;