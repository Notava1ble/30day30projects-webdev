const page = () => {
  let data = "Unfetched data";
  setTimeout(() => {
    data = "This is the page which loaded some data";
  }, 20);
  return <div>{data}</div>;
};
export default page;
