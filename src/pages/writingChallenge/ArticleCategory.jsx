import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import UserNavbar from '../../components/userNavbar/UserNavbar'
import './articlecategory.css';

import {fetchAllArticleTopics, fetchArticleByTopic, restorefetchArticleByTopicInitial } from "../../Actions";

const ArticleCategory = () => {
    const dispatch = useDispatch();

    const { allTopics, articlesByTopic } = useSelector((state) => state.challenge);


    useEffect(() => {
        dispatch(fetchAllArticleTopics());
      }, [dispatch]);

      const handleFetchArticlebyCat = (id) => {
           // Get all checkboxes with class 'toggle'
          dispatch(restorefetchArticleByTopicInitial())
          dispatch(fetchArticleByTopic(id))
      }

      const toggles = document.querySelectorAll('.toggle');

      toggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
          if (this.checked) {
            // Close any open tabs
            const openToggles = document.querySelectorAll('.toggle:checked');
            openToggles.forEach(openToggle => {
              if (openToggle !== this) {
                openToggle.checked = false;
              }
            });
          }
        });
      });


  return (
    
    <>
          <UserNavbar />
          <div className='article-category-wrapper'>
             <h1 className='article-category-heading'>Select a Category</h1>

             <div class="article-category-list-container">
              {
                allTopics.map((item) => (
                  <div class="wrap-collabsible" 
                  onClick={() => handleFetchArticlebyCat(item.id)}
                  
                  >
                  <input id={`${item.id}`} class="toggle" type="checkbox" />
                  <label for={`${item.id}`}class="lbl-toggle">{item.name}</label>
                  <div class="collapsible-content">
                    <div class="content-inner">
                        {
                          articlesByTopic?.map((item) => (
                            <>
                            <a href={`/home/articlecategory/${item.id}`}>{item.content}</a>
                            <hr />
                            </>
                          ))
                        }
                    </div>
                  </div>
                </div>  
                ))
              }                      
            </div>

          </div>

    </>
    

  )
}

export default ArticleCategory