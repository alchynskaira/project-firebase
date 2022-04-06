



export const dateFormatting = (user) => {
   return ("0" + user.birthday.toDate().getDate()).slice(-2) + "." +
    ("0" + (user.birthday.toDate().getMonth() + 1)).slice(-2) + "." + user.birthday.toDate().getFullYear();
}