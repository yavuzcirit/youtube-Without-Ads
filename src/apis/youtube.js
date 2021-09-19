import axios from 'axios'

const KEY='AIzaSyDT_eThiU5hCUzU-9MP74o5eZsMsM12Nmc'



export default axios.create({
	baseURL:'https://www.googleapis.com/youtube/v3',
	params:{
		part:'snippet',
		maxResults:20,
		type:'video',
		key:KEY,
	}

});


