type props = {
  children: JSX.Element | JSX.Element[] | string;
};

function SectionContainer({ children }: props) {
  return (
    <section className="w-[90%] lg:w-[990px] mx-auto">
      {children}
    </section>
  );
}

export default SectionContainer;
