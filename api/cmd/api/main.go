package main

import (
	"api/model"
	"net/http"

	"github.com/gin-gonic/gin"
)

func getData(c *gin.Context) {
	data := model.Node{
		Name: "Root",
		Children: []model.Node{
			{
				Name: "Child 1",
				Children: []model.Node{
					{Name: "Grandchild 1"},
					{Name: "Grandchild 2"},
				},
			},
			{
				Name: "Child 2",
				Children: []model.Node{
					{Name: "Grandchild 3"},
					{Name: "Grandchild 4"},
				},
			},
		},
	}
	c.JSON(http.StatusOK, data)
}

func main() {
	r := gin.Default()

	// Enable CORS
	r.Use(func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS")
		c.Header("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}
		c.Next()
	})

	r.GET("/data", getData)
	r.Run(":8080")
}
