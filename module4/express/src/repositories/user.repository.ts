
export const getUsersData = () => {

    const  users  = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
    ]

  return users;
};

export const getUserDataById = (id: string ) => {

  const user = { id, name: "John Doe" };

  return user;
};

export const createUserData = (user: any) => {

  const response = user;

  return response;
};
