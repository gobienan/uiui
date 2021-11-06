export const reveal = async () => {
  setCode();
};

const setCode = () => {
  setTimeout(() => {
    if (window.innerWidth < 500) return;
    const editor = document.querySelector('.editor iframe');
    const url =
      'https://codesandbox.io/embed/uiui-button-example-8-ottdp?fontsize=14&hidenavigation=1&theme=dark&codemirror=1';
    editor.setAttribute('src', url);
  }, 1000);
};
