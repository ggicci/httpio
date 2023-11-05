package httpin

import (
	"encoding/json"
	"errors"
	"net/http"

	"github.com/ggicci/httpin/internal"
)

var globalCustomErrorHandler errorHandler = defaultErrorHandler

// errorHandler is the type of custom error handler. The error handler is used
// by the http.Handler that created by NewInput() to handle errors during
// decoding the HTTP request.
type errorHandler = func(w http.ResponseWriter, r *http.Request, err error)

// RegisterErrorHandler replaces the default error handler with the given
// custom error handler. The default error handler will be used in the http.Handler
// that decoreated by the middleware created by NewInput().
func RegisterErrorHandler(handler errorHandler) {
	internal.PanicOnError(validateErrorHandler(handler))
	globalCustomErrorHandler = handler
}

func defaultErrorHandler(rw http.ResponseWriter, r *http.Request, err error) {
	var invalidFieldError *InvalidFieldError
	if errors.As(err, &invalidFieldError) {
		rw.Header().Add("Content-Type", "application/json")
		rw.WriteHeader(http.StatusUnprocessableEntity) // status: 422
		json.NewEncoder(rw).Encode(invalidFieldError)
		return
	}

	http.Error(rw, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError) // status: 500
}

func validateErrorHandler(handler errorHandler) error {
	if handler == nil {
		return errors.New("nil error handler")
	}
	return nil
}
