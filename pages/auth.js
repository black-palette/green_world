const Auth = () => {
  return (
    <>
      {/* //TODO увійти за допомогою гугл */}
      <form>
        <h2>Увійти</h2>
        <label for="email">Електронна пошта:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label for="password">Пароль:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <input type="submit" value="Sign In" />
      </form>
    </>
  );
};

export default Auth;
