export default (err, req, res, next) => {
  console.log("에러처리 미들웨어가 실행되었습니다.");
  console.error(err);

  if (err.name === "ValidationError") {
    return res.status(400).json({ errorMessage: err.message });
  }
  //서버에 문제 생길시
  return res.status(500).json({ errorMessage: "서버에서 에러가 발생했습니다" });
};
