import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BLOG_API } from '../../constants/BLOG_API';

import Navigation from '../navigation/Navigation';

function PostPage () {
	const [post, setPosts] = useState([]);

	let { id } = useParams();

	const url = BLOG_API + "/" + id;

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(posts => setPosts(posts))
			.catch(error => console.log(error))
	}, []);

	return (
		<div>
			<Navigation />
			<div className="contentContainer">
				<h3 dangerouslySetInnerHTML={{__html: post.date}} />
				<h1 dangerouslySetInnerHTML={{__html: post && post.title ? post.title.rendered : ''}} />
				<div 
					className="copy"
					dangerouslySetInnerHTML={{__html: post && post.content ? post.content.rendered : ''}}
				/>
			</div>
		</div>
	);
};

export default PostPage;