import React, { useState, useEffect } from 'react'
import api from './api'
import './App.css';


const App = () => {
  const [article, setArticle] = useState(null)

  useEffect(() => {
    const uuid = 'a6282b95-e620-4040-87d1-731fed85a7d6'
    const opts = {
      'authUser': null, // String | 
      'authorization': null, // String | 
      'textonly': false // Boolean | 
    }

    api
      .articleUuidGet(uuid, opts, (error, data, response) => {
        if (error) {
          console.log('error when fetching article', error)
        } else {
          console.log('API called successfully. Returned data: ', data)
          setArticle(data)
        }
      })
  }, [])
 
  console.log('article is:', article)

  /*api.articleUuidGet(uuid, opts, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      for (const item of data.body) {
        if (item.html) {
          console.log(`<p>${item.html}</p>`)
        } else if (item.headline) {
          console.log(`<h2>${item.headline}</h2>`)
        } else if (item.image) {
          console.log(`<img src="${item.image.url}" alt="${item.image.caption}" />`)
        } else if (item.box) {
          console.log(`<div class="fact-box"><h2>${item.box.headline}</h2><h3>${item.box.title}</h3><p>${item.box.content}</p></div>`)
        }
      }
      //console.log('API called successfully. Returned data: ', data);
    }
  });*/

  const articleBody = () => {
    return article.body.map((block, index) =>
      <div key={index}>
        {block.headline &&
          <h2>{block.headline}</h2>
        }
        {block.html &&
          <p>{block.html}</p>
        }
        {block.image &&
          <figure>
            <img src={block.image.url} alt=""/>
            <figcaption>{block.image.caption} <b>BILD: {block.image.byline}</b></figcaption>
        </figure>
        }
        {block.box &&
          <div className="fact-box">
            <h2>${block.box.headline}</h2>
            <h3>${block.box.title}</h3>
            <p>${block.box.content}</p>
          </div>
        }
      </div>
    )
  }

  return (
    <>
      {article ?
        <article>
          <h1>{article.title}</h1>
          <figure>
            <img src={article.mainImage.url} alt=""/>
            <figcaption>{article.mainImage.caption} <b>BILD: {article.mainImage.byline}</b></figcaption>
          </figure>
          <p className="preamble">{article.preamble}</p>
          {articleBody()}
        </article>
        :
        <div>...loading</div>
      }
      
      

    </>
  )
}

export default App
