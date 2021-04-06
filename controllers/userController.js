const { createUser, loginUser } = require("../services/userService");

function renderRegisterForm(req, res) {
  res.render("register", {
    layout: "backup",
  });
}

async function processRegisterSubmission(req, res, next) {
  let token;
  try {
    token = await createUser({ ...req.body, category: "customer" });
  } catch (error) {
    next(error);
  }

  if (token === "DUPLICATE_USERNAME") {
    message = "Username already taken";
  } else if (token) {
    res.cookie("jwt", token, { httpOnly: true });
    message = "Thank you for creating an account!";
  } else {
    message = "An error has occurred. Please try again.";
  }

  res.render("register", {
    layout: "backup",
    message,
  });
}

function renderLoginForm(req, res) {
  res.render("login", {
    layout: "backup",
  });
}

async function processLoginSubmission(req, res, next) {
  let token;
  try {
    token = await loginUser(req.body.name, req.body.password);
  } catch (error) {
    next(error);
  }

  if (token) {
    res.cookie("jwt", token, { httpOnly: true });
    message = "You have successfully logged in";
    res.redirect("/");
  } else {
    message = "Invalid name or password";
    res.render("login", {
      layout: "loggedin",
      message,
    });
  }
}

function renderLogout(req, res) {
  res.clearCookie("jwt");
  res.render("logout");
}

module.exports = {
  renderRegisterForm,
  processRegisterSubmission,
  renderLoginForm,
  processLoginSubmission,
  renderLogout,
};
