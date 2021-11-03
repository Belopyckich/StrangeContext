const defaultState = {
  posts: [
    {
      id: 1,
      name: "Eugene",
      surname: "Demidov",
      description: "Hello all",
      email: "evgenij.demidov.1998@mail.ru",
    },
    {
      id: 2,
      name: "Liza",
      surname: "Demidova",
      description: "Hello all",
      email: "liza.demidova.2007@mail.ru",
    },
    {
      id: 3,
      name: "Varya",
      surname: "Borisovna",
      description: "Hello all",
      email: "varya.borisovna.2006@mail.ru",
    },
    {
      id: 4,
      name: "Kostya",
      surname: "Ravkovich",
      description: "Hello all",
      email: "son.of.shit.1999@mail.ru",
    },
    {
      id: 5,
      name: "Maksim",
      surname: "Klimashenok",
      description: "Hello all",
      email: "maksim.klimashenok.1999@mail.ru",
    },
    {
      id: 6,
      name: "Senya",
      surname: "Demidova",
      description: "Hello all",
      email: "senya.demidova.2015@mail.ru",
    },
    {
      id: 7,
      name: "Lesha",
      surname: "Mamai",
      description: "Hello all",
      email: "lesha.mamai.1998@mail.ru",
    },
  ],
};

export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";

export const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_POST":
            return {...state, posts: [...state.posts, action.payload].sort((a, b) => a.id - b.id)}
        case "REMOVE_POST":
            return {...state, posts: state.posts.filter(post => post.id !== action.payload.id)}
        default:
            return state;
    }
}

export const addPostAction = (payload) => ({type: ADD_POST, payload});
export const removePostAction = (payload) => ({type: REMOVE_POST, payload});

