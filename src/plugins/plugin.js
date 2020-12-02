export default function myPlugin(editor) {
  editor.runCommand("my-command-id");
  editor.BlockManager.add("my-first-block", {
    label: "Simple block",
    content: '<div class="my-block">This is a simple block</div>',
  });
}
