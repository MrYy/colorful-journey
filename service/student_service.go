package service

import (
	"net/http"
	"wxcloudrun-golang/db/model"
)

func StudentHandler(w http.ResponseWriter, r *http.Request) {
	result := &JsonResult{}
	model.CreateStudentExample([]model.Student{{Name: "Peter", Sex: "Male", WechatCode: "2343432"}})
	result.Data = "success"
	PrintResponse(result, w)
}
