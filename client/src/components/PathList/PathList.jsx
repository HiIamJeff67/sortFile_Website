import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./PathList.css";

const PathList = (props) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/sortFileInAlphabeticalOrder");
    props.setSidebarState(false);
  }

  return (
    <div className='pathlist-container'>
      <h5 className='pathlist-title'>
        <span className='title-border-left'></span>
          <p>List of Functionality</p>
        <span className='title-border-right'></span>
      </h5>
      <div className='pathlist-content'>
        <div className='btn btn-1'
             onClick={handleSubmit}>
            sort file in Alphabetical Order
        </div>
      </div>
    </div>
  )
}

export default PathList