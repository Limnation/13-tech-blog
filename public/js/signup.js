const formSignup = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#input-username-signup").value;
  const passwordEl = document.querySelector("#input-password-signup").value;

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl,
      password: passwordEl,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Fail!");
  }
};

document.querySelector("#form-signup").addEventListener("submit", formSignup);
