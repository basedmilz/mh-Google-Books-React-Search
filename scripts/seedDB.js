const mongodb = require("mongoose");
const db = require("../models");

mongodb.Mongoose.connect(
    rocess.env.MONGODB_URI || "mongodb://localhost/googlebooks");

    const googlebooksSeed = [
        {
          title: "Hello World",
          author: "admin",
          description:
            "Welcome to your first GoogleBooks! To create GoogleBookss create a title and description. Don't forget to include your screen name!",
          image: "this is the image",
          link: 'Link to Books'
        },
        {
          title: "The Second GoogleBooks",
          author: "admin",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image: "this is the image",
          link: 'Link to Books'
        },
        {
          title: "Another One",
          author: "admin",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image: "this is the image",
          link: 'Link to Books'
        }
      ];
      
      db.GoogleBooks.remove({})
        .then(() => db.GoogleBooks.collection.insertMany(googlebooksSeed))
        .then(data => {
          console.log(data.result.n + " records inserted!");
          process.exit(0);
        })
        .catch(err => {
          console.error(err);
          process.exit(1);
        });
      