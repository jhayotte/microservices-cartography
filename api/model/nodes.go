package model

type Node struct {
	Name     string `json:"name"`
	Children []Node `json:"children,omitempty"`
}
