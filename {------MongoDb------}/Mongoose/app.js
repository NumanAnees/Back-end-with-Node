const mongoose = require("mongoose");
//--------------------------------------------connection and creating a new db-------------------------------------
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
//---------------------------------------------Mongoose Schema-----------------------------------------------------
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
//------------------------------------collection creation----------------------------------------------------------
const Playlist = new mongoose.model("Playlist", playlistSchema);
//------------------------------------create/insert documents------------------------------------------------------
const createDocument = async () => {
  try {
    const Mongo = new Playlist({
      name: "MongoDb js",
      ctype: "Database",
      videos: 4,
      author: "Numan",
      active: true,
    });
    const Javascript = new Playlist({
      name: "javaScript",
      ctype: "Full Stack",
      videos: 22,
      author: "Numan",
      active: true,
    });
    const css = new Playlist({
      name: "Css",
      ctype: "Front end",
      videos: 22,
      author: "Ali",
      active: true,
    });
    const Html = new Playlist({
      name: "Html",
      ctype: "Front end",
      videos: 14,
      author: "Musa",
      active: true,
    });
    const res = await Playlist.insertMany([Html, css, Javascript, Mongo]);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
//createDocument(); (uncomment it)

//----------------------------------find/Read pre existing document----------------------------------------------
const getDocument = async () => {
  try {
    const result = await Playlist.find({ active: true })
      .select({
        name: 1,
        _id: 0,
      })
      .skip(1)
      .limit(3);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// getDocument();(uncomment it)
//---------------------------------------Query operators----------------------------------------------------------
const OptDocument = async () => {
  try {
    const result = await Playlist.find({
      ctype: { $in: ["Front end", "Full Stack"] },
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
//OptDocument();(uncomment it)
//--------------------------------------------------Logical operators-----------------------------------------
const LogDocument = async () => {
  try {
    const result = await Playlist.find({
      $nor: [{ author: "Numan" }],
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// LogDocument();(uncomment it)
//----------------------------------------------Count and Sort-------------------------------------------------
const CsDocument = async () => {
  try {
    const result = await Playlist.find({}, { name: 1 })
      //.countDocuments();
      .sort({ name: 1 });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// CsDocument(); (uncomment it)
//-----------------------------------------------Update the documment data -----------------------------------------
const UpdateDocumment = async (_id) => {
  try {
    //we can also use updatetOne // UpdateMany but it will only print status
    const updateMethod = await Playlist.findByIdAndUpdate(
      { _id },
      { $set: { name: "JavaScript" } },
      { useFindAndModify: false, new: true } //new false will output the previous value
    );
    console.log(updateMethod);
  } catch (err) {
    console.log(err);
  }
};
//UpdateDocumment("60d84fdfe9f6ab34f434f736");(uncomment it)
//---------------------------------------------Delete Query------------------------------------------------
const DelDocument = async (_id) => {
  try {
    //we can also use DeleteOne and many
    const doc = await Playlist.findByIdAndDelete({ _id });
    console.log(doc);
  } catch (err) {
    console.log(err);
  }
};
DelDocument("60d84fdfe9f6ab34f434f736");
//validation can be possible by validator Npm and also in scehema (pre,userdefined)+unique is not a validator
