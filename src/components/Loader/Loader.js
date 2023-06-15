import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#40e0d0"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{ justifyContent: 'center' }}
      visible={true}
    />
  );
};

export default Loader;
