"use client";
import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function MyEditor() {
  const [value, setValue] = React.useState<string>("");
  return (
    <Editor
      apiKey='ug62ujl5oxea1nbk1usj8tdi04ga2rvtzokqydp8no5m5ss7'
      init={{
        plugins: [
          "anchor",
          "autolink",
          "charmap",
          "codesample",
          "emoticons",
          "image",
          "link",
          "lists",
          "media",
          "searchreplace",
          "table",
          "visualblocks",
          "wordcount",
          "checklist",
          "mediaembed",
          "casechange",
          "export",
          "formatpainter",
          "pageembed",
          "a11ychecker",
          "tinymcespellchecker",
          "permanentpen",
          "powerpaste",
          "advtable",
          "advcode",
          "editimage",
          "advtemplate",
          "ai",
          "mentions",
          "tinycomments",
          "tableofcontents",
          "footnotes",
          "mergetags",
          "autocorrect",
          "typography",
          "inlinecss",
          "markdown",
          "importword",
          "exportword",
          "exportpdf"
        ],
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        tinycomments_mode: "embedded",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" }
        ],
        ai_request: (request: any, respondWith: any) =>
          respondWith.string(() =>
            Promise.reject("See docs to implement AI Assistant")
          )
      }}
      onChange={(e) => {
        setValue(e.target.getContent());
      }}
      initialValue={value ?? "Welcome to TinyMCE!"}
    />
  );
}
