import React, { useState, useEffect } from 'react'
import api from './api'
import Accordion from './Components/Accordion'


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

  const articleBody = () => {
    return article.body.map((block, index) =>
      <div key={index}>
        {block.headline &&
          <h2 className="headline-text">{block.headline}</h2>
        }
        {block.html &&
          <p className="text" dangerouslySetInnerHTML={{__html: block.html}}></p>
        }
        {block.image &&
          <figure className="image-container">
            <img src={block.image.url} alt=""/>
            <figcaption className="image-text">{block.image.caption} <span className="image-photographer">BILD: {block.image.byline}</span></figcaption>
        </figure>
        }
        {block.box &&
          <Accordion headline={block.box.headline} title={block.box.title} content={block.box.content} />
        }
      </div>
    )
  }

  return (
    <div className="article-container">
      {article ?
        <div className="article">
          <h1 className="header-headline">{article.title}</h1>
          <figure className="image-container">
            <img src={article.mainImage.url} alt=""/>
            <figcaption className="image-text">{article.mainImage.caption} <span className="image-photographer">BILD: {article.mainImage.byline}</span></figcaption>
          </figure>
          <p className="preamble">{article.preamble}</p>
          {articleBody()}
        </div>
        :
        <div>...loading</div>
      }
      
      

    </div>
  )
}

export default App

/*
const articleBody = () => {
  return article.body.map((block, index) =>
    <div key={index}>
      {block.headline &&
        <h2>{block.headline}</h2>
      }
      {block.html &&
        <p dangerouslySetInnerHTML={{__html: block.html}}></p>
      }
      {block.image &&
        <figure>
          <img src={block.image.url} alt=""/>
          <figcaption>{block.image.caption} <b>BILD: {block.image.byline}</b></figcaption>
      </figure>
      }
      {block.box &&
        <div className="fact-box">
          <h2 dangerouslySetInnerHTML={{__html: block.box.headline}}></h2>
          <h3 dangerouslySetInnerHTML={{__html: block.box.title}}></h3>
          <p dangerouslySetInnerHTML={{__html: block.box.content}}></p>
        </div>
      }
    </div>
  )
}
*/
