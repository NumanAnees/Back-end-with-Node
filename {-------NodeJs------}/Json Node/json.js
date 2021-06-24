const Data = {
  name: "Numan Anees",
  age: 19,
  class: "5th semester",
  height: 5.6,
};
const fs = require("fs");
const JsonData = JSON.stringify(Data);
// writing
fs.writeFile("JsonData.json", JsonData, (e) => {
  console.log(e);
  console.log("Json written successfully :)");
});
//Reading (we can not apply obj.name in json)
fs.readFile("JsonData.json", "UTF-8", (err, data) => {
  const RealData = JSON.parse(data);
  console.log(RealData);
});
//All done
