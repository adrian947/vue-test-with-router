const isAuthenticatedGuard = async (to, form, next) => {
  const canAccess = () => {
    return new Promise((resolve) => {
      const random = Math.random() * 100;
      if (random > 50) {
        console.log("puedes acceder a la ruta", random);
        resolve(true);
      } else {
        console.log("Ruta Bloqueada", random);
        resolve(false);
      }
    });
  };

  //Guard Global -asincrono

  const result = await canAccess();

  if (result) {
    console.log("puedes acceder a la ruta", result);
    next();
  } else {
    console.log("Ruta Bloqueada", result);
    next({ name: "home" });
  }
};

export default isAuthenticatedGuard;
