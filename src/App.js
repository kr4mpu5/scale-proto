import React, { useState } from 'react'
import AddImageForm from './AddImageForm'
import ImageTable from './ImageTable'

const App = () => {

	const imagesData = [
		// { iId: 1, id: '82', author: 'Rula Sibai'},
		// { iId: 2, id: '826', author: 'Nick Scheerbart'}
	]

	const [ images, setImages ] = useState(imagesData)

	const addImage = image => {
		image.iId = images.length + 1
		setImages([...images, image])
	}

	return (
		<div className="container">
			<h1>Scale Proto</h1>
			<div className="flex-row">
				<div className="flex-large">
							<h2>Add image</h2>
							<AddImageForm addImage={addImage} />
				</div>
				<div className="flex-large">
					<h2>View images</h2>
					<ImageTable images={images} />
				</div>
			</div>
		</div>
	)
}

export default App
