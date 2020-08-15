/*jshint esversion:9*/

import React,{useState,useEffect} from 'react';
import Editor from '../../Components/Editor/editor-component';
import ArticleTypeModal from '../../Components/SubComponents/article-type-modal/article-type-modal';

function EditorPage(){
  const [open,setOpen] = useState(false);
  const [selection,setSelection] = useState(null);

  useEffect(()=>{
    setOpen(true);
  })

  const handleSelect = type => {
    setSelection(type);
  };

  return(
    <div>
    <Editor/>
    <ArticleTypeModal Open={open} handleSelect={handleSelect} selection={selection}/>
    </div>
  )
}

export default EditorPage;
