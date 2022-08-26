package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"wxcloudrun-golang/db"
)

func main() {
	if err := db.Init(); err != nil {
		panic(fmt.Sprintf("mysql init failed with %+v", err))
	}

	//http.HandleFunc("/", service.IndexHandler)
	//http.HandleFunc("/api/count", service.CounterHandler)
	//http.HandleFunc("/api/student", service.StudentHandler)
	//log.Fatal(http.ListenAndServe(":80", nil))

	r := gin.Default()
	r.LoadHTMLGlob("dist/*.html")
	r.LoadHTMLFiles("assets/*/*")
	r.Static("/assets", "./dist/assets")
	r.StaticFile("/", "dist/index.html")
	r.Run(":80")
}
