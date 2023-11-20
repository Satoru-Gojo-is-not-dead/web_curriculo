import { useState, useRef, FunctionComponent } from "react";
import JoditEditor from "jodit-react";

interface Props {
  handleContent: (value: string) => void
}

const RichTextEditor: FunctionComponent<Props> = ({handleContent}) => {
  const editor = useRef(null);
  const [content] = useState("");

  const config = {
    readonly: false,
    height: 300,
    placeholder: 'Escreva sua mensagem',
    color: 'black'
  };

  return (
    <div id="editor">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => handleContent(newContent)}
      />
    </div>
  );
};

export default RichTextEditor;
