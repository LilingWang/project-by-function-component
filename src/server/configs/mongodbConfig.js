const mongoose = require("mongoose");
  mongoose.connect(
    "mongodb+srv://lwang:13579@cluster0.maprs.mongodb.net/project1?retryWrites=true&w=majority"
    , {
      useNewUrlParser: true,
      useUnifiedTopology: true
  } );
