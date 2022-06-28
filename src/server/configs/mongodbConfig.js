const mongoose = require("mongoose");
  mongoose.connect(
    "mongodb+srv://lwang:13579@cluster0.maprs.mongodb.net/project1?retryWrites=true&w=majority"
    , {
      useNewUrlParser: true,
      useUnifiedTopology: true
  } );
/*
  const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
exports.start = (success) => {
  mongoose.connect(
    "mongodb+srv://lwang:13579@cluster0.maprs.mongodb.net/project1?retryWrites=true&w=majority"
    );
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    // we're connected!
    console.log("connected db: blog");
    if (success) {
      success();
    }
  });
};

  */