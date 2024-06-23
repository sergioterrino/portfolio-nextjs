
interface ContainerProps {
  children: React.AwaitedReactNode
}

const Container = (props: ContainerProps) => {
  const { children } = props;
  return (
    <div className="w-full max-w-6xl px-4 pb-40 mx-auto mt-32 md:pb-0 md:px-6">
      {children}
    </div>
  );
}

export default Container;