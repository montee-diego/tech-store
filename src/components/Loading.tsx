import Style from "@styles/components/Loading.module.css"

const Loading = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.loading}></div>
      <p>Loading</p>
    </div>
  )
}

export default Loading
