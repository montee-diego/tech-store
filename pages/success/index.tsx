import Style from "../../styles/Success.module.css"

const Success = () => {
  return (
    <section>
      <div className={Style.wrapper}>
        <img src='/tech-store/img/order-complete.svg' alt='Success!' />
        <h2>Thank you for your sample order!</h2>
      </div>
    </section>
  )
}

export default Success
