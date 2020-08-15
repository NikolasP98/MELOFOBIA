/*jshint esversion:9*/


import React,{ useEffect, useMemo, useState,useCallback } from 'react';
import {IconButton,Button,TextField} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
//import InsertImages from 'slate-drop-or-paste-images'
import {Slate, Editable, withReact} from 'slate-react';
import {createEditor,Transforms, Editor, Text} from 'slate';
import SpotifyPlayer from 'react-spotify-player';
import SaveIcon from '@material-ui/icons/Save';
import './editor-style.scss';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';

const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>
}


const Leaf = props => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? '900': 'normal', fontSize:`${props.fontSize}px`, fontStyle:props.leaf.italic?'italic':'normal' }}
      className='edit'
    >
      {props.children}
    </span>
  )
}
//
// const plugins = [
//   InsertImages({
//     extensions: ['png','jpg'],
//     insertImage: (change, file) => {
//       return change.insertBlock({
//         type: 'image',
//         isVoid: true,
//         data: { file }
//       })
//     }
//   })
// ]





const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    })

    return !!match
  },

  isItalicMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.italic === true,
    })

    return !!match
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'code',
    })

    return !!match
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor)
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleItalicMark(editor) {
    const isActive = CustomEditor.isItalicMarkActive(editor)
    Transforms.setNodes(
      editor,
      { italic: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor)
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code' },
      { match: n => Editor.isBlock(editor, n) }
    )
  },
}


class SimpleImage {
  static get toolbox() {
      return {
        title: 'Image',
        icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
      };
    }

    constructor({data}){
   this.data = data;
 }

  render(){
    this.wrapper = document.createElement('div');
     const input = document.createElement('input');

     this.wrapper.classList.add('simple-image');
     this.wrapper.appendChild(input);

     input.placeholder = 'Paste an image URL...';
     input.value = this.data && this.data.url ? this.data.url : '';

     input.addEventListener('paste', (event) => {
       this._createImage(event.clipboardData.getData('text'));
     });

     return this.wrapper;
  }

  _createImage(url){
   const image = document.createElement('img');
   const caption = document.createElement('input');

   image.src = url;
   caption.placeholder = 'Caption...';

   this.wrapper.innerHTML = '';
   this.wrapper.appendChild(image);
   this.wrapper.appendChild(caption);
 }

  save(blockContent){
    const image = blockContent.querySelector('img');
      const caption = blockContent.querySelector('input');

      return {
        url: image.src,
        caption: caption.value
      }
  }
}

const editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holder: 'editorjs',
   tools: {
   header: {
     class: Header,
     inlineToolbar : ['link']
   },
   image: SimpleImage,
   list: {
     class: List,
     inlineToolbar : ['link','bold']
   },
   embed: {
     class: Embed,
     inlineToolbar : false,
     config:{
       youtube:true
     }
   }

},
 autofocus: true,
 placeholder: 'Let`s write an awesome story!'
});




function TextEditor(){
  const [fontSize, setFontSize] = useState('28');
  const [codeBlock,setCodeBlock] = useState(false);
  const [bold,setBold] = useState(false);
  const [italic,setItalic] = useState(false);
  const[uri,setUri] = useState('');
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])

  const onKeyChange= event => {
    if(event.key === '&'){
      event.preventDefault();
      editor.insertText('and');
    }

    if (!event.ctrlKey) {
              return
            }

            switch (event.key) {
              // When "`" is pressed, keep our existing code block logic.
              case '`': {
                event.preventDefault()
              setCodeBlock(!codeBlock);
             CustomEditor.toggleCodeBlock(editor)
             break
              }

              // When "B" is pressed, bold the text in the selection.
              case 'b': {
                event.preventDefault()
                setBold(!bold);
                 CustomEditor.toggleBoldMark(editor)
                 break
           }

           case 'i': {
          event.preventDefault()
          setItalic(!italic);
           CustomEditor.toggleItalicMark(editor)
           break
          // Transforms.setNodes(
          //   editor,
          //   { italic: true },
          //   { match: n => Text.isText(n), split: true }
          // )
          // break
        }

           default:
  };
}

  const renderElement = useCallback(props => {
   switch (props.element.type) {
     case 'code':
       return <CodeElement {...props} />
    case 'img':
      return <img {...props} />
     default:
       return <DefaultElement {...props} />
   }
 }, [])

 const renderLeaf = useCallback(props => {
  return <Leaf {...props} fontSize={fontSize}/>
}, [])

const size = {
width: '100%',
height: 300,
};
const view = 'coverart'; // or 'coverart'
const theme = 'black'; // or 'white'

  return (
    <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)} >
    <div className='container'>
    <div className='left-pane flex-item'>
        <IconButton className='btn' boxShadow={3}>
          <ArrowBackIosIcon/>
        </IconButton>

      </div>
      <div className='editor-container'>
      <div className='paper flex-item' id="editorjs">

       </div>
       </div>

      <div className='right-pane'>
      <TextField variant='outlined' label='Share your desired spotify playlist uri' value={uri} onChange={e => setUri(e.target.value)} className='uri-text'/>
<SpotifyPlayer
uri={uri}
size={size}
view={view}
theme={theme}
/>
<br/>
<br/>
  <Button variant='outlined' startIcon={<SaveIcon style={{color:'red'}}/>} className='save-btn'>Save</Button>
      </div>
      </div>
    </Slate>
 );

}

export default TextEditor;

// <IconButton
// className='btn'
// style={{color:bold?'black':'white',backgroundColor:bold?'white':'black'}}
//   onMouseDown={event => {
//     event.preventDefault()
//     setBold(!bold);
//     CustomEditor.toggleBoldMark(editor)
//   }}
// >
//   <FormatBoldIcon/>
// </IconButton>
// <IconButton
// className='btn'
// style={{color:italic?'black':'white',backgroundColor:italic?'white':'black'}}
//   onMouseDown={event => {
//     event.preventDefault()
//     setItalic(!italic);
//     CustomEditor.toggleItalicMark(editor)
//   }}
// >
//   <FormatItalicIcon/>
// </IconButton>
// <Button
// className='btn'
// style={{fontSize:'20px',color:codeBlock?'black':'white',backgroundColor:codeBlock?'white':'black'}}
//   onMouseDown={event => {
//     event.preventDefault()
//     setCodeBlock(!codeBlock);
//     CustomEditor.toggleCodeBlock(editor)
//   }}
// >
//   C
// </Button>


// <Editable
// onKeyDown={onKeyChange}
//   renderElement={renderElement}
//   renderLeaf={renderLeaf}
//  />
