import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //Стиль кнопки при выборе группы
  active: {
    border: "0.5px solid gray",
    borderRadius: "10px",
    background: "grey",
    color: "antiquewhite",
  },

  todolist: {
    background: "#dee0e0",
    width: "50%",
    minWidth: "fit-content",
    display: "flex",
    // flex: "0 1 auto",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    fontSize: "24pt",
  },

  header: {
    color: "rgba(128, 0, 0, 0.7)",
    fontSize: 40,
    marginBottom: 20,
  },

  //   content_inputblock: {
  //     background: "rgb(250, 249, 248)",
  //     padding: 10,
  //   },

  //   content_textarea: {
  //     display: "flex",
  //     flexDirection: "row",
  //     alignItems: "center",
  //     margin: 10,
  //   },
});

//   .content_textarea img {
//     height: 100%;
//     margin-right: 20px;

//   }

//   .content_textarea textarea {
//     font-style: oblique;
//     flex: 1;
//     font-size: 24pt;
//     line-height: 36pt;
//     border: none;
//     outline: none;
//     resize: none;
//     background: none;
//     max-height: 40px;
//     overflow: hidden;

//   }

//   .todolist__bottom {
//     padding: 0 10px;
//     margin-top: 20px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     font-size: 16pt;
//     flex-wrap: wrap;
//     /* flex: 0 1 auto; */
//   }

//   .bottom__leftitems {
//     display: flex;
//     flex: 1;
//     flex-direction: row;
//     align-items: center;
//     border: 1px solid;
//     justify-content: center;

//     border-radius: 15px;
//     margin: 0px 20px;
//     padding: 5px;
//     background: #58D68D;
//     color: #2C3E50;

//   }

//   .bottom__leftitems_count {
//     font-weight: 600;
//   }

//   .bottom__groups {
//     display: inherit;
//     justify-content: space-evenly;
//     flex: 1;
//   }

//   .groups__item {
//     cursor: pointer;
//     text-align: center;
//     padding: 5px;

//   }

//   .groups__item:hover {
//     color: rgb(128, 139, 150);
//   }

//   .bottom__clear {
//     flex: 1;
//     text-align: right;
//     cursor: pointer;
//     text-align: center;
//   }

//   .bottom__clear__text {
//     border: 1px solid;
//     border-radius: 15px;
//     margin: 0px 20px;
//     padding: 5px;
//     background: #C0392B;
//     color: antiquewhite;
//   }

//   .bottom__clear:hover {
//     filter: brightness(130%);
//   }

//   .content__comment {
//     font-size: 18pt;
//     font-style: oblique;
//     opacity: 50%;
//     padding: 10px;
//   }
