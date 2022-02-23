export const saveUser = (user, navigate) => {

    localStorage.setItem("token", JSON.stringify(user.accessToken));
    const userData = {
        email : user.email,
        displayName: user.displayName,
        uid: user.uid,
        tenantId: user.tenantId
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/home");
};