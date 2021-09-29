import React,{useState,useEffect} from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'


const App=()=>{
	const [selectedVideo,setSelectedVideo]=useState(null);
	const [videos,search]=useVideos('news')
	
	useEffect(()=>{
		setSelectedVideo(videos[0])
	},[videos])
	// const onVideoSelect=(video)=>{
	// 	// console.log('from the app',video)

	// 	setSelectedVideo(video);
	// }
// setSelectedVideo(response.data.items[0])


	return(
			<div className='ui container'>

			<SearchBar onSubmit={search}/>
			<div className='ui grid'>
				<div className='ui row'>
				<div className='eleven wide column'>
				<VideoDetail video={selectedVideo}/>
				</div>
				<div className='five wide column'>

				<VideoList 
				onVideoSelect={(video)=>setSelectedVideo(video)} 
				videos={videos}/>
				</div>
				</div>
			</div>
			</div>
		)
}






	

	

export default App
