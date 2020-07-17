const formidable = require("formidable");
const mv = require("mv");
const XLSX = require("xlsx");
const LichThiRepository = require("../../repositories/lichThi-repository");
const lichThiRepository = new LichThiRepository();
global.__basedir = __dirname;
function excelDateToISODateString(excelDateNumber) {
  return new Date(Math.round((excelDateNumber - 25569) * 86400 * 1000)).toISOString().substring(0, 10);
}
async function importExcelData2MySQL(filePath) {
  var workbook = XLSX.readFile(filePath, { cellDates: false });
  var sheet_name_list = workbook.SheetNames;
  var workSheet = workbook.Sheets[sheet_name_list[0]];

  var range = XLSX.utils.decode_range(workSheet["!ref"]);
  range.s.r = 7;
  workSheet["!ref"] = XLSX.utils.encode_range(range);

  var xlData = XLSX.utils.sheet_to_json(workSheet);
  console.log(xlData.length);
  const dataResults = xlData.map((item) => {
    return {
      name: item["HỌ VÀ TÊN"],
      mssv: item["MÃ SINH VIÊN"],
      lop: item["LỚP"],
      ngayThi: excelDateToISODateString(item["NGÀY THI"]),
      phongThi: item["PHÒNG THI"],
      lopHocPhan: item["LỚP HỌC PHẦN"],
      giothi: item["GIỜ THI"]
    };
  });
  let promises = [];
  let length = dataResults.length / 1000;
  if (dataResults.length % 1000 > 0) {
    length++;
  }

  for (let i = 0; i <= length; i++) {
    const promise = lichThiRepository.bulkAdd(
      dataResults.slice(i * 1000, i * 1000 + 1000)
    );
    promises.push(promise);
  }
  await lichThiRepository.truncate();
  return await Promise.all(promises);
}
module.exports = async (req, res, next) => {
  try {
    const form = new formidable.IncomingForm();
    await form.parse(req, function (err, fields, files) {
      const oldpath = files.filetoupload.path;
      const newpath = __basedir + "/fileStorage/" + "lich_Thi.xls";
      mv(oldpath, newpath, function (err) {
        res.write("File uploaded and moved!");
        res.end();
      });
    });
    await setTimeout(() => {
      importExcelData2MySQL(__basedir + "/fileStorage/" + "lich_Thi.xls");
    }, 1000);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
