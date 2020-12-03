export default function functionalButton(editor) {
  editor.BlockManager.add("my-first-block", {
    label: "Simple block",
    content: "<button>Click</button>",
    render: ({ el }) => {
      const btn = document.createElement("button");
      btn.innerHTML = "Click me";
      btn.addEventListener("click", () => alert("Do something"));
      el.appendChild(btn);
    },
  });
}
