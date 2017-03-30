import axios from 'axios';

const API_URL = 'http://www.uopmotors.com/api';

export function sendMail(props) {
	var data = props;		
	console.log("in sendMail.js");
	console.log(data);
	return axios.post(API_URL+'/postEmail',data)
		.then(response => {
			// store.dispatch(createUserSuccess(response.config.data));
			console.log("postEmail, response");
			console.log(response);
			return response;
		})
		.catch(error => {
			// store.dispatch(createUserFailure(error.response));
			console.log("postEmail, error");
			return error;
		});
}	