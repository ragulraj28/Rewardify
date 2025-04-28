import { useForm } from "react-hook-form";
import Button from "../../common/button/Button"
import CardWrapper from "./CardWrapper"
import Checkbox from "./checkbox/Checkbox"

const Agreement = ({setActivePage}) => {

  const { register, handleSubmit, formState:{ errors }} = useForm();

  const submitHandler = (data) => {
    console.log(data);
    setActivePage("thankyou");
  }

  return (
    <div className="agreement">
      <h2 className="page-sub-title">Partner Agreement</h2>
      <p className="excerpt">Read the document below and agree to the terms to proceed.</p>
      <form onSubmit={handleSubmit(submitHandler)}>
        <CardWrapper>
          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur. Porta eget congue eu condimentum diam. Sed nulla viverra phasellus non enim commodo sed ullamcorper. Amet risus pretium eleifend eget eu vitae. Id cursus velit erat non porttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Pretium odio sit sit pulvinar. Ac elit ut tincidunt ipsum gravida rhoncus lectus. Id egestas blandit mauris arcu est tellus in sit nisl. Eu consectetur vitae odio ultrices netus pulvinar ultrices congue risus. orttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Pretiu orttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui. Id egestas blandit mauris arcu est tellus in sit nisl. Eu consectetur vitae odio ultrices netus pulvinar ultrices congue risus. orttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Pretiu orttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui. lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Accumsan adipiscing scelerisque egestas dignissim quam accumsan.</p>
        </CardWrapper>
        <Checkbox id={"readTerms"} {...register('readTerms', {required:"Read terms is required"})}  labelText={"I have read all the terms & conditions and agree to them."}/>
        {errors.readTerms && <p className="form-error">{errors.readTerms.message}</p>}
        <Button btnText={"Continue"} btnType="submit"/>
      </form>
    </div>
  )
}

export default Agreement