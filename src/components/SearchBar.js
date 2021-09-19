import React from 'react'

class SearchBar extends React.Component {


	state={
		term:''
	};

	onInputChange=(e)=>{
		this.setState({term:e.target.value})
	}

	onFormSubmit=(e)=>{
		e.preventDefault();

		this.props.onSubmit(this.state.term)

	}

	render(){
		return(
			<div style={{backgroundColor:'red'}} className='search-bar ui segment'>
				<form onSubmit={this.onFormSubmit} className='ui form'>
				
					<div className='field'>
						<label style={{color:'white'}}>Video Search</label>
						<input 
						onChange={this.onInputChange} 
						value={this.state.term} 
						className='search' 
						type='text'/>
						
					</div>
					


				</form>


			</div>
		)
	}
}

export default SearchBar