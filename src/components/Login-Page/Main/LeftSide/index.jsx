export const LeftSide = () => {
  return (
    <div className="left-side">
      <form class="register-form">
        <span class="form-title">Crie uma Conta</span>

        <div class="input-container">
          <label for="email" class="placeholder">
            Email:
          </label>
          <input class="input" type="email" id="email" required />
        </div>

        <div class="input-container">
          <label for="password" class="placeholder">
            Senha:
          </label>
          <input class="input" type="password" id="password" required />
        </div>

        <button id="button-form" class="button-next" type="button">
          <a href="./user/index.html">Entrar</a>
        </button>
      </form>
    </div>
  );
};
