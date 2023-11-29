import React from 'react';
import "./singleblog.css"
import Teapot from "../../assets/images/Adebayo.jpeg"
import OkadaImage from "../../assets/images/Okada_Books_statement.jpg"
const SingleBlog = () => {
  return (
    <div className='single-book-wrapper'>
        <h2 className='single-blog-title'>A Heartfelt Message to Okada
Books and the Literature
Community</h2>
        <div className="single-blog-image">
          <img  src={Teapot} alt="Adebayo Jacobs-Amoo" />
        </div>
        <p className='single-blog-text'>As the founder and CEO of MyLibri Books, it's with a heavy heart that I address the recent news
of the closure of Okada Books store. The literary world is a close-knit community, and the loss of
such a pioneering platform is felt deeply by all of us.
Okada Books, under the leadership of Okechukwu Ofili, has been a beacon in the Nigerian
literary scene, providing a crucial platform for indigenous authors and readers alike. Their
contribution to the industry has been immeasurable, creating a thriving community where
writers and readers could connect and flourish. Their closure marks the end of an era, but also a
reminder of the resilience and spirit of the literary community</p>
<div className="single-blog-image-two">
          <img  src={OkadaImage} alt="Adebayo Jacobs-Amoo" />
        </div>
        <p className='single-blog-text'>
        In these challenging times, it's important to remember the impact Okada Books had in shaping
the Nigerian book industry. Their dedication, hard work, and determination in the face of the
unique challenges of the Nigerian business landscape have been nothing short of inspiring.
To Okechukwu Ofili, his wonderful team, and the entire community of Okada Books, we at
MyLibri Books extend our deepest sympathies. Your loss is our loss, and while we mourn the end
of this chapter, we also look forward with hope to the new beginnings it brings. 
Change, though difficult, opens doors to new opportunities. We eagerly await the next venture
that the brilliant minds behind Okada Books will embark upon and wish them all the success
they rightly deserve.
In times like these, we are reminded of the power of community and resilience. Let us continue
to support and uplift each other, keeping the spirit of innovation and passion for literature alive.
With heartfelt sympathy and anticipation for the future.
<br />
Adebayo Jacobs-Amoo
<br />
Founder/CEO, MyLibri Books
        </p>
    </div>

    
   
  )
}

export default SingleBlog