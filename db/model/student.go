package model

import "wxcloudrun-golang/db"

type Student struct {
	Id         int32  `gorm:"column:id" json:"id"`
	WechatCode string `gorm:"column:wechatCode" json:"wechatCode"`
	Name       string `gorm:"column:name" json:"name"`
	Sex        string `gorm:"column:sex" json:"sex"`
	Age        string `gorm:"column:age" json:"age"`

	//Selections []Selection
}

const tableName = "student"

func CreateStudentExample(students []Student) {
	db.Get().Table(tableName).Create(students)
}
