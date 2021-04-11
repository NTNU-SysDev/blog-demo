import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./NewPost.styles.css";

import { blogPosts } from '../../posts';

export function NewPost() {
  // Obs. Her ser man at det fort blir mange state verdier
  // Det fins andre måter å gjøre det på, men dette er "lettere"
  // Så lar eksempelet stå slik. Man kan også gjøre slik man 
  // Vanligvis gjør i vanilla html, css og js
	const [tagline, setTagline] = useState("");
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [shortText, setShortText] = useState("");
	const [fullText, setFullText] = useState();
	const [thumbnail, setThumbnail] = useState("");

  const history = useHistory();

  function handleSubmit() {
    const newId = blogPosts[blogPosts.length - 1].id + 1;
    const newPost = {
      id: newId,
      tagline: tagline,
      title: title,
      date: date,
      featured: false,
      shortText: shortText,
      fullText: fullText,
      thumbnail: thumbnail,
    }

    blogPosts.push(newPost);
    history.push("/");
  }

	return (
		<div className="container mx-auto">
			<form className="new-post-form">
				<h1 className="pb-4">Create new post</h1>
				<div className="mb-3">
					<label className="form-label">
						Tagline
					</label>
					<input type="text" className="form-control" value={tagline} onChange={(e) => setTagline(e.target.value)} />
					<div className="form-text">
						Tagline is the "tag" showing at the top of the card
					</div>
				</div>
        <div className="mb-3">
					<label className="form-label">
						Title
					</label>
					<input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
				</div>
        <div className="mb-3">
					<label className="form-label">
						Date
					</label>
					<input type="text" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
          <div className="form-text">
						Date is just a text for easy convenience (example: 11. April)
					</div>
				</div>
        <div className="mb-3">
					<label className="form-label">
						Short Text
					</label>
					<input type="text" className="form-control" value={shortText} onChange={(e) => setShortText(e.target.value)} />
          <div className="form-text">
						This is the text that will be displayed on the card on "Home" page
					</div>
				</div>
        <div className="mb-3">
					<label className="form-label">
						fullText
					</label>
					<textarea type="text" className="form-control" value={fullText} onChange={(e) => setFullText(e.target.value)} />
          <div className="form-text">
						This is the text that will be displayed on the "Details" page
					</div>
				</div>
        <div className="mb-3">
					<label className="form-label">
						Thumbnail
					</label>
					<input type="text" className="form-control" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
          <div className="form-text">
						Here you can insert a link to an image (example: https://source.unsplash.com/random/250x200. You can change 250x200 to (Width x Height))
					</div>
				</div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
			</form>
		</div>
	);
}
