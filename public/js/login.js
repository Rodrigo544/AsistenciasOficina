async function login() {
  const email = document.getElementById("correo").value
  const password = document.getElementById("contraseña").value
  console.log(correo)
  try { 
    const makeLogin = await fetch('http://localhost:4000/usuario/find', {
      method: 'POST',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify({
        email,
        password
      })
    });
    const parsedLogin = await makeLogin.json()
    console.log(parsedLogin)
    console.log(parsedLogin.success)
    if (parsedLogin.success === true) {
      alert("YA LA HICISTE BRO, ESTÁS DENTRO")
    } else {
      alert("Nombre o contraseña incorrectos")
    }
  } catch(err) {
    console.log(err)
    throw new Error("Nombre o contraseña incorrectos")
  }
}