export default function articleReducer(
  state = [
    {
      id: 0,
      title: "Название",
      author: "Автор",
      date: "Fri Nov 13 2020",
      status: "approved",
      text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cupiditate distinctio atque eveniet et iste. Nemo facere
          laboriosam, modi cupiditate voluptatibus tenetur ratione
          architecto! Sint praesentium quo velit placeat repellat ab.`,
    },
  ],
  action
) {
  switch (action.type) {
    case "CREATE":
      console.log(state);
      state.push({
        id: action.payload.id,
        title: action.payload.article.articleTitle,
        author: action.payload.username,
        date: action.payload.date,
        status: "pending",
        text: action.payload.article.articleText,
      });
      return state;
    case "FILTER": {
      return {
        ...state,
        visible: action.payload,
      };
    }
    case "SET_STATUS": {
      return {
        ...state,
        status: action.payload,
      };
    }
    default:
      return state;
  }
}
