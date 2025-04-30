const page = async () => {
  const data = "This is the page which loaded some data";
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <div>{data}</div>;
};
export default page;
