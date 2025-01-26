import Button from "../../ui-components/src/components/Button/Button.jsx";

const Preview = () => {
  return (
    <div className="flex justify-center align-middle">
      <div className=" h-[500px] w-[500px] my-56">
        <Button variant="primary" />
        <Button variant="secondary" />
      </div>
    </div>
  );
};

export default Preview;
