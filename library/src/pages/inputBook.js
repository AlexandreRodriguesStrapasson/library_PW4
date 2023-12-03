
import Browser from '../components/browser';
import FormBook from '../components/formBook';
import Style from '../style/backGround.module.css';

function InputBook() {
  return (
    <div>
      <Browser />
      <div className={Style.div}>
        <FormBook/>
        </div>
    </div>
  );
}

export default InputBook;
