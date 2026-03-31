const API_BASE = "http://localhost:3010";

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

const loginMsg = document.getElementById("login-msg");
const registerMsg = document.getElementById("register-msg");

const loginEmail = document.getElementById("login-email");
const loginPass = document.getElementById("login-pass");

const registerName = document.getElementById("register-name");
const registerEmail = document.getElementById("register-email");
const registerPass = document.getElementById("register-pass");

const setMessage = (target, text, type = "info") => {
  if (!target) return;
  target.textContent = text;
  target.classList.remove("info", "error", "success");
  target.classList.add("msg", type);
};

const safeJson = async (response) => {
  try {
    return await response.json();
  } catch (error) {
    return {};
  }
};

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = loginEmail?.value?.trim();
    const password = loginPass?.value ?? "";

    if (!email || !password) {
      setMessage(loginMsg, "Preencha email e senha.", "error");
      return;
    }

    setMessage(loginMsg, "Entrando...", "info");

    try {
      const response = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await safeJson(response);

      if (!response.ok) {
        throw new Error(data.error || "Nao foi possivel fazer login.");
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      setMessage(loginMsg, "Login realizado com sucesso.", "success");
      loginForm.reset();
    } catch (error) {
      setMessage(loginMsg, error.message || "Erro ao fazer login.", "error");
    }
  });
}

if (registerForm) {
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = registerName?.value?.trim();
    const email = registerEmail?.value?.trim();
    const password = registerPass?.value ?? "";

    if (!username || !email || !password) {
      setMessage(registerMsg, "Preencha usuario, email e senha.", "error");
      return;
    }

    setMessage(registerMsg, "Criando conta...", "info");

    try {
      const response = await fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await safeJson(response);

      if (!response.ok) {
        throw new Error(data.error || "Nao foi possivel criar a conta.");
      }

      setMessage(registerMsg, "Conta criada. Agora voce pode entrar.", "success");
      registerForm.reset();
    } catch (error) {
      setMessage(registerMsg, error.message || "Erro ao criar a conta.", "error");
    }
  });
}
