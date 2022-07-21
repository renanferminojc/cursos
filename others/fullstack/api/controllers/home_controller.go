package controllers

import (
	"github.com/renanferminojc/fullstack/api/responses"
	"net/http"
)

func (server *Server) Home(w http.ResponseWriter, r *http.Request)  {
	responses.JSON(w, http.StatusOK, "Welcome to this awesome API")
}