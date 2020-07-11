/*jshint esversion:9*/


import React,{ useEffect, useMemo, useState,useCallback } from 'react';
import {IconButton,Button} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import {Slate, Editable, withReact} from 'slate-react';
import {createEditor,Transforms, Editor, Text} from 'slate';
import './editor-style.scss';

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

function TextEditor(){
  const [fontSize, setFontSize] = useState('28');
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
             CustomEditor.toggleCodeBlock(editor)
             break
              }

              // When "B" is pressed, bold the text in the selection.
              case 'b': {
                event.preventDefault()
                 CustomEditor.toggleBoldMark(editor)
                 break
           }

           case 'i': {
          event.preventDefault()
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
     default:
       return <DefaultElement {...props} />
   }
 }, [])

 const renderLeaf = useCallback(props => {
  return <Leaf {...props} fontSize={fontSize}/>
}, [])

  return (
    <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
    <div className='container'>
    <div className='right-pane flex-item'>
        <IconButton className='btn'>
          <ArrowBackIosIcon/>
        </IconButton>
        <IconButton
        className='btn'
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleBoldMark(editor)
          }}
        >
          <FormatBoldIcon/>
        </IconButton>
        <IconButton
        className='btn'
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleItalicMark(editor)
          }}
        >
          <FormatItalicIcon/>
        </IconButton>
        <Button
        className='btn'
        style={{fontSize:'20px'}}
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleCodeBlock(editor)
          }}
        >
          C
        </Button>
      </div>
      <div className='editor-container'>
      <div className='paper flex-item'>
      <Editable
      onKeyDown={onKeyChange}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
       />
       </div>
       </div>
      </div>
    </Slate>
 );

}

export default TextEditor;
