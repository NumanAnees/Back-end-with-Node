const mongoose = require("mongoose");
//connection and creating a new db
mongoose
  .connect("mongodb://localhost:27017/NomiDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });
//Mongoose Schema
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});
//mOngoose model
//collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);
//create/insert documents
const createDocument = async () => {
  try {
    const doc = new Playlist({
      name: "Node js",
      ctype: "back end",
      videos: 24,
      author: "Usama",
      active: true,
    });
    const res = await doc.save();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
createDocument();
