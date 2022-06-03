package helpers

type Movie struct {
	ID string `json:"id"`
	Isbn string `json:"isbn"`
	Title string       `json:"title"`
	Director *Director `json:"director"`
}

type Director struct {
	Firstname string `json:"firstname"`
	Lastname string `json:"lastname"`
}


func GenerateMovie() []Movie {
	movies := []Movie{
		{ID: "1", Title: "Iron Man", Isbn:  "1337", Director: &Director{ Firstname: "Jon", Lastname: "Favreau" }},
		{ID: "2", Title: "Tropa de Elite", Isbn:  "39512", Director: &Director{ Firstname: "José", Lastname: "Padilha" }},
		{ID: "3", Title: "Tropa de Elite 2", Isbn:  "39513", Director: &Director{ Firstname: "José", Lastname: "Padilha" }},
		{ID: "5", Title: "Harry Potter 1", Isbn:  "1298412", Director: &Director{ Firstname: "Chris", Lastname: "Columbus" }},
		{ID: "6", Title: "Harry Potter 2", Isbn:  "1298413", Director: &Director{ Firstname: "Chris", Lastname: "Columbus" }},
		{ID: "7", Title: "Harry Potter 3", Isbn:  "1298414", Director: &Director{ Firstname: "Chris", Lastname: "Columbus" }},
		{ID: "8", Title: "Harry Potter 4", Isbn:  "1298415", Director: &Director{ Firstname: "Chris", Lastname: "Columbus" }},
		{ID: "9", Title: "Harry Potter 5", Isbn:  "1298416", Director: &Director{ Firstname: "Chris", Lastname: "Columbus" }},
	}

	return movies
}