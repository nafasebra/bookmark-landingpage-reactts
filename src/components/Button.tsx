type props = {
  textButton: string;
  target: string;
  custormStyle: string;
};

function Button(props: props) {
  const { textButton, target, custormStyle } = props;

  return (
    <a
      href={target}
      className={`${custormStyle} flex items-center justify-center text-white font-semibold py-3 px-7 rounded-md hover:bg-transparent`}
    >
      {textButton}
    </a>
  );
}

export default Button;
